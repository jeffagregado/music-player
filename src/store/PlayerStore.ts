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
  setInActive: (id: number | string) => void
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

  // Go to next song
  nextSongIndex: () =>
    set((state) => ({ currentSongIndex: state.currentSongIndex + 1 })),
  // Go to prev song
  prevSongIndex: () =>
    set((state) => ({ currentSongIndex: state.currentSongIndex - 1 })),
  // Toggle current music (play/pause)
  setIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  // Set active to true inside dataMusic Array
  setActive: (id) =>
    set((state) => ({
      songList: state.songList.map((song: any) =>
        song.id === id ? { ...song, active: !song.active } : song
      ),
    })),
  // Set active to false inside dataMusic Array
  setInActive: (id) =>
    set((state) => ({
      songList: state.songList.map((song: any) =>
        song.id !== id ? { ...song, active: false } : song
      ),
    })),
  // Toggle library modal
  libraryToggle: () => {
    const { showLibrary } = get()
    set({ showLibrary: !showLibrary })
  },
  // Set current song index
  setCurrentSongIndex: (index: number) =>
    set((state) => {
      state.currentSongIndex = index
    }),
  // Set isPlaying to always false
  setAlwaysTrue: () => set((state) => ({ isPlaying: true })),
}))

export default useStore
