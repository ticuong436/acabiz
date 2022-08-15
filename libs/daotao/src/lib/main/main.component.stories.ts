import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HeaderComponent } from '../header/header.component';
import { TrangchuThongketongquanComponent } from '../trangchu-thongketongquan/trangchu-thongketongquan.component';
import { TrangchuComponent } from '../trangchu/trangchu.component';
import { MainComponent } from './main.component';
import * as trangchuThongketongquanComponentStories from '../trangchu-thongketongquan/trangchu-thongketongquan.component.stories';

export default {
  title: 'MainComponent',
  component: MainComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [HeaderComponent, TrangchuComponent, TrangchuThongketongquanComponent],
    })
  ],
} as Meta<MainComponent>;

const Template: Story<MainComponent> = (args: MainComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  ...trangchuThongketongquanComponentStories.Color.args
}
export const abc = Template.bind({});
abc.args = {
  ...trangchuThongketongquanComponentStories.Color.args
}