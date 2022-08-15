describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productscomponent--primary'));
  it('should render the component', () => {
    cy.get('myorg-products').should('exist');
  });
});
