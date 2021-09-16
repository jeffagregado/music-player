import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { useHandleControl } from '../../utils/hooks/useHandleControl'

const Button = styled.button`
  color: black;
  font-size: 2rem;
`

const PrevBtn = () => {
  // trigger prev song function with custom hook
  const {prevSong} = useHandleControl()

  return (
    <Button onClick={prevSong}>
      <FontAwesomeIcon icon={['fas', 'chevron-left']} />
    </Button>
  )
}

export default PrevBtn
