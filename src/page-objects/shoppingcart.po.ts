import { expect, Locator, Page } from "@playwright/test";
import { config } from 'dotenv';
import { join } from 'path';
config({ path: join(process.cwd(), '.env') });
require('dotenv').config();
import {delay } from '../utils/delay.utils';
import testData from '../testData/testdata.json';

      
export class ShoppingCartPage {
    readonly page: Page;
    readonly username: Locator;
     readonly password: Locator;
     readonly loginBtn: Locator;
     readonly cartAppLogo: Locator;
     readonly openMenuBtn: Locator;
     readonly logoutBtn: Locator;
     readonly itemLable: Locator;
     readonly addtoCartBtn: Locator;
     readonly shoppingCartBtn: Locator;
     readonly checkoutBtn: Locator;
     readonly removeIteminCart: Locator;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly postcode: Locator;
    readonly continueBtn: Locator;
    readonly finishBtn: Locator;
    readonly backtoHomeBtn: Locator;

    constructor(page: Page) {
            this.page = page
            this.username = this.page.locator('#user-name');
            this.password = this.page.locator('#password');
            this.loginBtn = this.page.locator('#login-button');
            this.cartAppLogo = this.page.locator('xpath=//div[text()="Swag Labs"]');
            this.openMenuBtn = this.page.locator('xpath=//button[text()="Open Menu"]');
            this.logoutBtn = this.page.locator('#logout_sidebar_link');
            this.itemLable = this.page.getByText('Sauce Labs Backpack');
            this.addtoCartBtn = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
            this.shoppingCartBtn =this.page.locator("div[class='shopping_cart_container']");
            this.checkoutBtn = this.page.locator('#checkout');
            this.removeIteminCart = this.page.locator('[data-test="remove-sauce-labs-backpack"]');
           this.firstname = this.page.locator('#first-name');
           this.lastname = this.page.locator('#last-name');
           this.postcode = this.page.locator('#postal-code');
           this.continueBtn = this.page.locator('[data-test="continue"]');
           this.finishBtn = this.page.locator('#finish');
           this.backtoHomeBtn = this.page.locator('#back-to-products');

        };

     

public async logintoCart(url: string, username: string, password: string) {
            await this.page.goto(url);
            await this.username.fill(username);
            await this.password.fill(password);
            await this.loginBtn.click();
        };

public async logOutCart(url: string, username: string, password: string) {
            await this.page.goto(url);
            await this.username.fill(username);
            await this.password.fill(password);
            await this.loginBtn.click();
            await this.openMenuBtn.click();
            await delay(1000);
            await this.logoutBtn.click();
        };

public async completePurchaseOrder(firstname: string, lastname: string, postcode: string) {
 try {
    if (await this.cartAppLogo.isVisible)

        {
        await expect(this.itemLable).toContainText(testData.ItemLabel);
        await this.addtoCartBtn.click();
        await this.shoppingCartBtn.click();
        await this.checkoutBtn.click();
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.postcode.fill(postcode);
        await this.continueBtn.click();
      await this.page.evaluate(() => {
     window.scrollTo(0, document.body.scrollHeight);
   });
        await this.finishBtn.click();
        await this.backtoHomeBtn.click();

        }
          } catch (error) {
            console.error('Error while purchase order from shopping cart', error);
        };
            
        };
       
public async finishOrderwithEmptyItem(url: string, username: string, password: string) {
  try 
  {
       await this.addtoCartBtn.click();
        await this.shoppingCartBtn.click();
        await this.removeIteminCart.click();
        await this.checkoutBtn.click();
        await this.firstname.fill(testData.firstname);
        await this.lastname.fill(testData.lastname);
        await this.postcode.fill(testData.postcode);
        await this.continueBtn.click();
        await this.finishBtn.click();
        await this.backtoHomeBtn.click();
  
  }catch (error) {
            console.error('Error while finishing order with item in cart', error);
        };
          
    }
            
        };


