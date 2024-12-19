import en from './dictionaries/en.json';
import fr from './dictionaries/fr.json';

export type Locale = 'en' | 'fr';

export const getDictionary = async (locale: Locale) => {
  switch (locale) {
    case 'fr':
      return fr;
    case 'en':
    default:
      return en;
  }
};
