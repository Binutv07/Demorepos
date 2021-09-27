class logPage{

    login_link="a._1_3w1N"
    login_id="input._2IX_2-.VJZDxU"
    login_pwd="input._2IX_2-._3mctLh.VJZDxU"
    login_btn="button._2KpZ6l._2HKlqd._3AWRsL"


    getLoginLink(){
        return cy.get(this.login_link)
    }
    getLoginId(){
        return cy.get(this.login_id)
    }
    getLoginPwd(){
        return cy.get(this.login_pwd)
    }
    getLoginBtn(){
        return cy.get(this.login_btn)
    }


    loginbutton(){
        //verifying that the link was enabled
        this.getLoginLink().should("be.visible")
        cy.log("the login was enabled and dispalyed")
        this.getLoginLink().click()
       
    }
    loginForm(email_ph,password){
        //verifying that login form with email or phone number field
        this.getLoginId().should("be.visible").and("be.enabled")
        cy.log("id was displayed ")
        this.getLoginId().eq(0).type(email_ph)
        this.getLoginId().should("value",email_ph)
        cy.log("entered field was correctly dispalyed email/phone field")
        //verify password field
        this.getLoginPwd().should("be.visible").and("be.enabled")
        cy.log("id was displayed ")
        this.getLoginPwd().type(password)
        this.getLoginPwd().should("value",password)
        cy.log("entered field was correctly dispalyed password field")
        //verify login button 
        this.getLoginBtn().should("be.visible").and("be.enabled")
        this.getLoginBtn().click()



    }

}
export default logPage