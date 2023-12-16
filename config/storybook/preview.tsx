import { Preview } from '@storybook/react';
import i18n from 'shared/config/i18n/i18n';
import { withThemeDecorator } from '../../src/shared/config/storybook/withThemeDecorator/withThemeDecorator';
import { withStyleDecorator } from '../../src/shared/config/storybook/withStyleDecorator/withStyleDecorator';
import { withRouterDecorator } from '../../src/shared/config/storybook/withRouterDecorator/withRouterDecorator';
import { Theme } from '../../src/app/provider/ThemeProvider';
import 'app/styles/index.scss';

const preview: Preview = {
    globals: {
        locale: 'en',
        locales: {
            en: 'English',
            ru: 'Русский',
        },
    },
    parameters: {
        i18n,
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [withStyleDecorator, withThemeDecorator(Theme.DARK), withRouterDecorator],
};

export default preview;
