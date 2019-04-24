import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  constructor() { }

  calculate(value: number) {
    return value > 5 ? value + 2 : value + 1;
  }
}
