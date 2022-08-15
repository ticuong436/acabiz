describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todolistcomponent--primary'));
  it('should render the component', () => {
    cy.get('myorg-todolist').should('exist');
  });
});
