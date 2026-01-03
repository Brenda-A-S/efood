import { Btn, ContainerBtn } from './styles'

type Props = {
  children: string | number
  onClick?: () => void
  type: 'button' | 'submit'
  disabled?: boolean
}

const BtnDefault = ({ children, onClick, type, disabled }: Props) => {
  return (
    <ContainerBtn>
      <Btn disabled={disabled} type={type} onClick={onClick}>
        {children}
      </Btn>
    </ContainerBtn>
  )
}

export default BtnDefault
