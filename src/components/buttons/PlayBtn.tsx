import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { useHandleControl } from '../../utils/hooks/useHandleControl'

const Button = styled.button`
  color: black;
  font-size: 2rem;
`

interface Props {
  toggle?: boolean
}

const PlayBtn = ({ toggle = false }: Props) => {
  // trigger play function with custom hook
  const { togglePlayPause } = useHandleControl()

  return (
    <Button onClick={togglePlayPause}>
      {toggle && <FontAwesomeIcon icon={['fas', 'pause']} />}
      {!toggle && <FontAwesomeIcon icon={['fas', 'play']} />}
    </Button>
  )
}

export default PlayBtn
