import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";

import cls from "./LangSwitcher.module.scss"
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProp {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProp) => {
    const {t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}
        </Button>
    );
};
