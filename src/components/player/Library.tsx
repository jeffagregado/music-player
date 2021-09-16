import { useRef } from 'react'
import useStore from '../../store/PlayerStore'
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
  const setActive = useStore((state) => state.setActive) // set active on clicked music

  // find Index
  const getIndex = (id: string) => {
    return musicLists.findIndex((obj: any) => obj.id === id)
  }

  // play music when clicked
  const playClickedSong = (id: string) => {
    setCurrentSongIndex(getIndex(id))
    setAlwaysTrue()
    setActive(id)
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
            />
          </li>
        ))}
      </ul>
    </Modal>
  )
}

export default Library
