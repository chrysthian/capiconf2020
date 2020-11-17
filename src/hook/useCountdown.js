import { useEffect, useState } from 'react'
import moment from 'moment'

const timeRegex = /[0-9]{2}:[0-9]{2}:[0-9]{2}/

function getSecondsFromTime(time) {
  return moment(time, 'HH:mm:ss')
    .diff(moment().startOf('day'), 'seconds')
}

function getFormatFromSeconds(seconds, format) {
  return moment().startOf('day')
    .seconds(seconds)
    .format(format)
}

export default function useCountdown(
  time = '00:00:01',
  callback = () => { },
  updateInterval = '00:00:01',
  outputFormat = 'mm:ss',
) {
  const [startingSeconds] = useState(moment().unix())
  const [totalSeconds] = useState(getSecondsFromTime(time))

  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds)

  const [updateIntervalSeconds] = useState(getSecondsFromTime(updateInterval))

  useEffect(() => {
    if (!timeRegex.test(time) || !timeRegex.test(updateInterval)) {
      throw new Error('Invalid time/interval format, please use HH:mm:ss')
    }

    const interval = setInterval(() => {
      setRemainingSeconds(totalSeconds - (moment().unix() - startingSeconds))
    }, updateIntervalSeconds * 1000)

    const timeout = setTimeout(() => {
      clearInterval(interval)
    }, (totalSeconds + 1) * 1000) // We must add one more second to deal with sloppy milliseconds

    const callbackTimeout = setTimeout(() => {
      callback()
    }, totalSeconds * 1000)

    return function cleanup() {
      clearTimeout(timeout)
      clearTimeout(callbackTimeout)
      clearInterval(interval)
    }
  }, [])

  return getFormatFromSeconds(remainingSeconds >= 0 ? remainingSeconds : 0, outputFormat)
}
