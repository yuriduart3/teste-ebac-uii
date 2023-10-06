/// <reference types="cypress" />

describe('funcionalidade endereços - faturamento e entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
      cy.login(dados.usuario, dados.senha)
    })
    
  });
  
  it('deve fazer cadastro de faturamento com sucesso', () => {
    
    //cadastro de endereço
  });
});