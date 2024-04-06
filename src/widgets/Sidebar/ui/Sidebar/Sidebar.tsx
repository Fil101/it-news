import React, {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";

import cls from "./Sidebar.module.scss"
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProp {
    className?: string;
}

export const Sidebar = ({className}: SidebarProp) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle  = () => {
        setCollapsed(prev => !prev)
    };

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                {/*LangSwitcher*/}
            </div>
        </div>
    );
};