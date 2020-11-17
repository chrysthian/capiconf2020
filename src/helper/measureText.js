
export const measureText = text => {
    const span = document.getElementById('measure-text');
    let size = 0

    if (span) {
        span.style.font = 'Press Start 2P'
        span.style.fontSize = '12px'

        span.style.height = 'auto'
        span.style.width = 'auto'
        span.style.position = 'absolute'
        span.style.whiteSpace = 'no-wrap'
        span.style.visibility = 'block'
        span.innerHTML = text

        size = Math.ceil(span.clientWidth)
        span.style.visibility = 'hidden'
    }

    return size
}