import { useCallback } from 'react'
import debounce from 'lodash/debounce'

const useDebounce = (fn, delay, watchedVariables = []) => useCallback(debounce(fn, delay), watchedVariables)

export default useDebounce
