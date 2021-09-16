import styled from 'styled-components'

interface Props {
  percentage?: number
  onChange?: () => void
  left?: number
  marginLeft?: number
  progressWidth?: number | any
  duration?: string | boolean | number
  currentTime?: string | number
  progressRef?: React.RefObject<HTMLInputElement>
}

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  width: 100%;
`

const SliderContainer = styled.div`
  margin: 1em;
  width: 60%;
  position: relative;

  @media (min-width: 640px) {
    width: 80%;
  }
`
const ProgressRange = styled.input`
  --bar-bg: #cccccc;
  --seek-before-width: 0;
  --seek-before-color-one: #205950;
  --seek-before-color-two: #2ab3bf;
  --progress-thumb: rgb(255, 59, 59);
  --selected-thumb: rgb(255, 131, 131);

  appearance: none;
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: var(--bar-bg);
  height: 10px;
  cursor: pointer;
  outline: none;

  &::before {
    content: '';
    height: 10px;
    width: var(--seek-before-width);
    background: linear-gradient(
      to right,
      var(--seek-before-color-one),
      var(--seek-before-color-two)
    );
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: none;
    background-color: var(--seek-before-color-one);
    cursor: pointer;
    position: relative;
    margin: -2px 0 0 0;
    z-index: 3;
    box-sizing: border-box;
  }

  &:active::-webkit-slider-thumb {
    transform: scale(1.2);
    background-color: var(--seek-before-color-two);
  }
`

const CurrentProgress = styled.p``
const Duration = styled.p``

const ProgressBar = ({
  onChange,
  duration,
  currentTime,
  progressRef,
}: Props) => {
  return (
    <ProgressContainer>
      <CurrentProgress>{currentTime ? currentTime : '00 : 00'}</CurrentProgress>

      <SliderContainer>
        <ProgressRange
          type="range"
          ref={progressRef}
          defaultValue="0"
          onChange={onChange}
        />
      </SliderContainer>

      <Duration>{duration ? duration : '00 : 00'}</Duration>
    </ProgressContainer>
  )
}

export default ProgressBar
