import clsx from 'clsx'
import { useState } from 'react'
import { MenuButton } from './MenuButton'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={clsx(
        'tw-h-12',
        'tw-flex tw-items-center tw-justify-between',
        'tw-px-4'
      )}
    >
      <div className={clsx('tw-flex tw-items-center tw-justify-between')}></div>
      <div className={clsx('tw-flex tw-items-center tw-justify-between')}>
        <MenuButton isOpen={isOpen} onClick={onClick} />
      </div>
    </div>
  )
}
