import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';

interface NavbarProp {
    className?: string;
}

export const Navbar = ({ className }: NavbarProp) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    className={cls.mainLink}
                    theme={AppLinkTheme.INVERTED}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLinkTheme.INVERTED}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
