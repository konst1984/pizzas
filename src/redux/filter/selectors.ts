import { RootState } from "../store";

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
export const selectCategory = (state: RootState) => state.filter.categoryId;
export const selectPage = (state: RootState) => state.filter.currentPage;
