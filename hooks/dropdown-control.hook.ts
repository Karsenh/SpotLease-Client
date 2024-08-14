import {RefObject, useState} from 'react';

import {View} from 'react-native';
import {
  SharedValue,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {HEIGHT} from '@/constants';

export type TPosition = 'top' | 'bottom';

type TUseDropdownControl = (args?: {
  containerRef: RefObject<View>;
  dropdownSize?: number;
}) => {
  handleOpen: () => void;
  progress: SharedValue<number>;
  position: TPosition;
  isOpened: boolean;
};

const DROPDOWN_DEFAULT_SIZE = vp(228);

export const useDropdownControl: TUseDropdownControl = args => {
  const containerRef = args?.containerRef;
  const dropdownSize = args?.dropdownSize ?? DROPDOWN_DEFAULT_SIZE;

  const {bottom} = useSafeAreaInsets();
  const [isOpened, setIsOpened] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const progress = useDerivedValue(() => withTiming(isOpened ? 1 : 0));

  const handleOpen = () => {
    containerRef?.current?.measure((_x, _y, _w, _h, _px, py) => {
      setPosition(HEIGHT - py < bottom + dropdownSize ? 'top' : 'bottom');
    });

    setTimeout(() => {
      setIsOpened(prev => !prev);
    }, 100);
  };

  return {
    handleOpen,
    position,
    progress,
    isOpened,
  };
};
