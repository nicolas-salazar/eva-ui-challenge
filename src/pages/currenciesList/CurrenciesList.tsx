import { Link } from 'react-router-dom';
import useCurrenciesPricesList from '../../hooks/useCurrenciesPricesList';
import AppLayout from '../../layout';

import { LoadingLabel, Table } from './CurrenciesList.styles';

export interface CurrenciesListProps {}

const CurrenciesList = ({}: CurrenciesListProps) => {
  const { currenciesData, isLoading } = useCurrenciesPricesList();

  return (
    <AppLayout>
      <div>
        <label>Filter By</label>
        <select>
          <option>Name</option>
          <option>Price</option>
          <option>Market Cap</option>
          <option>Circulating supply</option>
        </select>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price [USD]</th>
            <th>Price [EUR]</th>
            <th>Price [JPY]</th>
            <th>Price [BTC]</th>
            <th>Price [ETH]</th>
            <th>Market Cap</th>
            <th>Circulating supply</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currenciesData.map((currencyData) => {
            return (
              <tr key={`currencyRow.${currencyData.name}`}>
                <td>{currencyData.name}</td>
                <td>{currencyData.priceUSD}</td>
                <td>{currencyData.priceEUR}</td>
                <td>{currencyData.priceJPY}</td>
                <td>{currencyData.priceBTC}</td>
                <td>{currencyData.priceETH}</td>
                <td>{currencyData.marketCap}</td>
                <td>{currencyData.circulatingSupply}</td>
                <td>
                  <Link to={`/detail/${currencyData.name}`}>Ver</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {isLoading && <LoadingLabel />}
    </AppLayout>
  );
};

export default CurrenciesList;
