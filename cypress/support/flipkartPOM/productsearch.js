class searchProduct{
    product_link="a._1fQZEK"

    getLink(){
        return cy.get(this.product_link)
    }
    productCheck(){
        //checking for visiblity
        this.getLink().should("be.visible")
        //opening the selected item new in same window
        this.getLink().first().invoke("removeAttr","target").click()
        cy.log("selected item first ietem in the result page")
    }

}
export default searchProduct