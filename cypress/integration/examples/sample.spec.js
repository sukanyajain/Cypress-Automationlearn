describe('My First Cypress Test', function() {
  it('Visits the ToolsQA Demo Page and check the menu items', function() {
  //Visit the Demo QA Website
  cy.visit("https://demoqa.com/");
  
 // Clicking on Widget Menu Item
 // Fetched the CSS selector from Open Selector Playground
 cy.get('#menu-top > li:nth-child(3) > a').click();

})
})