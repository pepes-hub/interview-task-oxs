describe('dashboard-e2e', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.reload();
  });

  it('should display page', () => {
    cy.contains('Employees');
  });

  it('should display 6 tiles by default', () => {
    cy.intercept('GET', '/employees');

    cy.get('[data-tile]').should('have.length', 6);
  });

  it('should display 2 tiles after filter', () => {
    cy.intercept('GET', '/employees');

    cy.get('[data-tile]').should('have.length', 6);

    cy.get('[data-status-select]').parent().click();

    cy.get(`[data-value="working"]`).click();

    cy.get('[data-tile]').should('have.length', 2);
  });

  it('should display 2 tiles after search', () => {
    cy.intercept('GET', '/employees');

    cy.get('[data-tile]').should('have.length', 6);

    cy.get('[data-status-search]').find('input').type('Jo');

    cy.get('[data-tile]').should('have.length', 1);

    cy.get('[data-status-search]').find('input').clear().type('le');

    cy.get('[data-tile]').should('have.length', 2);
  });
});
