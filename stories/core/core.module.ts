import { NgModule } from '@angular/core';
import { CoreService } from '../../projects/core/src/public_api';

@NgModule({
  providers: [
    CoreService,
  ]
})
export class CoreStoriesModule {}
