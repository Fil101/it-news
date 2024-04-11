import { ReactNode, Suspense } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForUnitTests from 'shared/config/i18n/i18nForUnitTests';
import { MemoryRouter } from 'react-router-dom';

export interface renderComponentOptions {
    route?: string;
}
// Добавление обёртки к компоненту при unit тестировании
// TODO: i18nForUnitTests заменить на i18nForTests после добавления синхронной загрузки тестов
export function renderComponent(component: ReactNode, options: renderComponentOptions = {}) {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <Suspense fallback="">
                <I18nextProvider i18n={i18nForUnitTests}>
                    {component}
                </I18nextProvider>
            </Suspense>
        </MemoryRouter>,
    );
}
