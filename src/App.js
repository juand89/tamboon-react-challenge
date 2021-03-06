import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { summaryDonations, newList, showPayments, updateSelectedAmount } from './helpers';
import {
  Card,
  CardContent,
  CardList,
  CardImg,
  CardBtn,
  CardTitle,
  CardOverlay,
  OverlayContent,
  CloseOverlay,
} from './Card';
import { RadioForm, RadioLabel, RadioInput } from './Radio';
import { Alert } from './Alert';
import {
  DonationsText,
  DonationsAmount,
  DonationsContainer,
} from './Donations';
import { Container, ContainerTitle } from './Container';
export default connect((state) => state)(
  class App extends Component {
    state = {
      charities: [],
    };

    componentDidMount() {
      fetch('http://localhost:3001/charities')
        .then(async (res) => {
          const data = await res.json();
          // check for error response
          if (!res.ok) {
            return Promise.reject(error);
          }
          this.setState({ charities: newList(data) });
        })
        .catch((error) => {
          console.error('error fetching payments', error);
        });
      this.fetchPayments();
    }
    fetchPayments() {
      fetch('http://localhost:3001/payments')
        .then(async (res) => {
          const data = await res.json();
          // check for error response
          if (!res.ok) {
            return Promise.reject(error);
          }
          // reset total amount before calculating payments
          if (this.props.donate > 0) {
            this.props.dispatch({
              type: 'RESET_TOTAL_DONATE',
            });
          }
          this.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => item.amount)),
          });
        })
        .catch((error) => {
          console.error('error fetching payments', error);
        });
    }
    handlePay(id, amount, currency) {
      fetch('http://localhost:3001/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ charitiesId: id, amount, currency }),
      })
        .then(async (res) => {
          const data = await res.json();
          // check for error response
          if (!res.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          
          // fetch payments to calculate current total amount
          this.fetchPayments();
          // display success alert
          this.showAlert('Donation successful! Thank you!');
        })
        .catch((error) => {
          // display error alert
          this.showAlert('Donation failed');
          console.error('error', error);
        });
    }
    showAlert(message) {
      this.props.dispatch({
        type: 'UPDATE_MESSAGE',
        message,
      });
      // auto hide alert after 3 seconds
      setTimeout(() => {
        this.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: '',
        });
      }, 3000);
    }
    showPayments(index) {
      this.setState({
        charities: showPayments(this.state.charities, index),
      });
    }
    updateSelectedAmount(amount, index) {
      this.setState({
        charities: updateSelectedAmount(this.state.charities, amount,index),
      });
    }
    handleSubmit(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    render () {
      const cards = this.state.charities.map((item, i) => {
        const payments = [10, 20, 50, 100, 500].map((amount, j) => (
          <RadioLabel key={j}>
            <RadioInput
              type="radio"
              name="payment"
              value={amount}
              checked={item.selectedAmount === amount}
              onChange={(e) => this.updateSelectedAmount(e.target.value, i)}
            />
            {amount}
          </RadioLabel>
        ));

        return (
          <Card key={i}>
            {item.showOverlay && (
              <CardOverlay>
                <CloseOverlay onClick={() => this.showPayments(i)}>
                  x
                </CloseOverlay>
                <OverlayContent>
                  <span>Select the amount to donate(USD)</span>
                  <RadioForm onSubmit={(e) => this.handleSubmit(e)}>
                    {payments}
                  </RadioForm>
                  <CardBtn
                    onClick={() =>
                      this.handlePay(
                        item.id,
                        item.selectedAmount,
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
              <CardBtn onClick={() => this.showPayments(i)}>Donate</CardBtn>
            </CardContent>
          </Card>
        );
      });

      const donate = this.props.donate;
      const message = this.props.message;
      
      return (
        <Container>
          <ContainerTitle>Tamboon React</ContainerTitle>
          {message && <Alert success={message.includes('success')}>{message}</Alert>}
          <DonationsContainer>
            <DonationsText>All donations:</DonationsText>
            <DonationsAmount> {donate}</DonationsAmount>
          </DonationsContainer>
          <CardList>{cards}</CardList>
        </Container>
      );
    }
  }
);