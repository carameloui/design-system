import { css, getCssText } from './styles'

export const button = css({
  all: 'unset',
  backgroundColor: '$viridianGreen',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$lg',
        padding: '$4',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

export interface ButtonProps extends HTMLButtonElement {
  size?: 'small' | 'big'
}

export const createButton = ({
  size,
  innerHTML,
  ...props
}: ButtonProps): HTMLButtonElement => {
  const btn = document.createElement('button') as HTMLButtonElement

  btn.innerHTML = innerHTML
  btn.className = button({ size })

  Object.assign(btn, props)

  console.log(getCssText())
  return btn
}
