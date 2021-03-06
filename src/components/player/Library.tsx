import { useRef } from 'react'
import useStore from '../../store/useStore'
import { getIndex } from '../../utils/getIndex'
import useOnClickOutside from '../../utils/hooks/useClickOutside'
import Card from '../Card'
import Modal from '../Modal'

const Library = () => {
  const [showLibrary, libraryToggle] = useStore((state) => [
    state.showLibrary,
    state.libraryToggle,
  ])

  const modalRef = useRef<HTMLDivElement>(null) // ref for div from Modal component
  useOnClickOutside(modalRef, () => libraryToggle()) // custom hook to trigger click outsite modal

  // song list from data
  const musicLists = useStore((state) => state.songList)

  // actions from store
  const setCurrentSongIndex = useStore((state) => state.setCurrentSongIndex) // set current index
  const setAlwaysTrue = useStore((state) => state.setAlwaysTrue) // set isPlaying to true
  const setActive = useStore((state) => state.setActive) // set true on clicked/active music
  const setInActive = useStore((state) => state.setInActive) // set false on non active music


  // play music when clicked
  const playClickedSong = (id: string) => {
    setCurrentSongIndex(getIndex(id, musicLists))
    setAlwaysTrue()
    setActive(id)
    setInActive(id)
  }

  return (
    <Modal propRef={modalRef} isState={showLibrary}>
      <ul>
        {musicLists.map((music: any) => (
          <li key={music.id}>
            <Card
              src={music.cover}
              title={music.name}
              artist={music.artist}
              onClick={() => playClickedSong(music.id)}
              className={music.active === true && 'card-active'}
            />
          </li>
        ))}
      </ul>
    </Modal>
  )
}

export default Library
