import addToQty from "../../support/flipkartPOM/addquantity"
import addToCart from "../../support/flipkartPOM/addtocart"
import HomeView from "../../support/flipkartPOM/homepage"
import logPage from "../../support/flipkartPOM/loginform"
import searchProduct from "../../support/flipkartPOM/productsearch"

describe("flipkart training test suite",() =>{
    beforeEach(() =>{
        cy.visit("www.flipkart.com")
        cy.log("launched the website sucessfully")
        const login = new logPage()
        login.loginbutton()
        login.loginForm("9544488323","flipkart12345678")
    })

    it("flipkart testing demo add to cart",() =>{
        const home = new HomeView()
        home.homepage_check()
        home.search_product("samsung")
        const prd = new searchProduct()
        prd.productCheck()
        const kart = new addToCart()
        kart.addCart()
        const qty = new addToQty()
        qty.addQty()
    })
   
   

})