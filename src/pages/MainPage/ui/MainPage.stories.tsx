import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
    render: () => <MainPage />,
    decorators: [withThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    render: () => <MainPage />,
    decorators: [withThemeDecorator(Theme.DARK)],
};
