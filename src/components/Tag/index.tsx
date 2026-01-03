import { TagContainer } from './styles'

export type Props = {
  children: boolean | string
}

const Tag = ({ children }: Props) => {
  return (
    <>
      <TagContainer>{children}</TagContainer>
    </>
  )
}

export default Tag
