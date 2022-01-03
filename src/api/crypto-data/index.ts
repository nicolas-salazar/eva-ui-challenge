// export const API_BASE_URL: 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms:BTC"|"ETH"|"XRP"|"DOGE"|"BNB"|"LTC"|"ADA"|"BUSD"|"BCH"|"VET"|"DOT"|"EOS"|"SOL"|"SRM"|"USDT"|"BTT"|"TRX"|"FIL"|"LINK"|"MATIC"|"UNI"|"NEO"|"CHZ"|"ETC"|"THETA"|"XLM"|"BSV"|"LUNA"|"WIN"|"SXP&tsyms:USD';
import {
  ApiCurrenciesPricesResponse,
  CurrencyKey,
  CurrencyPriceMetadata,
  CurrenciesFsymsSet,
} from './types';

export const API_BASE_URL =
  'https://min-api.cryptocompare.com/data/pricemultifull';

export const TARGET_TSYMS_TYPE = 'USD,EUR,BTC,JPY,ETH';

// NSALAZAR. NEEDS TO BE TESTED...
export const buildUrlForGettingCurrencyPrices = (
  targetCurrencies: CurrencyKey[],
) => {
  const currenciesListAsText = targetCurrencies.join(',');
  return `${API_BASE_URL}?fsyms=${currenciesListAsText}&tsyms=${TARGET_TSYMS_TYPE}`;
};

// NSALAZAR. NEEDS TO BE TESTED...
export const getCurrenciesPrices = async (): Promise<
  CurrencyPriceMetadata[]
> => {
  const targetCurrencies = CurrenciesFsymsSet;
  const fetchUrl = buildUrlForGettingCurrencyPrices(
    Object.values(targetCurrencies),
  );

  const response = await fetch(fetchUrl);
  const results: ApiCurrenciesPricesResponse = await response.json();

  return Object.values(results.DISPLAY).map((currencyData) => ({
    circulatingSupply: currencyData.USD.CIRCULATINGSUPPLY,
    marketCap: currencyData.USD.MKTCAP,
    name: currencyData.USD.FROMSYMBOL,
    priceBTC: currencyData.BTC.PRICE,
    priceETH: currencyData.ETH.PRICE,
    priceEUR: currencyData.EUR.PRICE,
    priceJPY: currencyData.JPY.PRICE,
    priceUSD: currencyData.USD.PRICE,
  }));
};
