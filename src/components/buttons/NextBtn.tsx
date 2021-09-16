import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { useHandleControl } from '../../utils/hooks/useHandleControl';

const Button = styled.button`
  color: black;
  font-size: 2rem;
`

const NextBtn = () => {
  // trigger next song function with custom hook
  const {nextSong} = useHandleControl()

  return (
    <Button onClick={nextSong}>
      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
    </Button>
  )
}

export default NextBtn
