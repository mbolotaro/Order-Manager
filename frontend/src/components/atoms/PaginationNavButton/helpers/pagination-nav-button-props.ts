export interface PaginationNavButtonProps {
  action?: PaginationNavActions;
  pageNumber?: number;
  currentPage?: number;
  onClick: (value?: number | PaginationNavActions) => void;
}

export type PaginationNavActions = 'next' | 'previous'