export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type FetchPizzas = {
  sortCategory: string;
  sortOrder?: string;
  search: string;
  sortBy: string;
  currentPage: number;
};
