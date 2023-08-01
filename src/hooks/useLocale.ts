import localeData from '../utils/localeData';
import useSelectState from './useSelectState';

function useLocale() {
  const locale = useSelectState('locale') as string;

  return localeData[locale];
}

export default useLocale;
