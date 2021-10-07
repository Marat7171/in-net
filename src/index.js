import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

/*</React.StrictMode>*/
ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
                <App/>
            </Provider>
        </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
