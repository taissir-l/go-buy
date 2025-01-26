# Buy&Go - E-Commerce Platform for Women’s Needs

**Buy&Go** is a dedicated e-commerce platform tailored to meet the unique needs of women. This project is part of the ALX Final Portfolio and showcases the implementation of a scalable e-commerce application with modern web technologies.

## Features

- **User Authentication:**

  - Secure sign-up and login using Firebase Authentication.
  - Persistent user sessions.

- **Product Search and Filters:**

  - Search products by categories or specific keywords.
  - View detailed product information and ratings.

- **Shopping Basket:**

  - Add items to the basket.
  - Remove items from the basket.
  - View total price and item details in real-time.

- **Responsive Design:**

  - Fully responsive for mobile, tablet, and desktop devices.

- **Secure Payments:**

  - Integration with Stripe for secure payments.

## Technology Stack

- **Frontend:**

  - React.js for UI components and state management.
  - Tailwind CSS for styling.
  - React Router for navigation.

- **Backend:**

  - Firebase Functions for serverless backend.
  - Firebase Firestore for real-time database.

- **Hosting:**

  - Firebase Hosting for deploying the application.

- **Payment Integration:**

  - Stripe for handling secure payment transactions.

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd go-buy
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure Firebase:

   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Replace the Firebase configuration in the project with your project credentials.

5. Start the development server:

   ```bash
   npm start
   ```

6. Build the project for production:

   ```bash
   npm run build
   ```

7. Deploy to Firebase Hosting:

   ```bash
   firebase deploy
   ```
   

## Deployment

To update the deployed version on Firebase Hosting after making changes:

1. Build the application:

   ```bash
   npm run build
   ```

2. Deploy the updated version:

   ```bash
   firebase deploy --only hosting
   ```

## Credits

This project was built as part of the **ALX Final Portfolio Project** to demonstrate skills in front-end development, with a focus on user-centric design and modern web technologies.


---

Thank you for exploring **Buy&Go**! We hope you enjoy this e-commerce platform tailored to women’s needs.

