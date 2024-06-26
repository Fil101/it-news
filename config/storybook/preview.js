import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {
    TranslateDecorator,
} from '../../src/shared/config/storybook/TranslateDecorator/TranslateDecorator';

import 'app/styles/index.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

// TODO: необходимо добавить еще ContextDecorator для работы ThemeSwitcher
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(TranslateDecorator);
