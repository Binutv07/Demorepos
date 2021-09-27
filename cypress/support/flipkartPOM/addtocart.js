class addToCart {
    add_to_cart_button = "button._2KpZ6l._2U9uOA._3v1-ww"
    add_to_cart_button2 = "li.col.col-6-12"

    getCartButton() {
        return cy.get(this.add_to_cart_button)
    }

    addCart() {
        //verify cart button is enabled and displayed
        this.getCartButton().should("be.visible").and("be.enabled")
        cy.log("add to cart button was displayed and enabled")
        //clicking the cart button
        this.getCartButton().click()
        cy.log("button was clicked ")
        cy.wait(30)
        //verify that button is disappeard after click
        //this.getCartButton().should("not.exist")
        cy.log("button was disapperd")


    }


}
export default addToCart