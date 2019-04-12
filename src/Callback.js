import React, {Component} from 'react';

class Callback extends Component {
  render() {
    console.log('rendering callback....', this.props.test)
    return <div>...loading...{this.props.test}</div>
  }
}
export default Callback

// import {withRouter} from 'react-router-dom';
// import auth0Client from './Auth/auth';

// class Callback extends Component {
//   async componentDidMount() { //<=== here is a cluerigh right here.... 
// where 
//     await auth0Client.handleAuthentication();
//     this.props.history.replace('/');
//   }

//   render() {
//     return (
//       <p>Loading profile...</p>
//     );
//   }
// }

// export default withRouter(Callback);