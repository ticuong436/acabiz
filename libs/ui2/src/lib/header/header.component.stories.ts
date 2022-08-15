import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { FooterComponent } from '../footer/footer.component';
import * as FooterStories from '../footer/footer.component.stories';
export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [FooterComponent],
    }),
  ],
} as Meta<HeaderComponent>;

const Template: Story = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'bg-red-500',
  plachoderSearch: 'search product',
  image:
    'https://blueskytechmage.com/ecolife/media/logo/stores/6/logohome5.png',
  ...FooterStories.Primary.args,
};
