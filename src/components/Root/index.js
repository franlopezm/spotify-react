import { Component } from 'react';

import { dataServices } from '../../services';
import { urlHelp } from '../../utils';


export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    const hashParams = urlHelp.getHashParams();

    if (!hashParams.access_token) {
      dataServices.getToken();
    } else {
      window.history.replaceState({}, '', '/#/');

      dataServices.addToken(hashParams.access_token);
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
