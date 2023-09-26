/// <reference types="cypress" />

context('funcionalidade login', () =>{
  it('Deve fazer login com sucesso', () =>{
      cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()


      cy.get('.page-title').should('contain' , 'Minha conta') 
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac20 (não é aluno_ebac20? Sair)')
  })

  it('Deve exibir uma menssagem de erro ao inserir usuário invalido', () =>{
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    cy.get('#username').type('aluno_ebac@teste.co')
    cy.get('#password').type('teste@teste.co')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
  })

  it('Deve exibir uma menssagem de erro ao inserir senha invalida', () =>{
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.co')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?') 
  })
})