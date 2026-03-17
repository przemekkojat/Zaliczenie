import { expect } from "@playwright/test";
export class Login {
    constructor(page) {
        this.page = page;
        this.userNameField = page.getByTestId('login-username');
        this.PasswordField = page.getByTestId('login-password');
        this.loginButton = this.page.getByTestId('login-button');
        this.logoutButton = this.page.getByRole('button', { name: 'Wyloguj' });


    }
    async fillUserName(userName) {
        await this.userNameField.fill(userName)
    }

    async fillPasswordField(userPassword) {
        await this.PasswordField.fill(userPassword);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }

}
module.exports = { Login }

