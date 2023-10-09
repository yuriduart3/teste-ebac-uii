/// <reference types="cypress" />

describe('Funcionalidade da página de produtos', () => {

  beforeEach(() => {
    cy.visit('produtos')
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
    .first()
    .click()
  });

  it('deve adicionar um produto ao carrinho', () => {
    var quantidade = 2

    cy.get('[class="product-block grid"]')
    //.first()
    //.click()
        .contains('Abominable Hoodie').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
    cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
  });

  it.only('Deve adicionar produtos ao carrinho - utilizando comando customizados', () => {
    cy.addProdutos('Abominable Hoodie', 3)
  });

});