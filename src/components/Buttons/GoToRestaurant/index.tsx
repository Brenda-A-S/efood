import { LinkGoTo } from './styles'

type Props = {
  idPage: number
  description: string
}

const GoToRestaurant = ({ idPage, description }: Props) => {
  return (
    <>
      <LinkGoTo title={description} type="link" to={`/restaurant/${idPage}`}>
        Saiba mais
      </LinkGoTo>
    </>
  )
}

export default GoToRestaurant
