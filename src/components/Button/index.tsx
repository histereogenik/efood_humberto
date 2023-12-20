import { TightButton, WideButton } from './styles'

export type Props = {
  type: 'tight' | 'wide'
  title: string
  to?: string
  onClick?: () => void
  children: string
  background: string
}

const Button = ({ type, title, to, onClick, children, background }: Props) => {
  if (type === 'wide') {
    return (
      <WideButton
        type="button"
        title={title}
        onClick={onClick}
        background={background}
      >
        {children}
      </WideButton>
    )
  }

  return (
    <TightButton to={to as string} title={title} background={background}>
      {children}
    </TightButton>
  )
}
export default Button
