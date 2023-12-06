import { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
    render: () => <Button>Text</Button>,
};

export const Clear: Story = {
    render: () => <Button theme={ThemeButton.CLEAR}>Text</Button>,
};

export const Outline: Story = {
    render: () => <Button theme={ThemeButton.OUTLINE}>Text</Button>,
};
