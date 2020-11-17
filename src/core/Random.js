import MersenneTwister from 'mersenne-twister';

export class Random {
  constructor(seed = new Date().getTime()) {
    this.mt = new MersenneTwister(seed);
  }

  bool = () => {
    return this.mt.random() * 100 < 50;
  }

  integer = (min, max) => {
    const _min = min || 0
    const _max = max || 100
    return Math.floor(this.mt.random() * (_max - _min + 1) + _min)
  }

  percentage = (chance) => {
    return this.mt.random() * 100 < chance
  }
}