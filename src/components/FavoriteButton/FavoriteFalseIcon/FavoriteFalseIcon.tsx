import type { FavoriteFalseIconProps } from './type'

export const FavoriteFalseIcon = ({
  size = 64,
  color = '#888888',
}: FavoriteFalseIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size} ${size}`}>
      <path
        fill={color}
        d="M-146-177.1l-0.8-0.7c-18.2-14.8-23.1-20-23.1-28.5c0-7,5.7-12.6,12.6-12.6     c5.8,0,9.1,3.3,11.3,5.8c2.2-2.5,5.5-5.8,11.3-5.8c7,0,12.6,5.7,12.6,12.6c0,8.5-4.9,13.7-23.1,28.5L-146-177.1L-146-177.1z      M-157.3-216.3c-5.5,0-10,4.5-10,10c0,7.3,4.6,12.1,21.3,25.8c16.7-13.7,21.3-18.5,21.3-25.8c0-5.5-4.5-10-10-10     c-5,0-7.7,3-9.8,5.4l-1.5,1.7l-1.5-1.7C-149.6-213.3-152.3-216.3-157.3-216.3L-157.3-216.3z"
        transform="translate(178 230)"
      />
    </svg>
  )
}
