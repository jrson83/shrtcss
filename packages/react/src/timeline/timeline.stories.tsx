import { decoratorsTemplate } from '@/storylite/decorators'
import { Story } from '@storylite/storylite'
import Timeline, { type TimeItem } from './timeline'
import Docs from './timeline.docs.mdx'

type StoryType = Story<typeof Timeline>
type StoryDocsType = Story<typeof Docs>

/** https://www.codevertiser.com/update-javascript-array-of-object/ */
function updateArrayOfObjects(
  arr: TimeItem[],
  id: number,
  updatedData: Partial<TimeItem>
): TimeItem[] {
  return arr.map((item) =>
    item.id === id ? { ...item, ...updatedData } : item
  )
}

const timelineStoryItems: TimeItem[] = [
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

let timelineStoryUncompletedItems = updateArrayOfObjects(
  timelineStoryItems,
  3,
  {
    completed: false,
    date: undefined,
  }
)

let timelineStoryColorItems = updateArrayOfObjects(timelineStoryItems, 1, {
  color: 'info',
})
timelineStoryColorItems = updateArrayOfObjects(timelineStoryColorItems, 2, {
  color: 'danger',
})

let timelineStoryWithoutDateItems = updateArrayOfObjects(
  timelineStoryItems,
  1,
  {
    date: undefined,
  }
)

let timelineStoryWithIconItems = updateArrayOfObjects(timelineStoryItems, 1, {
  icon: 'warning',
})

export default {
  title: 'Timeline',
  component: Timeline,
  args: {
    items: [],
    ariaLabel: 'timeline',
    reverse: false,
  },
  decorators: decoratorsTemplate(true),
} satisfies StoryType

export const Main: StoryDocsType = {
  name: 'Docs',
  component: Docs,
  navigation: {
    icon: <span>📄</span>,
    order: 0,
  },
}

export const DefaultStory: StoryType = {
  name: 'Default',
  args: {
    items: timelineStoryItems,
  },
  navigation: {
    order: 1,
  },
}

export const Uncompleted: StoryType = {
  args: {
    items: updateArrayOfObjects(timelineStoryUncompletedItems, 4, {
      completed: false,
      date: undefined,
    }),
  },
}

export const ReverseOrder: StoryType = {
  args: {
    items: timelineStoryItems,
    reverse: true,
  },
}

export const Colors: StoryType = {
  args: {
    items: updateArrayOfObjects(timelineStoryColorItems, 3, {
      color: 'warning',
    }),
  },
}

export const WithoutDate: StoryType = {
  args: {
    items: updateArrayOfObjects(timelineStoryWithoutDateItems, 2, {
      date: undefined,
    }),
  },
}

export const WithIcon: StoryType = {
  args: {
    items: updateArrayOfObjects(timelineStoryWithIconItems, 2, {
      icon: 'calendar',
      color: 'danger',
    }),
  },
}
