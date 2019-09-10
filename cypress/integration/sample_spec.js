describe('My First Test', function() {
  it('title container Welcome', function() {
    cy.visit('http://localhost:3000')

    cy.get('h1').should('contain', 'Toy');
  })
})
