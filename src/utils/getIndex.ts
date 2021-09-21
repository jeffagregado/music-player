interface DataType {
  name: string
  cover: string
  artist: string
  audio: string
  color: []
  id: string
  active: boolean
}

// find index
export const getIndex = (id: string, array: []) => {
  return array.findIndex((obj: DataType) => obj.id === id)
}
