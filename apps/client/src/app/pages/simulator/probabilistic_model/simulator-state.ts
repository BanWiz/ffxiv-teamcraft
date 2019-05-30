import CrafterStats from './crafter-stats';
import { Craft } from '../../../model/garland-tools/craft';

export default class SimulatorState {
  constructor(
    readonly stats: CrafterStats,
    readonly recipe: Craft,

    readonly currentStep: number,

    readonly progress: number,
    readonly quality: number,
    readonly cp: number,
  ) {
  }

  getStats(): CrafterStats {
    let cp = this.stats.cp;

    let control = this.stats.control;
    return {
      ...this.stats,
      cp,
      control
    }
  }
}
