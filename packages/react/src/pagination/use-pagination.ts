export const usePagination = (
  items: any[],
  currentPage: number,
  pageSize: number
) => {
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = (currentPage - 1) * pageSize + pageSize

  return { totalCount: items.length, data: items.slice(startIndex, endIndex) }
}
