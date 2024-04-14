import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProp {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = ({ children, element = document.body }: PortalProp) => {
    return createPortal(children, element);
};
