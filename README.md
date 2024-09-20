# Bookista - Online Bookstore

Welcome to **Bookista**, an interactive full-stack online bookstore built with the MERN (MongoDB, Express, React, Node.js) stack. This platform provides a seamless experience for both **admin** and **users**, with authentication implemented using JWT (JSON Web Tokens) and state management handled by Redux and Redux Toolkit. The application allows users to explore books, manage orders, and much more.

## Features

### Admin Features:
- **Add Books:** Admin can add new books to the catalog with details such as title, author, price, and description.
- **Edit Book Details:** Modify book descriptions or details at any time.
- **Delete Books:** Remove books from the catalog if necessary.
- **View All Books:** Admin has a complete overview of the entire book inventory.
- **Order Management:** Admin can view all orders placed by users and update the order status (e.g., *cancelled*, *delivered*).

### User Features:
- **View Books:** Users can browse through all available books in the catalog.
- **Favourites:** Users can add books to their favourites list for easy access later.
- **Cart Management:** Add books to the cart and proceed with placing orders.
- **Order History:** Users can view their past order history with detailed information.
  
## Technology Stack

- **Frontend:** React.js, React Router, Redux, Redux Toolkit
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **State Management:** Redux (with Redux Toolkit)
  
## Authentication
JWT-based authentication is implemented for both admin and user roles. Admins and users are identified by their roles and provided different sets of features.

Upon successful login:
- A JWT token is generated and stored in `localStorage` to persist authentication.
- Redux Toolkit manages the state, ensuring seamless login/logout functionality and role-based access.

### Role-based Access:
- **Admin Role:** Admin can manage books and orders.
- **User Role:** Users can browse, add favourites, manage cart, and place orders.

## About this Project

I built this project by following along with a fantastic YouTube tutorial (https://www.youtube.com/watch?v=KWTRGuUXMTY&list=PLh9snHvfAj6IwguqPwSJx8zFTxBwRSwTT)). It was a great learning experience where I picked up a lot of concepts, including full-stack development with the MERN stack.
The original tutorial didn’t come with a GitHub repository, so I decided to put one together myself! Along the way, I made sure to apply what I learned, adding some extra functionality and refining the code to make it my own.
  
