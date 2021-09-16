import { useEffect, useState } from 'react'

const useSetTitle = (title: string) => {
  const [docTitle, setdocTitle] = useState('')

  // set Title when rendered
  useEffect(() => {
    setdocTitle(title)
    document.title = `${docTitle}`
  }, [docTitle, title])

  return [docTitle, setdocTitle]
}

export default useSetTitle
