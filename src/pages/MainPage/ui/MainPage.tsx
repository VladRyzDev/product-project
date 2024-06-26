import { BugButton } from 'app/provider/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            {t('Главная')}
        </div>
    );
};

export default MainPage;
