import { Howl } from 'howler'
import music from 'asset/music/bgm.mp3'

class AudioManager {
  constructor() {
    this.musicVolume = 0.05
    this.sfxVolume = 0.05

    this.sound = undefined
  }

  bgm = () => {
    this.sound = new Howl({
      src: [music],
      autoplay: true,
      loop: true,
      volume: this.musicVolume,
      onend: function () {
        this.sound.play()
      }
    })
  }

  stop = () => {
    if (this.sound != null) {
      this.sound.stop();
      this.sound.unload();
      this.sound = null;
    }
  }
}

export default AudioManager
