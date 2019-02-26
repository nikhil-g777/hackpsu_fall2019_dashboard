import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';

import LoadingDots from './LoadingDots';

class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };
      }
      render() {
                return(
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10">
                                <ul className="nav nav-tabs">
                                    <li><Link to="/tickets" activeClassName="active">People List</Link></li>
                                    <li>{this.props.loading && <LoadingDots interval={200} dots={20} />}</li>
                                </ul>
                            </div>
                            <div className="col-sm-2">
                            </div>
                        </div>
                    </div>
                    
                );
}
}

Header.propTypes = {
    loading: PropTypes.bool,
    actions: PropTypes.object
};
  
function mapStateToProps(state, ownProps) {
    return {};
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions : bindActionCreators(dispatch)
    };
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Header;