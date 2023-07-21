interface TestMapData {
  id: number
  title: string
  createdAt: string
}

const testMapData: TestMapData[] = [
  {
    id: 1,
    title: 'Title #1',
    createdAt: '12 minutes ago',
  },
  {
    id: 2,
    title: 'Title #2',
    createdAt: '52 minutes ago',
  },
  {
    id: 3,
    title: 'Title #3',
    createdAt: '4 days ago',
  },
]

export { testMapData }
