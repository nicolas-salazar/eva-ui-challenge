import { useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { CurrencyPriceMetadata } from '../api/crypto-data/types';
import { REACT_QUERY_CURRENCIES_LIST_QUERY_KEY } from './useCurrenciesPricesList';

const useCurrencyDetail = () => {
  const queryClient = useQueryClient();
  const currencyKey = useMemo(() => {
    return window.location.pathname.split('/').slice(-1)[0];
  }, []);

  const queryData: CurrencyPriceMetadata[] | undefined =
    queryClient.getQueryData(REACT_QUERY_CURRENCIES_LIST_QUERY_KEY);

  const targetCurrencyData: CurrencyPriceMetadata | null | undefined =
    useMemo(() => {
      if (!queryData) {
        return null;
      }

      return queryData.find(
        (item: CurrencyPriceMetadata) => item.name === currencyKey,
      );
    }, [currencyKey, queryData]);

  return targetCurrencyData;
};

export default useCurrencyDetail;
