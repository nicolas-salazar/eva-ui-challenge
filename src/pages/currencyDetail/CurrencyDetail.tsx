import { Link } from 'react-router-dom';

import useCurrencyDetail from '../../hooks/useCurrencyDetail';

import { Table } from './CurrencyDetail.styles';
import AppLayout from '../../layout';

const CurrencyDetail = () => {
  const currencyData = useCurrencyDetail();

  return (
    <AppLayout>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price [USD]</th>
          </tr>
        </thead>
        {currencyData && (
          <tbody>
            <tr>
              <td>{currencyData.name}</td>
              <td>{currencyData.priceUSD}</td>
            </tr>
          </tbody>
        )}
      </Table>

      <Link to={`/`}>Volver</Link>
    </AppLayout>
  );
};

export default CurrencyDetail;
