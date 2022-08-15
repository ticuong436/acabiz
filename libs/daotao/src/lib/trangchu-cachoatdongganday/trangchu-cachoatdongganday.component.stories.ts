import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TrangchuCachoatdonggandayComponent } from './trangchu-cachoatdongganday.component';

export default {
  title: 'TrangchuCachoatdonggandayComponent',
  component: TrangchuCachoatdonggandayComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TrangchuCachoatdonggandayComponent>;

const Template: Story<TrangchuCachoatdonggandayComponent> = (args: TrangchuCachoatdonggandayComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}