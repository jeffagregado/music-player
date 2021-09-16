// calculate time in minutes and seconds
export const calculateTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const returnedMins = mins < 10 ? `0${mins}` : `${mins}`
  const secs = Math.floor(seconds % 60)
  const returnedSecs = secs < 10 ? `0${secs}` : `${secs}`

  return `${returnedMins} : ${returnedSecs}`
}
