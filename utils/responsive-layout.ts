import {HEIGHT, WIDTH} from '@/constants';

const BASE_WIDTH = 393;
const BASE_HEIGHT = 852;

const IS_PORTRAIT = HEIGHT > WIDTH;
const realWidth = IS_PORTRAIT ? WIDTH : HEIGHT;
const baseWidth = IS_PORTRAIT ? BASE_WIDTH : BASE_HEIGHT;

const vp = (size: number): number => Math.round((size * realWidth) / baseWidth);

global.vp = vp;

declare global {
  interface ObjectConstructor {
    typedKeys<T>(obj: T): Array<keyof T>;
  }
}

Object.typedKeys = Object.keys;
