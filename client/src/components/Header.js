import React, { Component } from 'react'
import { connect } from 'react-redux'


class Header extends Component {
  renderLogin() {
    switch (this.props.auth) {
      case null:
        return 'Unsure of login status'
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>
      default:
        return <li><a href="/api/logout">Log out</a></li>
    }
  }

  renderLogo() {
    if (this.props.auth) {
      return <a href="/surveys" className="left brand-logo">Campaign App</a>
    } else {
      return <a href="/" className="left brand-logo">
        Campaign App
      </a>
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          {this.renderLogo()}
          <ul className="right">
            {this.renderLogin()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
