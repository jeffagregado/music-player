import { ReactNode } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem /* 16px */;
  padding-left: 1rem /* 16px */;

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
    padding-right: 10em;
    padding-left: 10em;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    padding-right: 15em;
    padding-left: 15em;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
