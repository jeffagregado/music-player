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

  const musicLists = useStore((state) => state.songList)

  return (
    <Modal propRef={modalRef} isState={showLibrary}>
      <ul>
        {musicLists.map((music: any) => (
          <li>
            <Card src={music.cover} title={music.name} artist={music.artist} />
          </li>
        ))}
      </ul>
    </Modal>
  )
}

export default Library
