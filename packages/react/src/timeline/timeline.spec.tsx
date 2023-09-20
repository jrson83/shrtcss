import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import Timeline, { type TimeItem } from './timeline'

const testTimeline: TimeItem[] = [
  {
    id: 1,
    completed: false,
    date: '17:00 PM',
    label: 'Test #1',
    color: 'success',
  },
  {
    id: 2,
    date: '13:00 PM',
    label: 'Test #2',
    color: 'success',
  },
  {
    id: 3,
    date: '12:00 PM',
    label: 'Test #3',
    color: 'success',
  },
  {
    id: 4,
    date: '11:00 PM',
    label: 'Test #4',
    color: 'success',
  },
]

describe('Timeline component test', () => {
  afterEach(() => {
    cleanup()
  })

  test('Should render default timeline', async () => {
    render(<Timeline items={testTimeline} />)

    const timeline = screen.getByRole('list')
    expect(timeline).toBeInTheDocument()

    const timelineItems = screen.getAllByRole('listitem')
    expect(timelineItems).toHaveLength(4)

    timelineItems.forEach((item, idx) => {
      const result = testTimeline.find((item) => item.id === idx + 1)

      expect(item).toBeInTheDocument()
      expect(item).toHaveTextContent(`${result?.date}${result?.label}`)
    })
  })
})
