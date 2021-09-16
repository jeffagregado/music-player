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
  const setCurrentSongIndex = useStore((state) => state.setCurrentSongIndex)
  const setAlwaysTrue = useStore((state) => state.setAlwaysTrue)
  const setActive = useStore((state) => state.setActive)

  // find Index
  const getIndex = (id: string) => {
    return musicLists.findIndex((obj: any) => obj.id === id)
  }

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

      {/* {musicLists.map((music: any) => (
        <Card
          src={music.cover}
          title={music.name}
          artist={music.artist}
          onClick={() => playClickedSong(music.id)}
        />
      ))} */}
    </Modal>
  )
}

export default Library
