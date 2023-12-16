import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPage {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPage) => {
    const { t } = useTranslation();

    return <div className={classNames(cls.NotFoundPage, {}, [className])}>{t('Страница не найдена')}</div>;
};
