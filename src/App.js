import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { CsvDataProvider } from './components/core/providers/CsvDataProvider';
import { LocationsProvider } from './components/core/providers/LocationsProvider';
import { LocationsMap } from './components/pages/locations/LocationsMap';
import { store } from './reducers';
import { globalStyles } from './styles';
import { useStyles } from './hooks';

import '@livechat/design-system/dist/design-system.css';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    const classes = useStyles(globalStyles, App);

    return (
        <Provider store={store}>
            <div data-testid="App-root" className={classes.root}>
                <ToastContainer />
                <CsvDataProvider>
                    <LocationsProvider>
                        <LocationsMap />
                    </LocationsProvider>
                </CsvDataProvider>
            </div>
        </Provider>
    );
};
