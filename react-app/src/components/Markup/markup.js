// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../sass/main.sass';
import Header from './Header/header';
import Content from './Content/content';


const Markup = () => {
    return (
        <div className='markup'>
            <Header />
            <Content />
        </div>
    );
};

Markup.propTypes = {
    // index: PropTypes.number.isRequired,
};

Markup.defaultProps = {
};


function select(store) {
    return {
        index: store.viewReducer.selectedMenuIndex,
    };
}

export default connect(select)(Markup);
