import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HeaderComponent } from './header.component';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'bg-red-500',
  href: 'https://storybook.js.org/',
  target: '_blank',
};
export const Base = Template.bind({});
Base.args = {
  color: 'bg-blue-500',
  href: 'https://storybook.js.org/',
  target: '_blank',
};