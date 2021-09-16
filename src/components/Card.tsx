import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 300px;
  cursor: pointer;

  & > h1 {
    font-size: 1.5rem;
  }

  & > h1,
  h2 {
    text-align: center;
  }
`

const Image = styled.img`
  width: 100%;
  height: 300px;
`

interface Props {
  src: string
  alt?: string
  title: string
  artist: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Card = ({ src, alt, title, artist, onClick }: Props) => {
  return (
    <StyledCard onClick={onClick}>
      <Image src={src} alt={alt} />

      <h1>{title}</h1>
      <h2>{artist}</h2>
    </StyledCard>
  )
}

export default Card
