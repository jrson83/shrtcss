import Form from './form'
import FormGroup from './form-group'
import Input from './input'
import SelectInput from './select-input'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components',
} satisfies StoryDefault

export const FormScreen: Story = () => {
  return (
    <div className='story-wrapper'>
      <h1>Form</h1>
      <p>
        Display any HTML <code>&#x3C;form&#x3E;</code> element for user input.
      </p>
      <div className='example-wrapper'>
        <Form onSubmit={() => console.log('submit')}>
          <FormGroup
            label='Game Title'
            htmlFor='input-title'
            helper='Configure the title of the game'
            ifta
          >
            <Input
              id='input-title'
              type='text'
              placeholder='Bloodborne (Level 544)'
              onInput={() => console.log('input change')}
              autoComplete='off'
            />
          </FormGroup>
          <FormGroup
            label='PSN Account ID'
            htmlFor='input-profile-id'
            helper='Configure the psn account id'
            ifta
          >
            <Input
              id='input-profile-id'
              placeholder='1ceaa172'
              type='text'
              onInput={() => console.log('input change')}
              autoComplete='off'
            />
          </FormGroup>
          <FormGroup
            label='PlayStation model'
            htmlFor='input-console'
            helper='Configure the playstation model'
            ifta
          >
            <SelectInput
              id='input-console'
              items={[
                {
                  id: '1',
                  name: 'PlayStation 4',
                },
                {
                  id: '2',
                  name: 'PlayStation 5',
                },
              ]}
              value={'2'}
              labelExtractor={({ name }) => name}
              valueExtractor={({ id }) => id}
              onChange={() => console.log('input change')}
            />
          </FormGroup>
        </Form>
      </div>
    </div>
  )
}

FormScreen.storyName = 'Form'
