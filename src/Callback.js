import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleAuthenticationThunk} from './Auth/auth'

class Callback extends Component {
  componentDidMount() {
    const {location, history, handleAuth} = this.props
    handleAuth(location.hash, history)
  }
  render() {
    return <div>...loading...{this.props.test}</div>
  }
}

const mapState = state => ({})
const mapDispatch = dispatch => ({
  handleAuth: (hash, history) => dispatch(handleAuthenticationThunk(hash, history))
})
export default withRouter(connect(mapState, mapDispatch)(Callback))

