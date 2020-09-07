describe("Hello world with Cypress 🌲", () => {
  it("type in input ", () => {
    cy.visit("/");

    cy.get(".input")
      .type("Happy #InternationalProgrammersDay! 🎉")
      .should("have.value", "Happy #InternationalProgrammersDay! 🎉");
  });
});
