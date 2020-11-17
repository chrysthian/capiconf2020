export const scrollIntoView = id => {
  setTimeout(() => {
    document.getElementById(id) &&
      document
        .getElementById(id)
        .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }, 500)
}

export const copyToClipboard = v => {
  const copyhelper = document.createElement('textarea')
  document.body.appendChild(copyhelper)
  copyhelper.value = v

  if (navigator.userAgent.match(/ipad|iphone/i)) {
    const range = document.createRange()
    const selection = window.getSelection()
    range.selectNodeContents(copyhelper)
    selection.removeAllRanges()
    selection.addRange(range)
    copyhelper.setSelectionRange(0, 999999)
  } else {
    copyhelper.select()
  }

  document.execCommand('copy')
  document.body.removeChild(copyhelper)
}

export const quicksort = array => {
  if (array.length === 0) {
    return []
  }

  let head = []
  let tail = []
  let pivot = array[0]

  for (let i = 1, len = array.length; i < len; i++) {
    array[i] < pivot
      ? (head[head.length] = array[i])
      : (tail[tail.length] = array[i])
  }

  return quicksort(head).concat(pivot, quicksort(tail))
}

export const flat = arr => {
  return arr.reduce((a, b) => {
    return a.concat(b)
  }, [])
}
