import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const handleAuthentication = async function(auth, hash, history, store)  {
  if(/access_token|id_token|error/.test(hash)) {
    await auth.handleAuthentication(store)
    history.replace('/')
  }
}


class Callback extends Component {
  componentDidMount() {
    const {auth, location, history, dispatch} = this.props
    handleAuthentication(auth, location.hash, history, dispatch)
  }
  render() {
    return <div>...loading...{this.props.test}</div>
  }
}
export default withRouter(connect()(Callback))

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