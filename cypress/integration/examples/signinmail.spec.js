describe('My First Test', function() {
    it('it opens gmail', function() {
        cy.visit("https://gmail.com/");
  
    //   cy.pause()
  // Get an input, type into it and verify that the value has been updated
      cy.get('.cxMOTc > .rFrNMe').type('sukanya@geekynats.com')
      cy.get('.VfPpkd-RLmnJb').click
      
    })
  })
  