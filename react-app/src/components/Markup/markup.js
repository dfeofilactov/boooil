import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../sass/main.sass';


const Markup = ({ index }) => {
    return (
        <div className='MarkupStyle'>
            <header>
                <div>{ index }</div>
            </header>
        </div>
    );
};

Markup.propTypes = {
    index: PropTypes.number.isRequired,
};

Markup.defaultProps = {
};


function select(store) {
    return {
        index: store.viewReducer.selectedMenuIndex,
    };
}

export default connect(select)(Markup);
