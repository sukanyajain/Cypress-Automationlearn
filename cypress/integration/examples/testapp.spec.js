describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('https://example.cypress.io')
//   it visits the page first and clicks the link
      cy.contains('type').click()
      //it enters the mail id and password
      context('Actions', () => {
        beforeEach(() => {
          cy.visit('https://example.cypress.io/commands/actions')
        })
      
        // https://on.cypress.io/interacting-with-elements
      
        it('.type() - type into a DOM element', () => {
          // https://on.cypress.io/type
    
      cy.get('.action-email')
      
      .type('sukanya@mail.com').should('have.value', 'sukanya@mail.com')
      .type('{del}{selectall}{backspace}')
      // Delay each keypress by 0.1 sec
      .type('slow.typing@email.com', { delay: 100 })
      .should('have.value', 'slow.typing@email.com')
      cy.get('#password1').type('sukanya@123',{ delay: 100 })
      //enters th full details 
      cy.get('#fullName1').type('sukanyajyaram',{ delay: 100 })
      cy.get('#description').type('notgood',{ delay: 100 })
      cy.get('#couponCode1').type('1123456',{ delay: 100 })
      //clicks the submit button
      cy.get('.action-form > .btn').click()
    })
  })
    })
})