import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { CsvDataProvider } from './components/core/providers/CsvDataProvider';
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
            <div className={classes.root}>
                <ToastContainer />
                <CsvDataProvider>
                    <LocationsMap />
                </CsvDataProvider>
            </div>
        </Provider>
    );
};
