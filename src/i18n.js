import React, { createContext, useContext, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from './locales/en.json';
import zhMessages from './locales/zh.json';

const messages = {
  en: enMessages,
  zh: zhMessages,
};

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const I18nProvider = ({ children }) => {
  const getInitialLanguage = () => {
    const storedLanguage = localStorage.getItem('appLanguage');
    if (storedLanguage) {
      return storedLanguage;
    }
    const browserLanguage = navigator.language.split(/[-_]/)[0];
    return messages[browserLanguage] ? browserLanguage : 'en';
  };

  const [locale, setLocale] = useState(getInitialLanguage);

  const switchLanguage = (language) => {
    setLocale(language);
    localStorage.setItem('appLanguage', language);
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default I18nProvider;
