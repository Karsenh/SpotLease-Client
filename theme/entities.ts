import {StyleSheet} from 'react-native';

import {lightTheme} from './themes/light';

export enum TextVariants {
  H1 = 'H1',
  H2 = 'H2',
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
  P4 = 'P4',
  P5 = 'P5',
  P6 = 'P6',
}

export enum FontWeight {
  W400 = '400',
  W600 = '600',
  W700 = '700',
  AW700 = 'A700',
}

export enum TextColors {
  black = 'black',
  white = 'white',
  green_0 = 'green_0',
  green_1 = 'green_1',
  green_2 = 'green_2',
  gray_1 = 'gray_1',
  gray_2 = 'gray_2',
  gray_3 = 'gray_3',
  blue_0 = 'blue_0',
  blue_1 = 'blue_1',
  system_green = 'system_green',
  system_green_light = 'system_green_light',
  system_orange = 'system_orange',
  system_orange_light = 'system_orange_light',
  system_red = 'system_red',
  system_red_light = 'system_red_light',
}

export const textColors: Record<TextColors, string> = {
  [TextColors.black]: lightTheme.black,
  [TextColors.white]: lightTheme.white,
  [TextColors.green_0]: lightTheme.green[0],
  [TextColors.green_1]: lightTheme.green[1],
  [TextColors.green_2]: lightTheme.green[2],
  [TextColors.gray_1]: lightTheme.gray[1],
  [TextColors.gray_2]: lightTheme.gray[2],
  [TextColors.gray_3]: lightTheme.gray[3],
  [TextColors.blue_0]: lightTheme.blue[0],
  [TextColors.blue_1]: lightTheme.blue[1],
  [TextColors.system_green]: lightTheme.system.green.medium,
  [TextColors.system_green_light]: lightTheme.system.green.light,
  [TextColors.system_orange]: lightTheme.system.orange.medium,
  [TextColors.system_orange_light]: lightTheme.system.orange.light,
  [TextColors.system_red]: lightTheme.system.red.medium,
  [TextColors.system_red_light]: lightTheme.system.red.light,
};

export enum FONT_FAMILIES {
  OPEN_SANS_R = 'OPEN_SANS_R',
  OPEN_SANS_SB = 'OPEN_SANS_SB',
  OPEN_SANS_B = 'OPEN_SANS_B',
  ARSENAL = 'ARSENAL',
}

export const fontFamilies: Record<FontWeight, string> = {
  '400': FONT_FAMILIES.OPEN_SANS_R,
  '600': FONT_FAMILIES.OPEN_SANS_SB,
  '700': FONT_FAMILIES.OPEN_SANS_B,
  A700: FONT_FAMILIES.ARSENAL,
};

export const variantStyles = StyleSheet.create({
  [TextVariants.H1]: {
    fontSize: 28,
    lineHeight: 35,
    fontFamily: FONT_FAMILIES.OPEN_SANS_B,
  },
  [TextVariants.H2]: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: FONT_FAMILIES.OPEN_SANS_B,
  },
  [TextVariants.P1]: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: FONT_FAMILIES.OPEN_SANS_SB,
  },
  [TextVariants.P2]: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: FONT_FAMILIES.OPEN_SANS_R,
  },
  [TextVariants.P3]: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FONT_FAMILIES.OPEN_SANS_R,
  },
  [TextVariants.P4]: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: FONT_FAMILIES.OPEN_SANS_R,
  },
  [TextVariants.P5]: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: FONT_FAMILIES.OPEN_SANS_R,
  },
  [TextVariants.P6]: {
    fontSize: 10,
    lineHeight: 15,
    fontFamily: FONT_FAMILIES.OPEN_SANS_R,
  },
});
