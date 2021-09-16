import styled from 'styled-components'
import useStore from '../../store/PlayerStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledLibrary = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.5em 1em;

  &:hover {
    color: white;
    background-color: black;
    transition: 300ms ease-in-out all
  }
`

const LibraryBtn = () => {
  const showLibrary = useStore((state) => state.libraryToggle)

  return (
    <StyledLibrary onClick={showLibrary}>
      <FontAwesomeIcon icon={['fas', 'music']} className="mr-2" />
      Library
    </StyledLibrary>
  )
}

export default LibraryBtn
