import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ThuvientailenComponent } from './thuvientailen.component';

export default {
  title: 'ThuvientailenComponent',
  component: ThuvientailenComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ThuvientailenComponent>;

const Template: Story<ThuvientailenComponent> = (args: ThuvientailenComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}