import { Buff } from './buff.enum';
import Simulation from './simulator-state';

export default interface EffectiveBuff {
  duration: number;
  stacks: number;
  buff: Buff;

  tick?: (simulationState: Simulation) => void;

  appliedStep: number;
}
