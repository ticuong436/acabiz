import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TodosComponent } from './todos.component';
export interface Task {
  id: string;
  title: string;
  state: string;
}
export default {
  title: 'TodosComponent',
  component: TodosComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TodosComponent>;

const Template: Story<TodosComponent> = (args: TodosComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_ARCHIVED',
  },
};
