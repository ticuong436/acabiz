import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TrangchuThongketongquanComponent } from '../trangchu-thongketongquan/trangchu-thongketongquan.component';
import * as trangchuThongketongquanComponentStories from '../trangchu-thongketongquan/trangchu-thongketongquan.component.stories';
import { TrangchuComponent } from './trangchu.component';
import {MaterialExampleModule} from '@my-org/my-lib'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
export default {
  title: 'TrangchuComponent',
  component: TrangchuComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialExampleModule, BrowserAnimationsModule, CommonModule],
      declarations:[TrangchuThongketongquanComponent]
    })
  ],
  
} as Meta<TrangchuComponent>;

const Template: Story<TrangchuComponent> = (args: TrangchuComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  ...trangchuThongketongquanComponentStories.Color.args
}