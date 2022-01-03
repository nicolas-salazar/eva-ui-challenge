import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CurrenciesList from './pages/currenciesList';
import CurrencyDetail from './pages/currencyDetail';

import appMainTheme from './theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={appMainTheme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route path="/detail/:currency_name" component={CurrencyDetail} />
            <Route path="/" component={CurrenciesList} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
