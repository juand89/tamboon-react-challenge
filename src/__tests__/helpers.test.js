import {
  summaryDonations,
  newList,
  showPayments,
  updateSelectedAmount,
} from '../helpers';

const charitiesMock = [
  {
    id: 1,
    name: 'Baan Kru Noi',
    image: 'baan-kru-noi.jpg',
    currency: 'THB',
  },
  {
    id: 2,
    name: 'Habitat for Humanity Thailand',
    image: 'habitat-for-humanity-thailand.jpg',
    currency: 'THB',
  },
];

describe('helpers', function () {
  test('`summaryDonations` should calculate donations correctly', function () {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });
  test('`newList` should return a new list with showOverlay and selectedAmount', function () {
    expect(newList(charitiesMock)[0]).toHaveProperty('showOverlay', false);
    expect(newList(charitiesMock)[0]).toHaveProperty('selectedAmount', 10);
  });
  test('`showPayments` shoud update the boolean of showOverlay property', function () {
    expect(showPayments(charitiesMock, 0)[0]).toHaveProperty('showOverlay', true);
    expect(showPayments(charitiesMock, 0)[0]).toHaveProperty('showOverlay', false);
  })
  test('`updateSelectedAmout` should update the amount of selectedAmount property', function () {
    expect(updateSelectedAmount(charitiesMock, 20, 0)[0]).toHaveProperty(
      'selectedAmount',
      20
    );
  })
});
