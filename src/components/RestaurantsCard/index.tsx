import Tag from '../Tag'
import GoToRestaurant from '../Buttons/GoToRestaurant'

import star from '../../assets/images/star.png'

import * as Styles from './styles'

type Props = {
  title: string
  stars: number
  description: string
  highlighted: boolean
  typeFood: string
  image: string
  idGoTo: number
}

const RestaurantsCard = ({
  title,
  stars,
  description,
  image,
  highlighted,
  typeFood,
  idGoTo
}: Props) => {
  const maxLengthDescription = (maxDescription: string) => {
    if (maxDescription.length > 263) {
      return maxDescription.slice(0, 260) + '...'
    }
    return maxDescription
  }

  return (
    <Styles.ContainerCard>
      <Styles.ImgCard>
        <Styles.ImgRestaurant src={image} />
      </Styles.ImgCard>
      <Styles.InfosCard>
        <Styles.InfosTitle>
          <Styles.TitleCard>{title}</Styles.TitleCard>
          <Styles.StarsCard>
            <Styles.CurrentStarts>{stars}</Styles.CurrentStarts>
            <img src={star} alt="Star" />
          </Styles.StarsCard>
        </Styles.InfosTitle>
        <Styles.Description>
          {maxLengthDescription(description)}
        </Styles.Description>
        <GoToRestaurant
          description={`Clique aqui para ser ir à página do restaurante - ${title}`}
          idPage={idGoTo}
        />
      </Styles.InfosCard>
      <Styles.Infos>
        {highlighted && <Tag>Destaque da semana</Tag>}
        <Tag>{typeFood}</Tag>
      </Styles.Infos>
    </Styles.ContainerCard>
  )
}

export default RestaurantsCard
