import '../src/assets/styles/App.scss';
import Header from "./components/Header";
import CoinInfo from "./components/CoinInfo";
import Footer from "./components/Footer";
import { createStore, applyMiddleware } from 'redux';
import appReducer from "./redux/reducers";
import thunk from 'redux-thunk';
import { Fragment } from 'react';
import { Provider } from 'react-redux';

const store = createStore(appReducer, applyMiddleware(thunk));


function App() {
    return (
        <Provider store = {store}>
        <Fragment>
            <section className="main">
                <Header/>
                <CoinInfo/>
            </section>
            <Footer />
        </Fragment>
        </Provider>
    );
}

export default App;
