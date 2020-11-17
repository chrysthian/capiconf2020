export const useHorizontalScroll = (e, targetId) => {
  const container = document.getElementById(targetId)
  const containerScrollPosition = container.scrollLeft
  container.scrollTo({
    top: 0,
    left: containerScrollPosition + e.deltaY,
    behaviour: 'smooth',
  })
}
