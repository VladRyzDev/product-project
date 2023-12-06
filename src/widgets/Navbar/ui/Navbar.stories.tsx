import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    render: () => <Navbar />,
    decorators: [withThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    render: () => <Navbar />,
    decorators: [withThemeDecorator(Theme.DARK)],
};
