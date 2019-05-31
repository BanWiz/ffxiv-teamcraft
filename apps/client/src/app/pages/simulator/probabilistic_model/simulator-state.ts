import CrafterStats from './crafter-stats';
import { Craft } from '../../../model/garland-tools/craft';
import { Buff } from './buff.enum';
import EffectiveBuff from './effective-buff';

export default class SimulatorState {
  constructor(
    readonly stats: CrafterStats,
    readonly recipe: Craft,
    //The current step number
    readonly currentStep: number,
    //Current state of the craft
    readonly progress: number,
    readonly quality: number,
    readonly cp: number,
    //The list of active buffs
    readonly buffs: [EffectiveBuff]
  ) {}

  getStats(): CrafterStats {
    let cp = this.stats.cp;
    if (this.buffs.find(buff => buff.buff === Buff.STROKE_OF_GENIUS)) {
      cp += 15;
    }
    let control = this.stats.control;
    const iq = this.buffs.find(buff => buff.buff === Buff.INNER_QUIET);
    if (iq) {
      control *= (1 + (iq.stacks - 1) * 0.2);
    }
    return {
      ...this.stats,
      cp,
      control
    };
  }
}
