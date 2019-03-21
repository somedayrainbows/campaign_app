import StripeCheckout from 'react-stripe-checkout'
import React, { Component } from 'react'

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    )
  }
}

export default Payments
