import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { RecoilRoot } from 'recoil'

import { useCartCount } from '@/stores'

import { CartIcon } from './CartIcon'

const ComponentWithStore = () => {
  const { cartCount, setCartCount } = useCartCount()

  return (
    <div>
      <div>
        <CartIcon />
      </div>
      <div className={'tw-mt-4'}>
        <button
          className={
            'tw-rounded tw-border tw-bg-indigo-600 tw-py-1 tw-px-2 tw-text-white'
          }
          onClick={() =>
            setCartCount({
              value: cartCount.value + 1,
              animating: true,
            })
          }
        >
          Add Cart
        </button>
      </div>
    </div>
  )
}

const meta: ComponentMeta<typeof ComponentWithStore> = {
  title: 'CartIcon',
  component: ComponentWithStore,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof ComponentWithStore> = {
  args: {},
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>],
}
