import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';


export default class Header extends Component {
  
  render () {
    return (
      <header className="app-header">
        <nav className = "nav">
          <Row 
            align     = "middle"
            className = "row_nav"
            gutter    = {2}
            justify   = "space-between"
            type      = "flex"
          >
            <Col span={12} className="col_left">
            </Col>
            <Col span={6} className="col_right">
              <Button 
                className = 'link_github'
                ghost
                href      = "https://github.com/franlopezm"
                icon      = "github"
                target    = "_blank"
                type      = "primary"
              >franslopezm </Button>
            </Col>
          </Row>
        </nav>
      </header>
    )
  }
}
