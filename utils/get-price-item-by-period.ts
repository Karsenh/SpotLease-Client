import {LeasePeriod, TSpot} from '@/api';

export type TGetPriceItemByPeriodData = Pick<
  TSpot,
  'customPrice' | 'dailyPrice' | 'weeklyPrice' | 'monthlyPrice'
>;

export const getPriceItemByPeriod = (
  period: LeasePeriod,
  data: TGetPriceItemByPeriodData,
) => {
  return data[getPriceKeyByPeriod(period)];
};

export const getPriceKeyByPeriod = (period: LeasePeriod) => {
  if (period === LeasePeriod.DAILY) {
    return 'dailyPrice';
  }
  if (period === LeasePeriod.WEEKLY) {
    return 'weeklyPrice';
  }
  if (period === LeasePeriod.MONTHLY) {
    return 'monthlyPrice';
  }

  return 'customPrice';
};
