describe('template spec', () => {
  beforeEach(() => {

    cy.visit('/')
  })
  it('finds 3 images', () => {
    cy.get('.card-grid').children().should('have.length', 3)
  })
  it('Player 1 chooses a card, presses start and get a result', () => {
    cy.get('#scissors').click().then(() => {
      cy.get('#choice-ply1').contains('Schere')
    })
    cy.get('#startGame').click().then(() => {
      cy.get('#choice-comp').should('not.be.empty')
      cy.get('#winner').should('not.be.empty')
    })
   

  })
})