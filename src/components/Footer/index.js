import React from 'react';

import { LinkGhost } from '../common';


export default () => (
  <footer className="footer_ui">
    <LinkGhost
      link="https://www.linkedin.com/in/franlopezm/"
      image="/images/icon_linkedin.png"
    >Linkedin</LinkGhost>

    <LinkGhost
      className="margin_right"
      link="https://github.com/franlopezm"
      image="/images/icon_github.png"
    >Github</LinkGhost>

    <a
      className="link_repo"
      href="https://github.com/franlopezm/spotify-react"
      target="_blank"
      rel="noopener noreferrer"
    >franlopezm ~ <span>spotify-react</span></a>
  </footer>
);