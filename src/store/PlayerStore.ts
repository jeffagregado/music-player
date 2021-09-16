import create from 'zustand'
import dataMusic from '../utils/data'

// Zustand for State Management

// types for PlayerState
interface PlayerState {
  songList: any
  currentSongIndex: number
  isPlaying: boolean
  showLibrary: boolean
  nextSongIndex: () => void
  prevSongIndex: () => void
  setIsPlaying: () => void
  setActive: (id: number | string) => void
  libraryToggle: () => void
  setCurrentSongIndex: (id: number) => void
  setAlwaysTrue: () => void
}

// Create Store
const useStore = create<PlayerState>((set, get) => ({
  // initial state
  songList: dataMusic(),
  currentSongIndex: 0,
  isPlaying: false,
  showLibrary: false,

  // actions
  nextSongIndex: () =>
    set((state) => ({ currentSongIndex: state.currentSongIndex + 1 })),
  prevSongIndex: () =>
    set((state) => ({ currentSongIndex: state.currentSongIndex - 1 })),
  setIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setActive: (id) =>
    set((state) => ({
      songList: state.songList.map((song: any) =>
        song.id === id ? { ...song, active: !song.active } : song
      ),
    })),
  libraryToggle: () => {
    const { showLibrary } = get()
    set({ showLibrary: !showLibrary })
  },
  setCurrentSongIndex: (index: number) =>
    set((state) => {
      state.currentSongIndex = index
    }),
  setAlwaysTrue: () => set((state) => ({ isPlaying: true })),
}))

export default useStore
