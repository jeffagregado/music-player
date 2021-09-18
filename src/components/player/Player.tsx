import { useEffect, useRef, useState } from 'react'
import useStore from '../../store/useStore'
import styled from 'styled-components'
import Controls from './Controls'
import Cover from './Cover'
import Label from './Label'
import ProgressBar from './ProgressBar'
import { calculateTime } from '../../utils/calculateTime'
import LibraryBtn from '../buttons/LibraryBtn'
import useSetTitle from '../../utils/hooks/useSetTitle'

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
  height: 100vh;

  @media (min-width: 768px) {
    padding-top: 0em;
  }
`

const Player = () => {
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  // references
  const audioEl = useRef<HTMLAudioElement | null>(null) // ref for audio
  const rangeRef = useRef<HTMLInputElement | null>(null) // ref for progress bar
  const animationRef = useRef<any>(null) // ref for requestAnimationFrame

  // song list data
  const songList = useStore((state) => state.songList)

  // current index
  const currentSongIndex = useStore((state) => state.currentSongIndex)

  // isPlaying = true or false
  const isPlaying = useStore((state) => state.isPlaying)
  console.log('isPlaying', isPlaying)

  useEffect(() => {
    if (isPlaying) {
      audioEl.current?.play() // play current music
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioEl.current?.pause() // pause current music
      cancelAnimationFrame(animationRef.current)
    }

    // set gradient color one from the current song
    rangeRef.current?.style.setProperty(
      '--seek-before-color-one',
      `${songList[currentSongIndex].color[0]}`
    )

    // set gradient color two from the current song
    rangeRef.current?.style.setProperty(
      '--seek-before-color-two',
      `${songList[currentSongIndex].color[1]}`
    )
  })

  // seek animation while playing
  const whilePlaying = () => {
    rangeRef.current!.value = audioEl.current!.currentTime.toString()
    changePlayerCurrentTime()
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  // total duration of the current music if meta data is available
  const loadedMetaData = () => {
    const seconds = Math.floor(audioEl.current!.duration)
    setDuration(seconds)
    rangeRef.current!.max = seconds.toString()
  }

  // change the range of the progress bar
  const changeRange = () => {
    const audio = audioEl.current
    const progressBar = rangeRef.current

    audio!.currentTime = parseFloat(progressBar!.value)
    changePlayerCurrentTime()
  }

  const changePlayerCurrentTime = () => {
    // tracks the music range
    rangeRef.current?.style.setProperty(
      '--seek-before-width',
      `${(parseFloat(rangeRef.current.value) / duration) * 100}%`
    )
    setCurrentTime(parseFloat(rangeRef.current!.value))
  }

  // current music name and artist
  const currentMusicTitle = `${songList[currentSongIndex].name} | ${songList[currentSongIndex].artist}`

  // custom hook to change title
  useSetTitle(currentMusicTitle)

  return (
    <PlayerContainer>
      <LibraryBtn />
      <audio
        ref={audioEl}
        src={songList[currentSongIndex].audio}
        onLoadedMetadata={loadedMetaData}
      ></audio>
      <Cover
        coverSrc={songList[currentSongIndex].cover}
        altCover={songList[currentSongIndex].name}
      />
      <Label />
      <ProgressBar
        onChange={changeRange}
        duration={duration && !isNaN(duration) && calculateTime(duration)}
        currentTime={calculateTime(currentTime)}
        progressRef={rangeRef}
      />
      <Controls isPlaying={isPlaying} />
    </PlayerContainer>
  )
}

export default Player
