export type Saved<T> = T & {
  id: number;
};

export interface PaginationSearch<T> {
  result: Saved<T>[];
  total: number;
  hasMore: boolean;
}

export interface QuerySearch<T> {
  query: Partial<T>;
  pagination: number;
  limit: number;
}