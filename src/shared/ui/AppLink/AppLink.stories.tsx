import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { withThemeDecorator } from 'shared/config/storybook/withThemeDecorator/withThemeDecorator';
import i18n from 'shared/config/i18n/i18n';
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
            {i18n.t('Text')}
        </AppLink>
    ),
};

export const PrimaryDark: Story = {
    render: (_, { args }) => (
        <AppLink {...args} theme={AppLinkTheme.PRIMARY}>
            {i18n.t('Text')}
        </AppLink>
    ),
    decorators: [withThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    render: (_, { args }) => (
        <AppLink {...args} theme={AppLinkTheme.SECONDARY}>
            {i18n.t('Text')}
        </AppLink>
    ),
};

export const SecondaryDark: Story = {
    render: (_, { args }) => (
        <AppLink {...args} theme={AppLinkTheme.SECONDARY}>
            {i18n.t('Text')}
        </AppLink>
    ),
    decorators: [withThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
    render: (_, { args }) => (
        <AppLink {...args} theme={AppLinkTheme.RED}>
            {i18n.t('Text')}
        </AppLink>
    ),
};

export const RedDark: Story = {
    render: (_, { args }) => (
        <AppLink {...args} theme={AppLinkTheme.RED}>
            {i18n.t('Text')}
        </AppLink>
    ),
    decorators: [withThemeDecorator(Theme.DARK)],
};
