import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from './core.service';

@Component({
  selector: 'co-core',
  templateUrl: './core.component.html',
  styles: []
})
export class CoreComponent implements OnInit {
  @Input() counter = 0;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
  }

  update() {
    this.counter = this.coreService.calculate(this.counter);
  }

}
