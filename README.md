## Table of Contents

- [Introduction](#introduction)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Setup and Usage](#setup-and-usage)
- [Screenshots](#screenshots)
- [Acknowledgments](#acknowledgments)

## Introduction

Welcome to my E-Commerce Website project! This README provides an in-depth overview of the project's purpose, features, folder structure, setup instructions, and more.

## Deployment

[Live Demo](https://totalitycorp-ashy.vercel.app/)

## Technologies Used

The project is built using modern technologies and libraries to ensure a seamless user experience:

- `Next.js 13:` A powerful React framework for server-rendered applications.
- `Tailwind CSS:`A utility-first CSS framework for building responsive and stylish UI components.
- `useContext API:` Leveraging the context API for state management.
- `NextAuth:` Implementing authentication with support for Google and GitHub sign-ins.
- `stripe:` Implementing payment gateway for checkout.

## Features

This E-Commerce Website showcases a range of features that mimic real-world online shopping experiences:

- `Product Listing:` Display an assortment of products with detailed information.
- `Product Filtering & Searching:` Allows user to filter and search products.
- `Cart Management:` Allow users to add, remove, and update product quantities in the cart.
- `Checkout Process:` Implement a seamless checkout process with shipping and payment details.
- `Responsive Design:` Ensure the website is accessible and usable across different devices.

## Folder Structure

The project's folder structure is organized to maintain clarity and separation of concerns:

- `src/`: The root of the source code.
  - `components/`: Reusable UI components that contribute to the app's structure.
  - `context/`: Contains the `CartContext` setup for managing the cart state.
  - `app/`: Next.js app folder that map to specific routes.
    - `api/auth/`: Includes components and setup for NextAuth-based authentication.
    - `cart/`: Cart page rout component
      - `page.js`: The cart component for managing shopping cart items.
    - `checkout/`: Checkout page rout component
      - `page.js`: The checkout component with the order summary and form.
    - `page.jsx`: Main page route component.
    - `layout.js`: Layout files used by pages.

## Setup and Usage

To run the project locally, follow these steps:

1. Clone this repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd e-commerce-project`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Access the application in your browser at `http://localhost:3000`

## Screenshots

Here are a few screenshots showcasing different parts of the application:

- Homepage with Product Listing, Filtering, Searching and Login Page using Google and Github
  [![Screenshot1](https://raw.githubusercontent.com/reddevill007/totalitycorp-frontend-challenge/main/public/mockup1.png)](https://totalitycorp-ashy.vercel.app/)
- Cart Page and Detailed Product Page
  [![Screenshot2](https://raw.githubusercontent.com/reddevill007/totalitycorp-frontend-challenge/main/public/mockup2.png)](https://totalitycorp-ashy.vercel.app/)
- Checkout Page with Order Summary, Payment and Shipping Address
  [![Screenshot3](https://raw.githubusercontent.com/reddevill007/totalitycorp-frontend-challenge/main/public/mockup3.png)](https://totalitycorp-ashy.vercel.app/)

## Acknowledgments

I'd like to extend my gratitude to the following resources and communities that helped me during the development of this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [NextAuth Documentation](https://next-auth.js.org/getting-started/introduction)
- [Fakestore API](https://fakestoreapi.com/)

---

This README aims to provide a comprehensive overview of the project, its structure, features, and setup process. If you have any questions or feedback, feel free to contact me!
