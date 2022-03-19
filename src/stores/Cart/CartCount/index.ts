import { atom, useRecoilState } from 'recoil'

import { KEYS } from './key'

type CartCountState = {
  value: number
  animating: boolean
}

const cartCountState = atom<CartCountState>({
  key: KEYS.cartCount(),
  default: {
    value: 0,
    animating: false,
  },
})

export const useCartCount = () => {
  const [cartCount, setCartCount] = useRecoilState(cartCountState)
  return { cartCount, setCartCount }
}
