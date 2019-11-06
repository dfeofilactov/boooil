import { Provider } from 'react-redux';

import App from './components/App';
import reduxStore from './redux/store/store';

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
