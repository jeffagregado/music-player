import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 300px;
  cursor: pointer;
  padding: 1em;
  border-radius: 10px;

  &:hover {
    background-color: #61d2ff3e;
  }

  &.card-active {
    background-color: #61d2ff3e;
  }

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
  className?: string | any
}

const Card = ({ src, alt, title, artist, onClick, className }: Props) => {
  return (
    <StyledCard onClick={onClick} className={className}>
      <Image src={src} alt={alt} />

      <h1>{title}</h1>
      <h2>{artist}</h2>
    </StyledCard>
  )
}

export default Card
