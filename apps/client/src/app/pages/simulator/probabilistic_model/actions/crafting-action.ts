export default abstract class CraftingAction {

  protected readonly successRate: number = 0;
  protected readonly potency: number = 0;
  protected readonly durabilityCost: number = 10;

  public getSuccessRate() {
    return this.successRate
  }

  public getPotency() {
    return this.successRate
  }

  public getDurabilityCost() {
    return this.durabilityCost
  }

}
