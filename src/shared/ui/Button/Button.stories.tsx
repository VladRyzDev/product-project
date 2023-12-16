import { Meta, StoryObj } from '@storybook/react';
import i18n from 'shared/config/i18n/i18n';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
    render: () => <Button>{i18n.t('Text')}</Button>,
};

export const Clear: Story = {
    render: () => <Button theme={ThemeButton.CLEAR}>{i18n.t('Text')}</Button>,
};

export const Outline: Story = {
    render: () => <Button theme={ThemeButton.OUTLINE}>{i18n.t('Text')}</Button>,
};
