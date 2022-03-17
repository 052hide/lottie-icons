import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { SampleComponent } from './SampleComponent'

const meta: ComponentMeta<typeof SampleComponent> = {
  title: 'SampleComponent',
  component: SampleComponent,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof SampleComponent> = {
  args: {},
}
