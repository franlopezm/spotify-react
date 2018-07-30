import { Component } from 'react';

import api from '../../api';
import { urlHelp } from '../../utils';


export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    const hashParams = urlHelp.getHashParams();

    if (!hashParams.access_token) {
      api.auth.getToken();
    } else {
      window.history.replaceState({}, '', '/#/');

      api.auth.addToken(hashParams.access_token);
      this.setState({ loading: false });
    }
  }


  render() {
    const { loading } = this.state;
    const { children } = this.props;

    if (loading) return null;

    return children;
  }
}
