export const summaryDonations = (danations) =>
  danations.reduce((accumulator, value) => accumulator + value);

// assign showOverlay and default selectedAmount to the charities list
export const newList = (list) => {
  return list.map(obj => ({...obj, showOverlay: false, selectedAmount: 10 }))
}

// show overlay payments
export const showPayments = (list, index) => {
  list[index].showOverlay = !list[index].showOverlay;
  return list;
}

// update selected amount to donate
export const updateSelectedAmount = (list, amount, index) => {
  list[index].selectedAmount = parseInt(amount);
  return list
}