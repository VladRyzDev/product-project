import { Decorator, StoryFn } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import 'app/styles/index.scss';

export const withThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
    (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );
