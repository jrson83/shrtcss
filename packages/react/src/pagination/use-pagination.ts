/* function paginate(items: any[], pageNumber: number, pageSize: number) {
  const startIndex = (pageNumber - 1) * pageSize
  const endIndex = (pageNumber - 1) * pageSize + pageSize

  return items.slice(startIndex, endIndex)
} */

export const usePagination = (
  items: any[],
  currentPage: number,
  pageSize: number
) => {
  /* const paginationData = paginate(items, currentPage, pageSize) */

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = (currentPage - 1) * pageSize + pageSize

  return { totalCount: items.length, data: items.slice(startIndex, endIndex) }
}
