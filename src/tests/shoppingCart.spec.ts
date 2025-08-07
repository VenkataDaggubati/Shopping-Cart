import {ENV_CONFIG} from '../utils/env.config';
import { test} from "@playwright/test";
import { Page } from "@playwright/test";
import { config } from 'dotenv';
import { join } from 'path';
import { ShoppingCartPage } from "../page-objects/shoppingcart.po";
config({ path: join(process.cwd(), '.env') });
import * as dotenv from 'dotenv';
dotenv.config({ override: true });
import testData from '../testData/testdata.json';

let Shoppingcart: ShoppingCartPage;

const USERNAME = ENV_CONFIG.credentials.username;
const PASSWORD = ENV_CONFIG.credentials.password;
const shoppingcartURL = ENV_CONFIG.shoppingcart.shoppingcartUrl;

test("Shopping Cart Login",async ({page}) => {
     Shoppingcart  = new ShoppingCartPage(page);
     
     await Shoppingcart.logintoCart(shoppingcartURL,USERNAME,PASSWORD);
   
});

test("Shopping Cart Logout",async ({page}) => {
     Shoppingcart  = new ShoppingCartPage(page);
     await Shoppingcart.logOutCart(shoppingcartURL,USERNAME,PASSWORD);
   
});

test("Complete purchaseing order in Shopping Cart",async ({page}) => {
     Shoppingcart  = new ShoppingCartPage(page);
     await Shoppingcart.logintoCart(shoppingcartURL,USERNAME,PASSWORD);
     await Shoppingcart.completePurchaseOrder(testData.firstname, testData.lastname, testData.postcode);
   
});

test("Finish order with emprty item in Shopping Cart",async ({page}) => {
     Shoppingcart  = new ShoppingCartPage(page);
     await Shoppingcart.logintoCart(shoppingcartURL,USERNAME,PASSWORD);
     await Shoppingcart.finishOrderwithEmptyItem(shoppingcartURL,USERNAME,PASSWORD);
   
});


