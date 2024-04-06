import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface LoaderProp {
    className?: string;
}

export const Loader = ({ className }: LoaderProp) => {
    return (
        <div className={classNames(cls['lds-roller'], {}, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
