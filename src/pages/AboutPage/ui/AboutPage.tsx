import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    const max = 'mahimko';

    return (
        <div>
            {max}
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
