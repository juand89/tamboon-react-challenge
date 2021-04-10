import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { summaryDonations } from './helpers';
import { Card, CardContent, CardList, CardImg, CardBtn, CardTitle, CardOverlay, OverlayContent, CloseOverlay } from './Card';
import { RadioForm, RadioLabel, RadioInput } from './Radio';
import { Alert } from './Alert';
import { DonationsText, DonationsAmount, DonationsContainer } from './Donations';
export default connect((state) => state)(
  class App extends Component {
    state = {
      charities: [],
      selectedAmount: 10,
    };

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          const newList = data.map((item) => {
            const updatedItem = {
              ...item,
              showOverlay: false,
              selectedAmount: 10,
            };
            return updatedItem;
          });
          self.setState({ charities: newList });
        });

      fetch('http://localhost:3001/payments')
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => item.amount)),
          });
        });
    }
    showPayments(index) {
      const newList = this.state.charities;
      newList[index].showOverlay = !newList[index].showOverlay;
      this.setState({
        charities: newList,
      });
    }
    updateSelectedAmount(amount, index) {
      const newList = this.state.charities;
      newList[index].selectedAmount = parseInt(amount);
      this.setState({
        charities: newList,
      });
    }
    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    render() {
      const self = this;
      const cards = this.state.charities.map(function (item, i) {
        const payments = [10, 20, 50, 100, 500].map((amount, j) => (
          <RadioLabel key={j}>
            <RadioInput
              type="radio"
              name="payment"
              value={amount}
              checked={item.selectedAmount === amount}
              onChange={(e) => self.updateSelectedAmount(e.target.value, i)}
            />
            {amount}
          </RadioLabel>
        ));

        return (
          <Card key={i}>
            {item.showOverlay && (
              <CardOverlay>
                <CloseOverlay onClick={() => self.showPayments(i)}>
                  x
                </CloseOverlay>
                <OverlayContent>
                  <span>Select the amount to donate(USD)</span>
                  <RadioForm onSubmit={(e) => this.handleSubmit(e)}>
                      {payments}
                  </RadioForm>
                  <CardBtn
                    onClick={() =>
                      self.handlePay(
                        item.id,
                        self.state.selectedAmount,
                        item.currency
                      )
                    }
                  >
                    Pay
                  </CardBtn>
                </OverlayContent>
              </CardOverlay>
            )}
            <CardImg src={`images/${item.image}`} />
            <CardContent>
              <CardTitle>{item.name}</CardTitle>
              <CardBtn onClick={() => self.showPayments(i)}>Donate</CardBtn>
            </CardContent>
          </Card>
        );
      });

      const style = {
        color: 'red',
        margin: '1em 0',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'center',
      };

      const donate = this.props.donate;
      const message = this.props.message;

      return (
        <div>
          <Alert success>Thank you! Your donation was successful!</Alert>
          <h1>Tamboon React</h1>
          <DonationsContainer>
            <DonationsText>All donations:</DonationsText>
            <DonationsAmount> {donate}</DonationsAmount>
          </DonationsContainer>
          <p style={style}>{message}</p>
          <CardList>{cards}</CardList>
        </div>
      );
    }
  }
);

/**
 * Handle pay button
 * 
 * @param {*} The charities Id
 * @param {*} amount The amount was selected
 * @param {*} currency The currency
 * 
 * @example
 * fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
 */
function handlePay(id, amount, currency) {}
