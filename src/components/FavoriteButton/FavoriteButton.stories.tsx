import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { useState } from 'react'

import { FavoriteButton } from './FavoriteButton'

const ComponentWithState = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return <FavoriteButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
}

const meta: ComponentMeta<typeof ComponentWithState> = {
  title: 'FavoriteButton',
  component: ComponentWithState,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof ComponentWithState> = {
  args: {},
}
