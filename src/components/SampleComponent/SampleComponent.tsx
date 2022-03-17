import animationData from '@/icons/BlueBalloon/data.json'
import { useLottie } from 'lottie-react'

export const SampleComponent = () => {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options)

  return <div>{View}</div>
}
