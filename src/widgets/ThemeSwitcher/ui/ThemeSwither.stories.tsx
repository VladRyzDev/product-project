import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
    render: () => <ThemeSwitcher />,
    decorators: [withThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    render: () => <ThemeSwitcher />,
    decorators: [withThemeDecorator(Theme.DARK)],
};
