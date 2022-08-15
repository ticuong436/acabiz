import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TrangchuThongketongquanComponent } from './trangchu-thongketongquan.component';

export default {
  title: 'TrangchuThongketongquanComponent',
  component: TrangchuThongketongquanComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    icon: {
      options: ['menu_book', 'star_outline'],
      control: { type: 'select' },
    },
    flex:{
      control: { type: 'select' },
      options: ['flex-row-reverse', 'flex-row'],
    }
  },
} as Meta<TrangchuThongketongquanComponent>;

const Template: Story<TrangchuThongketongquanComponent> = (
  args: TrangchuThongketongquanComponent
) => ({
  props: args,
});

export const Color = Template.bind({});
Color.args = {
  backgroundColor: '',
  text: '',
  textcolor: '',
  icon: 'menu_book',
  iconColor: '',
  total: 0,
  flex:'',
};
