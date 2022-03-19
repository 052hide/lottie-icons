import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { FavoriteButton } from './FavoriteButton'

const meta: ComponentMeta<typeof FavoriteButton> = {
  title: 'FavoriteButton',
  component: FavoriteButton,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof FavoriteButton> = {
  args: {},
}
