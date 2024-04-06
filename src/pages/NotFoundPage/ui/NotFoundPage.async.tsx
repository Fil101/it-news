import { lazy } from 'react';

// export const MainPageAsync = lazy(() => import('./MainPage'));

export const NotFoundPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./NotFoundPage')), 1500);
}));
