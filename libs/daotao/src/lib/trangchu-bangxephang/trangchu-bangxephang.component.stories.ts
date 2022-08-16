import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TrangchuBangxephangComponent } from './trangchu-bangxephang.component';

export default {
  title: 'TrangchuBangxephangComponent',
  component: TrangchuBangxephangComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TrangchuBangxephangComponent>;

const Template: Story<TrangchuBangxephangComponent> = (args: TrangchuBangxephangComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}