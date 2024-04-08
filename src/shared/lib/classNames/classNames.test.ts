import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with first param', () => {
        expect(classNames('first-class')).toBe('first-class');
    });

    test('with additional classes', () => {
        expect(classNames('first-class', {}, ['second-class', 'third-class']))
            .toBe('first-class second-class third-class');
    });

    test('with additional classes and mods', () => {
        expect(classNames(
            'first-class',
            { hovered: true, active: undefined, touched: false },
            ['second-class', 'third-class'],
        ))
            .toBe('first-class second-class third-class hovered');
    });
});
