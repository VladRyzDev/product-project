import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    decorators: [withThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    render: () => <Loader />,
};

export const Dark: Story = {
    render: () => <Loader />,
    decorators: [withThemeDecorator(Theme.DARK)],
};
