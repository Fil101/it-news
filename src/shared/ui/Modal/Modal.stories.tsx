import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const modalText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl condimentum id venenatis a. Semper risus in hendrerit gravida rutrum quisque non tellus orci.';

export const ModalLight = Template.bind({});
ModalLight.args = {
    isOpen: true,
    children: modalText,
};

export const ModalDark = Template.bind({});
ModalDark.args = {
    isOpen: true,
    children: modalText,
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
