import { Provider } from 'react-redux';
import { Main } from './components/pages/main/Main';
import { store } from './reducers';
import { globalStyles } from './styles';
import { useStyles } from './hooks';

import '@livechat/design-system/dist/design-system.css';

export const App = () => {
    const classes = useStyles(globalStyles, App);

    return (
        <Provider store={store}>
            <div className={classes.root}>
                <Main />
            </div>
        </Provider>
    );
};
