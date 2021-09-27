class HomeView{
    logo_image="._2xm1JU"
    searchbar_text="._3704LK"
    searchbar_button=".L0Z3Pu"

    getLogo(){
        return cy.get(this.logo_image)
    }
    getSearchBarText(){
        return cy.get(this.searchbar_text)
    }
    getSearchBarButton(){
        return cy.get(this.searchbar_button)
    }

    homepage_check(){
        //checking flipkart logo
        this.getLogo().should("be.visible")
        cy.log("log was displayed")
        //this.getSearchBarText().should("be.visble")
        cy.log("search bar was displayed and enabled")       

    }

    search_product(productkey){
        //entering the value in the field
        this.getSearchBarText().type(productkey)
        //verify that the enterd value visible or not
        this.getSearchBarText().should("value",productkey)
        cy.log("enterd key was correstly displayed in search bar")
        //verify that search buttton was enable and visisble
        this.getSearchBarButton().should("be.visible").and("be.enabled")
        cy.log("the search button was visible and enabled")
        this.getSearchBarButton().click()

    }
}

export default HomeView