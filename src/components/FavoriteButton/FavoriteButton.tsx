import clsx from 'clsx'
import { type LottieOptions, useLottie } from 'lottie-react'
import { useEffect } from 'react'

import type { FavoriteButtonProps } from './type'

import { FRAME, SIZE } from './const'
import animationData from './favoriteAnimationData.json'
import { FavoriteFalseIcon } from './FavoriteFalseIcon'

export const FavoriteButton = ({ isOpen, onClick }: FavoriteButtonProps) => {
  const options: LottieOptions = {
    animationData,
    loop: false,
    autoplay: false,
    style: {
      width: SIZE,
      height: SIZE,
    },
  }

  const { View, goToAndStop, playSegments } = useLottie(options)

  useEffect(() => {
    goToAndStop(isOpen ? FRAME.from : FRAME.to)
  }, [])

  const onClickHandler = () => {
    if (!isOpen) {
      playSegments([FRAME.from, FRAME.to], true)
    }
    onClick()
  }

  return (
    <button onClick={() => onClickHandler()}>
      <div
        className={clsx(
          'tw-relative',
          'tw-flex tw-items-center tw-justify-center'
        )}
      >
        <div
          className={clsx(
            'tw-transition-opacity tw-duration-200',
            isOpen ? 'tw-opacity-0' : 'tw-opacity-100'
          )}
          style={{
            width: `${SIZE / 2}px`,
            height: `${SIZE / 2}px`,
          }}
        >
          <FavoriteFalseIcon size={64} />
        </div>
        <div
          className={clsx(
            'tw-absolute',
            'tw-transition-opacity tw-duration-200',
            isOpen ? 'tw-opacity-100' : 'tw-opacity-0'
          )}
        >
          {View}
        </div>
      </div>
    </button>
  )
}
