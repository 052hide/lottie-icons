import { useState } from 'react'

import { FavoriteButton } from '@/components/FavoriteButton'

export const SampleComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div>
      <FavoriteButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </div>
  )
}
