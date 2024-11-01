import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocalSwithcerSelect';
import {routing} from '@/i18n/routing';
import style from './Header/Header.module.scss';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur} className={style.header_lang_option}>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}