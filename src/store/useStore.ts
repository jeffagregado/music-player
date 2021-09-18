import create from 'zustand'
import testPlayerStore, { PlayerState } from './testPlayerStore'

// type for combined store
type StoreState = PlayerState

// create store (can be use to combine multiple stores)
const useStore = create<StoreState>((set, get) => ({
  ...testPlayerStore(set, get), // store for PlayerStore
}))

export default useStore
