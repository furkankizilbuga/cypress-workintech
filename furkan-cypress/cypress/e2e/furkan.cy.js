/* eslint-disable no-undef */

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it("success", () => {
    cy.get('input[name="email"]').type("example@example.com")
    cy.get('input[name="password"]').type("password")
    cy.get('input[name="terms"]').check()
    cy.get('[data-cy="button"]').should("not.be.disabled")
    cy.get('[data-cy="button"]').click()
  })

  it("wrong email", () => {
    cy.get('input[name="email"]').type("wrong-mail")
    cy.get('[data-cy="email"]').should("be.visible")
    cy.get('[data-cy="email"]').should("contain", "Please enter a valid email address")
    cy.get('[data-cy="button"]').should("be.disabled")
  })


  it("wrong email and password", () => {
    cy.get('input[name="email"]').type("wrong-mail")
    cy.get('[data-cy="email"]').should("be.visible")
    cy.get('[data-cy="email"]').should("contain", "Please enter a valid email address")

    cy.get('input[name="password"]').type("pas")
    cy.get('[data-cy="password"]').should("be.visible")
    cy.get('[data-cy="password"]').should("contain", 'Password must be at least 4 characters long')

    cy.get('[data-cy="button"]').should("be.disabled")
  })

  it("right email and password but not checked", () => {
    cy.get('input[name="email"]').type("example@example.com")
    cy.get('input[name="password"]').type("password")
    cy.get('[data-cy="terms"]').uncheck()
    cy.get('[data-cy="button"]').should("be.disabled")
  })


})