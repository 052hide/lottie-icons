import clsx from 'clsx'
import { useEffect } from 'react'
import animationData from '@/icons/Menu/data.json'
import { type LottieOptions, useLottie } from 'lottie-react'
import type { MenuButtonProps } from './type'
import { FRAME, SIZE } from './const'


export const MenuButton = ({isOpen, onClick}: MenuButtonProps) => {
  const options: LottieOptions = {
    animationData,
    loop: false,
    autoplay: false,
    style: {
      width: SIZE,
      height: SIZE
    }
  }

  const { View, goToAndStop,playSegments } = useLottie(options)

  useEffect(() => {
    goToAndStop(isOpen ? FRAME.from : FRAME.to)
  }, [])

  const onClickHandler = () => {
    playSegments(
      !isOpen
        ? [FRAME.from, FRAME.to]
        : [FRAME.to,FRAME.from], true
    )
    onClick()
  }

  return (
    <button onClick={() => onClickHandler()}>
      <div
        className={clsx('tw-relative', 'tw-overflow-hidden')}
        style={{
          width: `${SIZE / 2}px`,
          height: `${SIZE / 2}px`
        }}
      >
        <div
          className={clsx('tw-absolute')}
          style={{
            top: `${SIZE / 4 * -1}px`,
            left: `${SIZE / 4 * -1}px`
          }}
        >{View}</div>
      </div>
  </button>
  )
}
