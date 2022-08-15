import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TrangchuThongketuongtacComponent } from './trangchu-thongketuongtac.component';

export default {
  title: 'TrangchuThongketuongtacComponent',
  component: TrangchuThongketuongtacComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TrangchuThongketuongtacComponent>;

const Template: Story<TrangchuThongketuongtacComponent> = (args: TrangchuThongketuongtacComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}