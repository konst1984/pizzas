export interface FilterSliceState {
  categoryId: number;
  sort: string;
  currentPage: number;
  isLoading: boolean;
  pizzaArr: [];
  searchValue: string;
  sortCategory?: string;
}

export const initialState: FilterSliceState = {
  categoryId: 0,
  sort: "rating",
  currentPage: 1,
  isLoading: false,
  pizzaArr: [],
  searchValue: "",
};
