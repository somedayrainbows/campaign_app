import StripeCheckout from 'react-stripe-checkout'
import React, { Component } from 'react'

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Campaign App"
        description="$5 for five survey credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add credits
        </button>
      </StripeCheckout>
    )
  }
}

export default Payments
