import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleAuthentication as HA} from './Auth/auth'

const handleAuthentication = async function(hash, history, dispatch)  {
  if(/access_token|id_token|error/.test(hash)) {
    await HA(dispatch)
    history.replace('/')
  }
}

class Callback extends Component {
  componentDidMount() {
    const {location, history, dispatch} = this.props
    handleAuthentication(location.hash, history, dispatch)
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