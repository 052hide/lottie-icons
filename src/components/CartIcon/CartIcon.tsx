import clsx from 'clsx'
import { type LottieOptions, useLottie } from 'lottie-react'
import { useCallback, useEffect } from 'react'

import type { CartIconProps } from './type'

import { useCartCount } from '@/stores'

import animationData from './cartAnimationData.json'
import { FRAME } from './const'

export const CartIcon = ({ size = 64 }: CartIconProps) => {
  const { cartCount, setCartCount } = useCartCount()

  const options: LottieOptions = {
    animationData,
    loop: false,
    autoplay: false,
    style: {
      width: size,
      height: size,
    },
    onComplete: () => {
      if (cartCount.animating) {
        setCartCount({
          ...cartCount,
          animating: false,
        })
      }
    },
  }
  const { View, playSegments } = useLottie(options)

  const animationHandler = useCallback(() => {
    playSegments([FRAME.from, FRAME.to], true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (cartCount.animating) {
      animationHandler()
    }
  }, [cartCount.animating, animationHandler])

  return (
    <div
      className={clsx('tw-relative')}
      style={{
        height: size,
        width: size,
      }}
    >
      {View}
      <div
        className={clsx(
          'tw-absolute',
          'tw-flex tw-items-center tw-justify-center',
          'tw-top-[16px] tw-right-[6px]',
          'tw-h-5 tw-w-5',
          'tw-rounded-full',
          'tw-bg-indigo-600',
          'tw-transition-opacity',
          cartCount.animating ? 'tw-duration-0' : 'tw-duration-500',
          cartCount.animating && 'tw-opacity-0'
        )}
      >
        {!cartCount.animating && (
          <p
            className={clsx(
              'tw-text-white',
              cartCount.value < 10 ? 'tw-text-sm' : 'tw-text-xs'
            )}
          >
            {cartCount.value}
          </p>
        )}
      </div>
    </div>
  )
}
