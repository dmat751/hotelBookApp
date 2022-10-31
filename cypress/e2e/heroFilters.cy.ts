import type {} from 'cypress';

const elementSelector = {
  childrenFilter: {
    maxFilterState: 4,
    plusBtn: '[data-testid="children-filter-plus-btn"]',
    minusBtn: '[data-testid="children-filter-minus-btn"]',
    currentValue: '[data-testid="children-filter-current-filter-amount"]',
  },
  adultsFilter: {
    plusBtn: '[data-testid="adults-filter-plus-btn"]',
    minusBtn: '[data-testid="adults-filter-minus-btn"]',
    currentValue: '[data-testid="adults-filter-current-filter-amount"]',
    maxFilterState: 6,
  },
  heroStarsFilter: {
    filterContainer: '[data-testid="stars-hero-filter-test-id"]',
    generateSelectorForStarIndex: (index: number) =>
      `[data-testid="star-rendered-${index}"]`,
    maxFilterState: 5,
  },
};

describe('test hero filters', () => {
  it('test click each filter btn', () => {
    //given
    cy.visit('localhost:3000/hotelBookApp');

    //when
    //then
    cy.get(
      `${
        elementSelector.heroStarsFilter.filterContainer
      } ${elementSelector.heroStarsFilter.generateSelectorForStarIndex(
        elementSelector.heroStarsFilter.maxFilterState - 3
      )}`
    ).click({
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
    //given
    const maxChildrenFilterValue =
      elementSelector.childrenFilter.maxFilterState;
    cy.document().then((doc) => {
      const currentFilterValue = doc.querySelector(
        elementSelector.childrenFilter.currentValue
      )?.textContent;

      //when
      const currentFilterValueNumber: number = +currentFilterValue!;
      const shouldClickAmount =
        maxChildrenFilterValue - currentFilterValueNumber;

      for (let i = 0; i < shouldClickAmount; i++) {
        cy.get(elementSelector.childrenFilter.plusBtn).click({
          scrollBehavior: false,
        });
      }

      //then
      cy.get(elementSelector.childrenFilter.plusBtn).should('be.disabled');
    });
  });

  it('test min children filters state', () => {
    //given
    cy.document().then((doc) => {
      const currentFilterValue = doc.querySelector(
        elementSelector.childrenFilter.currentValue
      )?.textContent;

      //when
      const currentFilterValueNumber: number = +currentFilterValue!;
      const shouldClickAmount = currentFilterValueNumber;

      for (let i = 0; i < shouldClickAmount; i++) {
        cy.get(elementSelector.childrenFilter.minusBtn).click({
          scrollBehavior: false,
        });
      }

      //then
      cy.get(elementSelector.childrenFilter.minusBtn).should('be.disabled');
    });
  });

  it('test max adults filters state', () => {
    //given
    const maxAdultsFilterValue = elementSelector.adultsFilter.maxFilterState;
    cy.document().then((doc) => {
      const currentFilterValue = doc.querySelector(
        elementSelector.adultsFilter.currentValue
      )?.textContent;

      //when
      const currentFilterValueNumber: number = +currentFilterValue!;
      const shouldClickAmount = maxAdultsFilterValue - currentFilterValueNumber;

      for (let i = 0; i < shouldClickAmount; i++) {
        cy.get(elementSelector.adultsFilter.plusBtn).click({
          scrollBehavior: false,
        });
      }

      //then
      cy.get(elementSelector.adultsFilter.plusBtn).should('be.disabled');
    });
  });

  it('test min adults filters state', () => {
    //given
    cy.document().then((doc) => {
      const currentFilterValue = doc.querySelector(
        elementSelector.adultsFilter.currentValue
      )?.textContent;

      //when
      const currentFilterValueNumber: number = +currentFilterValue!;
      const shouldClickAmount = currentFilterValueNumber;

      for (let i = 0; i < shouldClickAmount; i++) {
        cy.get(elementSelector.adultsFilter.minusBtn).click({
          scrollBehavior: false,
        });
      }

      //then
      cy.get(elementSelector.adultsFilter.minusBtn).should('be.disabled');
    });
  });

  it('test all stars clickable', () => {
    //given
    const starsAmount = elementSelector.heroStarsFilter.maxFilterState;

    //when
    //then
    for (let i = 0; i < starsAmount; i++) {
      cy.get(
        `${
          elementSelector.heroStarsFilter.filterContainer
        } ${elementSelector.heroStarsFilter.generateSelectorForStarIndex(i)}`
      ).click({
        scrollBehavior: false,
      });
    }
  });
});
