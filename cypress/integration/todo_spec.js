describe('Toy todo app', () => {
  it('title contains "Toy"', () => {
    cy.visit('/');

    cy.get('h1').should('contain', 'Toy');
  });

  it('added message appears on the page', () => {
    cy.visit('/');

    cy.get('input[type=text]').type('A message');
    cy.get('input[type=submit]').click();

    cy.get('li').should('contain', 'A message');
  });
});
