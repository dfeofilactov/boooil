import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import backgraundSrc from '../public/img/background.jpg';
import '../sass/main.sass';
import Markup from './Markup/markup';
import Loader from './Helpers/Loader/loader';


const App = ({ loading }) => (
    <>
        { loading && <Loader /> }
        <Markup />
    </>
);

App.propTypes = {
    loading: PropTypes.bool.isRequired,
};

function select(store) {
    return {
        loading: store.viewReducer.loading,
    };
}

export default connect(select)(App);
