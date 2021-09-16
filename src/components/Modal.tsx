import { AnimatePresence, motion, Variants } from 'framer-motion'
import { ReactNode, RefObject, useEffect } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  isState: boolean
  propRef?: RefObject<HTMLDivElement>
  className?: string
}

const ModalContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(12px);
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
`

const ModalChildren = styled(motion.div)`
  padding: 2em;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  min-width: 350px;
  min-height: 500px;
`

// animation variants for Framer motion components
const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { when: 'afterChildren' } },
}

const modalVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.2 } },
  exit: { y: -100, opacity: 0 },
}

const Modal = ({
  children,
  isState,
  propRef,
}: Props) => {
  useEffect(() => {
    if (isState && (document.body.style.overflow = 'hidden'))
      return () => {
        document.body.removeAttribute('style')
      }
  }, [isState])

  return (
    <AnimatePresence>
      {isState && (
        <ModalContainer
          key="parent"
          variants={overlayVariants}
          initial={'hidden'}
          animate={'visible'}
          exit={'exit'}
        >
          <ModalChildren
            ref={propRef}
            key="child"
            variants={modalVariants}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
          >
            {children}
          </ModalChildren>
        </ModalContainer>
      )}
    </AnimatePresence>
  )
}

export default Modal
