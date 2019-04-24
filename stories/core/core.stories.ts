import { storiesOf } from '@storybook/angular';
import { CoreComponent } from '../../projects/core/src/public_api';
import { CoreStoriesModule } from './core.module';

const moduleMetadata = {
  imports: [CoreStoriesModule]
};

storiesOf('Core', module)
  .add('default', () => ({
    component: CoreComponent,
    moduleMetadata,
  }))
  .add('counter = 3', () => ({
    component: CoreComponent,
    props: {
      counter: 3,
    },
    moduleMetadata,
  }));
