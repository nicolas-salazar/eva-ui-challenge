import { useQuery } from 'react-query';

import { getCurrenciesPrices } from '../api/crypto-data';
import { CurrencyPriceMetadata } from '../api/crypto-data/types';

export const REACT_QUERY_CURRENCIES_LIST_QUERY_KEY = 'currenciesPrices';

const useCurrenciesPricesList = (): {
  currenciesData: CurrencyPriceMetadata[];
  isLoading: boolean;
} => {
  const { isLoading, data: currenciesData } = useQuery(
    REACT_QUERY_CURRENCIES_LIST_QUERY_KEY,
    getCurrenciesPrices,
  );

  console.log('NSALAZAR. currenciesData:', currenciesData);

  return {
    currenciesData: currenciesData || [],
    isLoading,
  };
};

export default useCurrenciesPricesList;
