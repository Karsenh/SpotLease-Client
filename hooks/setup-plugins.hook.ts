import {useEffect} from 'react';

import {useSession} from '@clerk/clerk-expo';
import messaging from '@react-native-firebase/messaging';
import {useFonts} from 'expo-font';
import {getItem} from 'expo-secure-store';
import {PermissionsAndroid, Platform} from 'react-native';
import Config from 'react-native-config';

import {useLazySyncSessionQuery} from '@/api';
import {setSessionSynced, setToken, useAppDispatch} from '@/store';
import {FONT_FAMILIES} from '@/theme';
import {logger, loginHelper, logoutHelper} from '@/utils';

const getPermission = Platform.select({
  android: () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  },
  ios: async () => {
    const authStatus = await messaging().requestPermission();

    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      logger.log('Authorization status:', authStatus);
    }
  },
});

export const useSetupPlugins = () => {
  const dispatch = useAppDispatch();
  const {isSignedIn, session, isLoaded: isClerkLoaded} = useSession();
  const [syncSessionRequest] = useLazySyncSessionQuery();

  const [isFontsLoaded, fontsLoadingError] = useFonts({
    [FONT_FAMILIES.OPEN_SANS_R]: require('../assets/fonts/OpenSans-Regular.ttf'),
    [FONT_FAMILIES.OPEN_SANS_B]: require('../assets/fonts/OpenSans-Bold.ttf'),
    [FONT_FAMILIES.OPEN_SANS_SB]: require('../assets/fonts/OpenSans-SemiBold.ttf'),
    [FONT_FAMILIES.ARSENAL]: require('../assets/fonts/Arsenal-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoadingError) {
      throw fontsLoadingError;
    }
  }, [fontsLoadingError]);

  useEffect(() => {
    let unsubscribe: Function | null = null;

    const setupMessaging = async () => {
      getPermission?.();

      try {
        const token = await messaging().getToken();
        dispatch(setToken({token}));

        messaging().setBackgroundMessageHandler(async message => {
          logger.log(message);
        });

        unsubscribe = messaging().onMessage(async message => {
          try {
            logger.log(message);
          } catch (error) {
            logger.error(error, 'error');
          }
        });
      } catch (error) {
        logger.error(error);
      }
    };

    setupMessaging();

    return () => {
      unsubscribe?.();
    };
  }, [dispatch]);

  useEffect(() => {
    const syncSession = async () => {
      if (!isClerkLoaded) {
        return;
      }

      if (
        isSignedIn &&
        session &&
        getItem(Config.CLERK_STORE_KEY) !== session.id
      ) {
        try {
          await syncSessionRequest().unwrap();

          await loginHelper(session.id);
        } catch (error) {
          logger.log(error);
        }
      } else {
        await logoutHelper();
      }

      dispatch(setSessionSynced(true));
    };

    syncSession();
  }, [dispatch, isSignedIn, session, syncSessionRequest, isClerkLoaded]);

  return {isPluginsLoaded: isFontsLoaded && isClerkLoaded};
};
