export type PaginatedResponse<TPageContent> = {
  page: number;
  total_pages: number;
  total_results: number;
  results: TPageContent[];
};
