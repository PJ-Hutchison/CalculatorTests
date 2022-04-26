
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 42000, years: 6, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('676.41');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 12121, years: 1, rate: 01};
  expect(calculateMonthlyPayment(values)).toEqual('1015.56');
});

/// etc
