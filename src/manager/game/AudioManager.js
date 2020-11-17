import { Howl } from 'howler'
import music from 'asset/music/bgm.mp3'

class AudioManager {
  constructor() {
    this.musicVolume = 0.5
    this.sfxVolume = 0.5
  }

  bgm = () => {
    const sound = new Howl({
      src: [music],
      autoplay: true,
      loop: true,
      volume: this.musicVolume,
      onend: function () {
        sound.play()
      }
    })
  }
}

export default AudioManager
