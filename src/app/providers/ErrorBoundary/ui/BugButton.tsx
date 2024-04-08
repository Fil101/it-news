import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Тестовая кнопка для проверки ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error('Тестовая ошибка');
        }
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('Ошибка')}
        </Button>
    );
};
