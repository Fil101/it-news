import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

import cls from "./Navbar.module.scss"

interface NavbarProp {
    className?: string;
}

export const Navbar = ({className}: NavbarProp) => {

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    className={cls.mainLink}
                    theme={AppLinkTheme.INVERTED}
                >
                    Главная
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.INVERTED}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};