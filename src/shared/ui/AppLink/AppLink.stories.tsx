import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: { to: '/' },
    decorators: [withThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    render: (_, { args }) => (
        <AppLink {...args} theme={AppLinkTheme.PRIMARY}>
            Text
        </AppLink>
    ),
};

export const PrimaryDark: Story = {
    render: (_, { args }) => (
        <AppLink {...args} theme={AppLinkTheme.PRIMARY}>
            Text
        </AppLink>
    ),
    decorators: [withThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    render: (_, { args }) => (
        <AppLink {...args} theme={AppLinkTheme.SECONDARY}>
            Text
        </AppLink>
    ),
};

export const SecondaryDark: Story = {
    render: (_, { args }) => (
        <AppLink {...args} theme={AppLinkTheme.SECONDARY}>
            Text
        </AppLink>
    ),
    decorators: [withThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
    render: (_, { args }) => (
        <AppLink {...args} theme={AppLinkTheme.RED}>
            Text
        </AppLink>
    ),
};

export const RedDark: Story = {
    render: (_, { args }) => (
        <AppLink {...args} theme={AppLinkTheme.RED}>
            Text
        </AppLink>
    ),
    decorators: [withThemeDecorator(Theme.DARK)],
};
