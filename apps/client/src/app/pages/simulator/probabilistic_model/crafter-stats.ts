export type CrafterLevels = [number, number, number, number, number, number, number, number];

export default interface CrafterStats {
  jobId: number;
  craftsmanship: number;
  control: number;
  cp: number;
  readonly specialist: boolean;
  readonly level: number;
  readonly levels: CrafterLevels;
}
