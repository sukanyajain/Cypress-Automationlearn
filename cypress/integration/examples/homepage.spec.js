describe('My first Test', function()  {
  it('Visits the stavkoverflow',function () {
    cy.visit('https://stackoverflow.com/users/login?ssrc=head') 
    // change URL to match your dev URL
    cy.get('https://accounts.google.com/o').click()
  })
})
