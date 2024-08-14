import {Selector} from 'react-redux';

import {RootState} from '@/store/types';

import {TFiltersState} from './filters.slice';

export const selectLeasePeriod: Selector<
  RootState,
  TFiltersState['general']['period']
> = store => store.filters.general.period;

export const selectGeneralFilters: Selector<
  RootState,
  TFiltersState['general']
> = store => store.filters.general;

export const selectGeneralCategoryId: Selector<
  RootState,
  string | undefined
> = store => store.filters.general.categoryId;

export const selectOrderFilter: Selector<
  RootState,
  TFiltersState['order']
> = store => store.filters.order;

export const selectSearchFilters: Selector<RootState, TFiltersState> = store =>
  store.filters;

export const selectLocationFilter: Selector<
  RootState,
  TFiltersState['general']['address']
> = store => store.filters.general.address;
