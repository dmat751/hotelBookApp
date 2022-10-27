const elementSelector = {
  childrenFilter: {
    plusBtn: '[data-testid="children-filter-plus-btn"]',
    minusBtn: '[data-testid="children-filter-minus-btn"]',
  },
  adultsFilter: {
    plusBtn: '[data-testid="adults-filter-plus-btn"]',
    minusBtn: '[data-testid="adults-filter-minus-btn"]',
  },
};

describe('test hero filters', () => {
  it('test click each filter btn', () => {
    cy.visit('localhost:3000/hotelBookApp');
    cy.wait(1000);

    // select 4 star
    cy.get('.bg-stone-300 > :nth-child(1) > .flex > :nth-child(4)').click({
      scrollBehavior: false,
    });

    cy.get(elementSelector.childrenFilter.plusBtn).click({
      scrollBehavior: false,
    });

    cy.get(elementSelector.childrenFilter.minusBtn).click({
      scrollBehavior: false,
    });

    cy.get(elementSelector.adultsFilter.plusBtn).click({
      scrollBehavior: false,
    });

    cy.get(elementSelector.adultsFilter.minusBtn).click({
      scrollBehavior: false,
    });
  });

  it('test max children filters state', () => {
    const shouldClickAmount = 4;
    for (let i = 0; i < shouldClickAmount; i++) {
      cy.get(elementSelector.childrenFilter.plusBtn).click({
        scrollBehavior: false,
      });
    }

    cy.get(elementSelector.childrenFilter.plusBtn).should('be.disabled');
  });

  it('test min children filters state', () => {
    const maxChildrenState = 4;
    for (let i = 0; i < maxChildrenState; i++) {
      cy.get(elementSelector.childrenFilter.minusBtn).click({
        scrollBehavior: false,
      });
    }

    cy.get(elementSelector.childrenFilter.minusBtn).should('be.disabled');
  });

  it('test max adults filters state', () => {
    const maxAdultsState = 4;
    for (let i = 0; i < maxAdultsState; i++) {
      cy.get(elementSelector.adultsFilter.plusBtn).click({
        scrollBehavior: false,
      });
    }

    cy.get(elementSelector.adultsFilter.plusBtn).should('be.disabled');
  });

  it('test min adults filters state', () => {
    const maxAdultsState = 6;
    for (let i = 0; i < maxAdultsState; i++) {
      cy.get(elementSelector.adultsFilter.minusBtn).click({
        scrollBehavior: false,
      });
    }

    cy.get(elementSelector.adultsFilter.minusBtn).should('be.disabled');
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
