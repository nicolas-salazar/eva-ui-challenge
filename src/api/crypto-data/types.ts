export type CurrencyKey =
  | 'ADA'
  | 'BCH'
  | 'BNB'
  | 'BSV'
  | 'BTC'
  | 'BTT'
  | 'BUSD'
  | 'CHZ'
  | 'DOGE'
  | 'DOT'
  | 'EOS'
  | 'ETC'
  | 'ETH'
  | 'FIL'
  | 'LINK'
  | 'LTC'
  | 'LUNA'
  | 'MATIC'
  | 'NEO'
  | 'SOL'
  | 'SRM'
  | 'SXP'
  | 'THETA'
  | 'TRX'
  | 'UNI'
  | 'USDT'
  | 'VET'
  | 'WIN'
  | 'XLM'
  | 'XRP';

export const CurrenciesFsymsSet: Record<CurrencyKey, CurrencyKey> = {
  ADA: 'ADA',
  BCH: 'BCH',
  BNB: 'BNB',
  BSV: 'BSV',
  BTC: 'BTC',
  BTT: 'BTT',
  BUSD: 'BUSD',
  CHZ: 'CHZ',
  DOGE: 'DOGE',
  DOT: 'DOT',
  EOS: 'EOS',
  ETC: 'ETC',
  ETH: 'ETH',
  FIL: 'FIL',
  LINK: 'LINK',
  LTC: 'LTC',
  LUNA: 'LUNA',
  MATIC: 'MATIC',
  NEO: 'NEO',
  SOL: 'SOL',
  SRM: 'SRM',
  SXP: 'SXP',
  THETA: 'THETA',
  TRX: 'TRX',
  UNI: 'UNI',
  USDT: 'USDT',
  VET: 'VET',
  WIN: 'WIN',
  XLM: 'XLM',
  XRP: 'XRP',
};

export type CurrencyPriceRawMetadata = {
  CIRCULATINGSUPPLY: string;
  FROMSYMBOL: string;
  MKTCAP: number;
  PRICE: number;
};

export type CurrencyPriceMetadata = {
  circulatingSupply: string;
  marketCap: number;
  name: string;
  priceBTC: number;
  priceETH: number;
  priceEUR: number;
  priceJPY: number;
  priceUSD: number;
};

export type ApiCurrenciesPricesResponse = {
  DISPLAY: {
    [K in CurrencyKey]: {
      BTC: CurrencyPriceRawMetadata;
      ETH: CurrencyPriceRawMetadata;
      EUR: CurrencyPriceRawMetadata;
      JPY: CurrencyPriceRawMetadata;
      USD: CurrencyPriceRawMetadata;
    };
  };
  RAW: {
    [K in CurrencyKey]: {
      BTC: CurrencyPriceRawMetadata;
      ETH: CurrencyPriceRawMetadata;
      EUR: CurrencyPriceRawMetadata;
      JPY: CurrencyPriceRawMetadata;
      USD: CurrencyPriceRawMetadata;
    };
  };
};
