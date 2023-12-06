import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
    render: () => <AboutPage />,
    decorators: [withThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    render: () => <AboutPage />,
    decorators: [withThemeDecorator(Theme.DARK)],
};
