import { ServiceB } from './service-b';

export class ServiceA {
  private svcB: ServiceB;
  private config: any;

  constructor(svcB: ServiceB, config: any) {
    this.svcB = svcB;
    this.config = config;
  }

  public add(val1: number, val2: number): number {
    return val1 + val2;
  }

  public toString(): string {
    const obj = {
      dep1: this.svcB,
      config: this.config,
    };
    return JSON.stringify(obj);
  }
}
