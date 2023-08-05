export interface PaginationSearch<T> {
  result: T[];
  total: number;
  hasMore: boolean;
}
