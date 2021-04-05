context('Searching comment', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
    });
    it('check search field and button', () => {
        cy.get('#searchShowBtn').click();
        cy.get('#searchInput').should('be.visible');
        cy.get('#sendBtn').should('be.visible');
    });
    it('[Data Avilable] check search with results', () => {
        cy.get('#searchShowBtn').click();

        cy.get('#searchInput')
            .type('ele', { delay: 100 });
        cy.get('.result-item').should('be.visible');
        cy.get('#clearBtn').click();

        cy.get('#searchInput')
            .type('bre', { delay: 100 });
        cy.get('.result-item').should('be.visible');
        cy.get('#clearBtn').click();


        cy.get('#searchInput')
            .type('el', { delay: 100 });
        cy.get('#sendBtn').click();
        cy.get('.result-item').should('be.visible');
    });
    it('[No Data Avilable] check search field and button in', () => {
        cy.get('#searchShowBtn').click();
        cy.get('#searchInput').should('be.visible');
        cy.get('#sendBtn').should('be.visible');
        cy.get('#searchInput')
            .type('#', { delay: 100 });
        cy.get('#sendBtn').click();
        cy.get('#noData').should('be.visible');
        cy.get('#clearBtn').click();


        cy.get('#searchInput')
            .type('some random data ##$$##', { delay: 100 });

        cy.get('#noData').should('be.visible');
    });
})