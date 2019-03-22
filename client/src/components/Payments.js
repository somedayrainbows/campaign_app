import StripeCheckout from 'react-stripe-checkout'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'


class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Campaign App"
        description="$5 for five survey credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          add credits
        </button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments)
