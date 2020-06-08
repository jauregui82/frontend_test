/* eslint-disable no-undef */
describe("Behavioral test", () => {
  it("Enter website", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".MuiButtonBase-root").click();
    // cy.get(".loader > span");
  });

  it("Forcedd error new", () => {
    cy.get(":nth-child(2) > .MuiButtonBase-root").click();
    cy.get(".MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input")
      .click()
      .type("New counter test");
    cy.server({ force404: true });
    cy.get(".MuiToolbar-root > .MuiButton-root").click();
  });
  it("Dismiss alert add new", () => {
    cy.get(".MuiDialogTitle-root > .MuiTypography-root").should(
      "contain",
      "Couldn’t create counter"
    );
    cy.get(
      ".MuiDialogContent-root > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label"
    ).click();
  });
  it("Add new", () => {
    cy.wait(500);
    cy.get(":nth-child(2) > .MuiButtonBase-root").click();
    cy.get(".MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input")
      .click()
      .type("New counter test");
    cy.get(".MuiToolbar-root > .MuiButton-root").click();
  });
  it("Add new in expamples", () => {
    cy.get(":nth-child(2) > .MuiButtonBase-root").click();
    cy.get(".makeStyles-textLink-27").click();
    cy.get(
      ':nth-child(2) > .contentChips > [style="width: max-content;"] > :nth-child(2) > .MuiChip-label'
    ).click();
  });
  it("Add new in expamples", () => {
    cy.get(":nth-child(2) > .MuiButtonBase-root").click();
    cy.get(".makeStyles-textLink-27").click();
    cy.get(":nth-child(4) > .MuiChip-label").click();
  });
  it("+ 3 counter and error", () => {
    cy.get(".btnInc")
      .first()
      .click();
    cy.get(".btnInc")
      .first()
      .click();
    cy.get(".btnInc")
      .first()
      .click();
    cy.get(".btnInc")
      .first()
      .click();
    cy.server({ force404: true });
    cy.get(".btnInc")
      .first()
      .click();
    cy.wait(500);
  });
  it("dismiss alert error", () => {
    cy.wait(500);
    cy.get(".MuiDialogTitle-root > .MuiTypography-root").should(
      "contain",
      "Couldn’t update New counter test to 1"
    );
    cy.get(".MuiDialogContent-root > .MuiTypography-root").should(
      "contain",
      "The Internet connection appears to be offline."
    );
    cy.get(
      ".MuiDialogContent-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label"
    ).click();
  });
  it("- 3 counter an error", () => {
    cy.get(".btnDec")
      .first()
      .click();
    cy.get(".btnDec")
      .first()
      .click();
    cy.get(".btnDec")
      .first()
      .click();
    cy.server({ force404: true });
    cy.get(".btnDec")
      .first()
      .click();
    cy.wait(500);
  });
  it("dismiss alert error", () => {
    cy.get(".MuiDialogTitle-root > .MuiTypography-root").should(
      "contain",
      "Couldn’t update New counter test to 1"
    );
    cy.get(".MuiDialogContent-root > .MuiTypography-root").should(
      "contain",
      "The Internet connection appears to be offline."
    );
    cy.get(
      ".MuiDialogContent-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label"
    ).click();
  });

  it("type in search (No results)", () => {
    cy.get(".MuiInputBase-input")
      .click()
      .type("Martinis");
    cy.get(".no-results").should("contain", "No results");
    cy.get(
      ".MuiGrid-grid-xs-4 > .MuiButtonBase-root > .MuiButton-label"
    ).click();
  });
  it("type in search (exist)", () => {
    cy.get(".MuiInputBase-input")
      .click()
      .type("Vodka");
    // cy.get('.no-results').contains("No results")
    cy.get(
      ".MuiGrid-grid-xs-4 > .MuiButtonBase-root > .MuiButton-label"
    ).click();
  });
  it("Selected counter", () => {
    cy.get("div#counters")
      .first()
      .click();
    cy.get("#refreshCuenterSelected").click();
  });

  it("Delete counter", () => {
    cy.get("div#counters")
      .first()
      .click();
    cy.get(".MuiGrid-container > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get(
      ".MuiDialogContent-root > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root"
    ).click();
    cy.wait(500);
    cy.get(".MuiGrid-container > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get(
      ".MuiDialogContent-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root"
    ).click();
    cy.get(
      ".MuiDialogContent-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root"
    ).click();
  });
  it("Copy counter", () => {
    cy.get("div#counters")
      .first()
      .click();
    cy.get(":nth-child(2) > div > .MuiButtonBase-root").click();
    cy.get(".height-100 > :nth-child(2) > .MuiButtonBase-root").click();
    cy.get("#refreshCuenterSelected").click();
  });
  it("Delete all counter", () => {
    cy.get("div#counters")
      .first()
      .click();
    cy.get("div#counters")
      .first()
      .next()
      .click();
    cy.get(".MuiGrid-container > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get(".MuiDialogTitle-root > .MuiTypography-root").should(
      "contain",
      "Delete 2 counters?"
    );
    cy.get(
      ".MuiDialogContent-root > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root"
    ).click();
  });
});
