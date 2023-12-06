import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
    render: () => <NotFoundPage />,
    decorators: [withThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    render: () => <NotFoundPage />,
    decorators: [withThemeDecorator(Theme.DARK)],
};
