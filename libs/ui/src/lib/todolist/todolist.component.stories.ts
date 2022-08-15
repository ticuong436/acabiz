import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TodolistComponent } from './todolist.component';

export default {
  title: 'TodolistComponent',
  component: TodolistComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TodolistComponent>;

const Template: Story<TodolistComponent> = (args: TodolistComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
