import { useRef } from 'react'
import useStore from '../../store/PlayerStore'
import useOnClickOutside from '../../utils/hooks/useClickOutside'
import Modal from '../Modal'

const Library = () => {
  const [showLibrary, libraryToggle] = useStore((state) => [
    state.showLibrary,
    state.libraryToggle,
  ])

  const modalRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(modalRef, () => libraryToggle())

  return (
    <Modal propRef={modalRef} isState={showLibrary}>
      asdasdasd
    </Modal>
  )
}

export default Library
