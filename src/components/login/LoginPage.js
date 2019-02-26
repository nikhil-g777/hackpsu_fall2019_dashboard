// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// // import { FBLogin } from '../../components';

// class LoginPage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       role: 'admin'
//     };
//     this.handleLogin = this.handleLogin.bind(this);
//     this.handleRoleChange = this.handleRoleChange.bind(this);
//   }

//   handleRoleChange(event, index, role) {
//     this.setState({ role });
//   }
//   handleLogin(event) {
//     event.preventDefault();
//     const username = this.refs.username.value;
//     const password = this.refs.password.value;
//     const { role } = this.state;
//     this.props.actions.login({ username, password, role });
//   }

//   render() {
//       return (
//         <div className="container">
//           <div className="col-md-offset-4 col-md-4 text-center" style={{marginTop: "10%"}}>
//           <p style={{textAlign:"center", padding: "15px"}}> <img src={require("./Pert-Logo.png")} alt="Pert Sales" height="50" /></p>
//           <div className="login-panel panel panel-default">
//             <div className="panel-heading">
//               <h3 className="panel-title">Please Sign In</h3>
//             </div>
//             <div className="panel-body">
//               <form onSubmit={this.handleLogin}>
//                 <div className="form-group">
//                   <input type="text" className="form-control" id="inputUsername" placeholder="Username" ref="username" />
//                 </div>
//                 <div className="form-group">
//                   <input type="password" className="form-control" id="inputPassword" placeholder="Password" ref="password" />
//                 </div>
//                 <button type="submit" className="btn btn-lg btn-success btn-block">Log In</button>
//               </form>
//             </div>
//             <br />
//             {/*
//               uncomment this line for facebook login 
//               <FBLogin />
//             */}
//             </div>
//           </div>
  
//         </div>
//       );
//   }
// }

// LoginPage.propTypes = {
//     actions: PropTypes.object.isRequired,
//     auth: PropTypes.object.isRequired
// };

// // Which props do we want to inject, given the global state?
// const mapStateToProps = (state) => {
//   return { auth: state.auth };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(loginActions, dispatch)
//   };
// };

// // Wrap the component to inject dispatch and state into it
// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
