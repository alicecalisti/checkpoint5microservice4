describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/cadastroProduto.html')
    const id = '1';
    const produto = 'Celular'
    const preco = 'R$ 1.500,00'
    const quantidade = '100'
    const data = '17/10/2024'

    cy.get('#registerID').type(id)
    cy.get('#registerProduct').type(produto)
    cy.get('#registerPreco').type(preco)
    cy.get('#registerQuantidade').type(quantidade)
    cy.get('#registerDate').type(data)

    cy.get('.btn').click()
    
  })
})