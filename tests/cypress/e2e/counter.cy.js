describe('Counter App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.fixture('counter').as('counterData');
  });

  it('increments counter to 1 when "Increment" is pressed', function () {
    cy.get('#counter').should('have.text', String(this.counterData.initial));
    cy.incrementAndCheck(this.counterData.incremented);
  });
});