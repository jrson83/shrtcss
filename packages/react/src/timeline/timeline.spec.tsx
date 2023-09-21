import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import Timeline, { type TimeItem } from './timeline'

const timelineTestItems: TimeItem[] = [
  {
    id: 1,
    date: '11:00 PM',
    label: 'Signed up',
    color: 'success',
  },
  {
    id: 2,
    date: '11:01 PM',
    label: 'Signed in',
    color: 'success',
  },
  {
    id: 3,
    date: '11:05 PM',
    label: 'Activated account',
    color: 'success',
  },
  {
    id: 4,
    date: '11:30 PM',
    label: 'Signed out',
    color: 'success',
  },
]

describe('Timeline component test', () => {
  afterEach(() => {
    cleanup()
  })

  test('Should render default timeline', async () => {
    render(<Timeline items={timelineTestItems} />)

    const timeline = screen.getByRole('list')
    expect(timeline).toBeInTheDocument()

    const timelineItems = screen.getAllByRole('listitem')
    expect(timelineItems).toHaveLength(4)

    timelineItems.forEach((item, idx) => {
      const result = timelineTestItems.find((item) => item.id === idx + 1)

      expect(item).toBeInTheDocument()
      expect(item).toHaveTextContent(`${result?.date}${result?.label}`)
    })
  })
})
