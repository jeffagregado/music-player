import styled from 'styled-components'
import useStore from '../../store/PlayerStore'

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Name = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5em;
`
const Artist = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1em;
`

const Label = () => {
  // song list data
  const songList = useStore((state) => state.songList)

  // current index
  const currentSongIndex = useStore((state) => state.currentSongIndex)

  return (
    <LabelContainer>
      <Name>{songList[currentSongIndex].name}</Name>
      <Artist>{songList[currentSongIndex].artist}</Artist>
    </LabelContainer>
  )
}

export default Label
