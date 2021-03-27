item = []
price = []
shopping_cart_list = []
action = ""
menu = ""
sum = 0.00 
print("Welcome to the Shopping Cart Program!\n")

while menu != "5":
    menu_options =  options = ["1. Add Item", "2. View Cart", "3. Remove Item", "4. Compute Total", "5. Quit\n"]
    for option in menu_options:
            print(f"{option}")
    action = int(input("Please enter a action:\n"))

    if action == 1:
            item = ""
            prices = 0.00
            item = input("\nWhat item would you like to add? ").capitalize()
            prices = float(input(f"What is the price of {item} ? $")) 
            shopping_cart_list.append(item)
            price.append(prices) 
            print()
            print(f"{item} has been added to the cart.\n")
    elif action == 2:
        print("\nThe content of the shopping car are:\n")
        for i in range(len(shopping_cart_list)):
                item = shopping_cart_list[i]
                prices = price[i]
                print(f"{i + 1}. {item} - ${prices:.2f} \n") 
    elif action == 3:

       for item in shopping_cart_list[i]:
               
           item = shopping_cart_list[i]
           prices = price[i]
           user_choice = int(input("What item would you like to remove? "))
           shopping_cart_list.pop(user_choice- 1)
           price.pop(user_choice- 1)
           print(f"Item Removed.\n") 


    elif action == 4:
        for i  in range(len(price)):
         sum = price[i] + sum
        print(f"\nThe total price of the items in the shopping cart is ${sum:.2f}") 

    elif  action == 5:
            menu = "5"
            print("\nThank you for visiting us. Have a great day!\n") 
    
    else:
            print("\nSorry, that is not a valid entry.")        
           