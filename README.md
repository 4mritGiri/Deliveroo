
# Deliveroo App

The Deliveroo app is a food delivery application built with Expo, React Native, and Sanity CMS.

## Features

- Browse food items from various restaurants.
- Search for specific food items or restaurants.
- View detailed information about each food item, including price, description, and ingredients.
- Add food items to the cart.
- Place orders for delivery.
- Track the status of orders.
- Manage user profiles and addresses.
- Integration with the Sanity CMS for managing restaurant and menu data.

## Requirements

- Node.js (v12 or higher)
- Expo CLI
- React Native
- Sanity CMS account

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/4mritGiri/Deliveroo.git  
   
   ```
   
2. Navigate to the project directory:

```
cd deliveroo-app 
```

3. Install dependencies:

```
 npm install
 ```

4. Set up Sanity CMS:

 - Create a Sanity CMS account at https://www.sanity.io.
 - Set up your Sanity CMS project and configure the necessary schemas.
 - Obtain your Sanity project ID and token.
 - Sanity schema folder is exist on inside of backend folder. you can replace with your inside sanity folder schema.
5. Configure the app:

 - Create a .env file in the root directory of the project.

 - Add the following environment variables to the .env file:

 ```
    SANITY_PROJECT_ID=your-sanity-project-id
 	SANITY_DATASET=your-sanity-dataset
 	SANITY_TOKEN=your-sanity-token
   
 ```
 - Replace your-sanity-project-id, your-sanity-dataset, and your-sanity-token with your actual Sanity project details. 

6. Run the app:

 ```
 npm start
 ```

 The Expo development server will start, and you can run the app on a simulator, emulator, or physical device using the Expo client app.
 
 ## Contributing
 
 Contributions are welcome! If you'd like to contribute to the Deliveroo app, please follow these steps:
 
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request.
6. Please ensure that your code follows the project's coding conventions and includes appropriate tests.
 
## License
 This project is licensed under the MIT License.
 
 Feel free to modify and customize the README.md file.
 
