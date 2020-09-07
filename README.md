<h1 align="center">
  International Programmers Day 2020 🥳
  <br/><br/>
  Hello world with Cypress 🌲
  <br/><br/>
</h1>

<h4 align="center">"Hello world" or your first test with Cypress, easy peasy!</h4>

<p align="center">
  <a href="#fire-example">Example</a> •
  <a href="#rocket-getting-started">Getting started</a>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/1427623/92391097-58d5b400-f11c-11ea-90ba-6beaf7116ac7.gif" alt="First test with Cypress">
</p>

## :fire: Example

```javascript
describe("Hello world with Cypress 🌲", () => {
  it("type in input ", () => {
    cy.visit("/");

    cy.get(".input")
      .type("Happy #InternationalProgrammersDay! 🎉")
      .should("have.value", "Happy #InternationalProgrammersDay! 🎉");
  });
});
```

View `/cypress/integration/`

## :rocket: Getting started!

Writting your first test:
[https://docs.cypress.io/es/guides/getting-started/writing-your-first-test.html](https://docs.cypress.io/es/guides/getting-started/writing-your-first-test.html)
