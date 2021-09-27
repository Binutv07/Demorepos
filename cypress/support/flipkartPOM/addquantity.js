class addToQty {

    add_item_button = "button._23FHuj"

    getItemButton() {
        return cy.get(this.add_item_button)
    }

    addQty() {

        //verify that item qty button visible
        this.getItemButton().should("be.visible")
        //click on + button 
        this.getItemButton().click().wait(1000)



    }



}
export default addToQty