import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {LeasePeriod, TOrder} from '@/api';

export type TFiltersState = {
  general: {
    period: LeasePeriod;
    priceMin?: string;
    priceMax?: string;
    categoryId?: string;
    amenitiesIds?: string[];
    longitude?: number;
    latitude?: number;
    orderBy?: TOrder;
    distance?: number;
    address?: string;
  };

  order: {
    startDate?: Date;
    endDate?: Date;
  };
};

const initialState: TFiltersState = {
  general: {period: LeasePeriod.MONTHLY},
  order: {},
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (
      state,
      {
        payload,
      }: PayloadAction<
        Partial<TFiltersState['general'] & TFiltersState['order']>
      >,
    ) => {
      const {endDate, startDate, ...generalFilters} = payload;

      state.order = {endDate, startDate};
      state.general = {...state.general, ...generalFilters};
    },

    setGeneralFilters: (
      state,
      {payload}: PayloadAction<Partial<TFiltersState['general']>>,
    ) => {
      state.general = {...state.general, ...payload};
    },

    setGeneralCategoryId: (
      state,
      {payload}: PayloadAction<{categoryId: string}>,
    ) => {
      if (state.general.categoryId === payload.categoryId) {
        state.general.categoryId = undefined;
      } else {
        state.general.categoryId = payload.categoryId;
      }
    },

    setOrderFilters: (
      state,
      {payload}: PayloadAction<TFiltersState['order']>,
    ) => {
      state.order = {...state.order, ...payload};
    },
  },
});

export const {
  actions: {
    setGeneralFilters,
    setGeneralCategoryId,
    setOrderFilters,
    setFilters,
  },
  reducer: filtersReducer,
} = filtersSlice;
