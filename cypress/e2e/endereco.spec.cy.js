/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

describe('funcionalidade endereços - faturamento e entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
      cy.login(dados.usuario, dados.senha)
    })
    
  });

  it('deve fazer cadastro de faturamento com sucesso', () => {
    enderecoPage.editarEnderecoFaturamento('Isabela', 'Correa', 'OBJETIVO', 'Brasil', 'Rua João Eduardo', '18', 'Indaiatuba', 'São Paulo', '01000100', '11999999999', 'email@dominio.com')
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

  });

  it.only('deve fazer cadastro de faturamento com sucesso -  usando arquivo de dados', () => {
    enderecoPage.editarEnderecoFaturamento(
      dadosEndereco[1].nome,
      dadosEndereco[1].sobrenome,
      dadosEndereco[1].empresa,
      dadosEndereco[1].pais,
      dadosEndereco[2].endereco,
      dadosEndereco[1].numero,
      dadosEndereco[1].cidade,
      dadosEndereco[1].estado,
      dadosEndereco[1].CEP,
      dadosEndereco[1].telefone,
      dadosEndereco[1].email

      )


    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    
  });
});