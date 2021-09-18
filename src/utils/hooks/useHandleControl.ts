import useStore from '../../store/useStore'

export const useHandleControl = () => {
  // song list data
  const songList = useStore((state) => state.songList)

  // current song index
  const currentSongIndex = useStore((state) => state.currentSongIndex)

  // trigger nextSongIndex and prevSongIndex action
  const nextSongIndex = useStore((state) => state.nextSongIndex)
  const prevSongIndex = useStore((state) => state.prevSongIndex)

  // toggle play
  const togglePlayPause = useStore((state) => state.setIsPlaying)

  // set Active to current song
  const setActive = useStore((state) => state.setActive)

  // go to next song
  const nextSong = () => {
    if (currentSongIndex < songList.length - 1) {
      nextSongIndex()
      setActive(songList[currentSongIndex + 1].id) // toggle current active state
      setActive(songList[currentSongIndex].id) // toggle prev active state
    }
  }

  // go to prev song
  const prevSong = () => {
    if (currentSongIndex > 0) {
      prevSongIndex()
      setActive(songList[currentSongIndex - 1].id) // toggle current active state
      setActive(songList[currentSongIndex].id) // toggle prev active state
    }
  }

  return { togglePlayPause, nextSong, prevSong }
}
