import { Link } from 'react-router-dom'

import { TightButton, WideButton } from './styles'

export type Props = {
  type: 'tight' | 'wide'
  title: string
  to?: string
  onClick?: () => void
  children: string
  background: string
  disabled?: boolean
}

const Button = ({
  disabled,
  type,
  title,
  to,
  onClick,
  children,
  background
}: Props) => {
  if (type === 'wide') {
    return (
      <WideButton
        type="button"
        title={title}
        onClick={onClick}
        background={background}
        disabled={disabled}
      >
        {children}
      </WideButton>
    )
  }

  if (to) {
    return (
      <TightButton as={Link} to={to} title={title} background={background}>
        {children}
      </TightButton>
    )
  }

  return (
    <TightButton
      to={to as string}
      title={title}
      onClick={onClick}
      background={background}
    >
      {children}
    </TightButton>
  )
}
export default Button
