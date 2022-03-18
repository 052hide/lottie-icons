import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Header } from './Header'

const meta: ComponentMeta<typeof Header> = {
  title: 'Header',
  component: Header,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof Header> = {
  args: {},
}
