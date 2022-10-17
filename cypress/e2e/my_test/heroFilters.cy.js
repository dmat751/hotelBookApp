describe('test hero filters', () => {
  it('test click each filter btn', () => {
    cy.visit('localhost:3000/hotelBookApp');
    cy.wait(1000);

    // add children
    cy.get(':nth-child(2) > [data-testid="plus-btn"] > svg').click({
      scrollBehavior: false,
    });

    // select 4 star
    cy.get('.bg-stone-300 > :nth-child(1) > .flex > :nth-child(4)').click({
      scrollBehavior: false,
    });

    // remove children
    cy.get(':nth-child(2) > [data-testid="minus-btn"] > svg').click({
      scrollBehavior: false,
    });

    //add adults
    cy.get(':nth-child(3) > [data-testid="plus-btn"] > svg').click({
      scrollBehavior: false,
    });

    //remove adults
    cy.get(':nth-child(3) > [data-testid="minus-btn"] > svg').click({
      scrollBehavior: false,
    });
  });

  it('test max children filters state', () => {
    const maxChildrenState = 5;
    for (let i = 0; i < maxChildrenState; i++) {
      cy.get(':nth-child(2) > [data-testid="plus-btn"] > svg').click({
        scrollBehavior: false,
      });
    }

    cy.get(':nth-child(2) > [data-testid="plus-btn"]').should('be.disabled');
  });

  it('test min children filters state', () => {
    const maxChildrenState = 5;
    for (let i = 0; i < maxChildrenState; i++) {
      cy.get(':nth-child(2) > [data-testid="minus-btn"] > svg').click({
        scrollBehavior: false,
      });
    }

    cy.get(':nth-child(2) > [data-testid="minus-btn"]').should('be.disabled');
  });

  it('test max adults filters state', () => {
    const maxAdultsState = 6;
    for (let i = 0; i < maxAdultsState; i++) {
      cy.get(':nth-child(3) > [data-testid="plus-btn"] > svg').click({
        scrollBehavior: false,
      });
    }

    cy.get(':nth-child(3) > [data-testid="plus-btn"]').should('be.disabled');
  });

  it('test min adults filters state', () => {
    const maxAdultsState = 6;
    for (let i = 0; i < maxAdultsState; i++) {
      cy.get(':nth-child(3) > [data-testid="minus-btn"] > svg').click({
        scrollBehavior: false,
      });
    }

    cy.get(':nth-child(3) > [data-testid="minus-btn"]').should('be.disabled');
  });

  it('test all stars clickable', () => {
    const starsAmount = 5;
    for (let i = 1; i <= starsAmount; i++) {
      cy.get(`.bg-stone-300 > :nth-child(1) > .flex > :nth-child(${i})`).click({
        scrollBehavior: false,
      });
    }
  });
});
