# _Pizza Order_

#### _Simple page for a pizza parlor, 8/27/2016_

#### By _**Anand Angalig**_

## Description

_Users will be able to pick the size and the toppings of the pizza and the program will calculate the total price for the pizza order._

## Setup/Installation Requirements

* _Go to anandangalig.github.io/pizza-order to see the web page in your web-browser._
* _Go to https://github.com/anandangalig/pizza-order.git and clone this repository onto your local machine._
* _To see the code, open the cloned repository in your favorite text editor._

## Known Bugs

_It is lacking the functionality to order multiple orders of pizzas at the same time._

## Support and contact details

_Please contact me at anandangalig@gmail.com with any feedback_

## Specs:

* _Behavior: If user tries to place an order without choosing a size, the program will display an error message._
  * _Input: None, but "Place Your Order" button is pressed_
  * _Output: Alert box appears : Please choose a size for your pizza and try again!; No total or pizza image displayed._
* _Behavior: If user selects size Small, Medium, or Large and placed the order, the program will display the Order total as $5, $7, or $9 respectively and display the pizza image._
  * _Input: Step 1 Choose a size: Medium_
  * _Output: Your Order Total is: $7_
* _Behavior: If user selects size Medium with Meat toppings only, the total will be increased by $3 per selection._
  * _Input: Size: Medium; Toppings: Pepperoni_
  * _Output: Your Order Total is: $10_
* _Behavior: If user selects size Medium with Veggie toppings only, the total will be increased by $2 per selection._
  * _Input: Size: Medium; Toppings: Mushrooms_
  * _Output: Your Order Total is: $9_
* _Behavior: If user selects size Medium with both Meat and Veggie toppings, the total will be increased by $3 and $2 per selection respectively._
  * _Input: Size: Medium; Toppings: Pepperoni, Mushrooms_
  * _Output: Your Order Total is: $12_


### License

*This web-page is licensed under the MIT license.*

Copyright (c) 2016 **_Anand Angalig_**
