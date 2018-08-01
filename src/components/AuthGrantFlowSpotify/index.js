/**
 * @fileoverview Library to get Authorization Implicit Grant Flow of Spotify api
 * @author franlopezm
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class AuthGrantFlowSpotify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authParams: {},
      loading: true
    };

    this.urlBaseAuth = 'https://accounts.spotify.com/authorize';

    this.getToken = this.getToken.bind(this);
    this.addToken = this.addToken.bind(this);
  }


  componentDidMount() {
    const hashParams = this.getHashParams();

    if (!hashParams.access_token) {
      this.getToken();
    } else {
      this.addToken(hashParams);
    }
  }

  /**
   * Get the hash params contained from a url
   *
   * @return {Object} Contain hash params of a url
   */
  getHashParams() {
    const hashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);

    let e = '';
    while ((e = r.exec(q)) !== null) { // eslint-disable-line
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    return hashParams;
  }

  /**
   * Make the call to get the authentication token from Spotify API
   */
  getToken() {
    const { clientId, responseType, redirectUri, showDialog, scope, onError } = this.props;

    if (!responseType || !clientId) {
      throw new Error('Whoops! responseType and clientId are necessary.');
    }

    if (window.location.search.indexOf('error=access_denied') !== -1) {
      this.setState({ loading: false });

      onError();
      return;
    }

    let urlAuth = `${this.urlBaseAuth}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}`;

    if (showDialog) { urlAuth += `&show_dialog=${showDialog}`; }
    if (scope) { urlAuth += `&scope=${scope}`; }

    window.location = urlAuth;
  }

  /**
   * Add the authentication token to the setState for calls to the api
   */
  addToken(authParams) {
    const { onSuccess } = this.props;
    window.history.replaceState({}, '', '/#/');

    if (onSuccess) {
      onSuccess(authParams);
    }

    this.setState({ loading: false, authParams });
  }


  render() {
    const { loading, authParams } = this.state;
    const { children, onSuccess } = this.props;

    if (loading) return null;

    if (onSuccess) return children;

    return React.cloneElement(children, { authParams });
  }
}


AuthGrantFlowSpotify.propTypes = {
  clientId: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
  redirectUri: PropTypes.string,
  responseType: PropTypes.string,
  scope: PropTypes.string,
  showDialog: PropTypes.bool
};


AuthGrantFlowSpotify.defaultProps = {
  onError: undefined,
  onSuccess: undefined,
  redirectUri: window.location.origin,
  responseType: 'token',
  scope: '',
  showDialog: false
};
