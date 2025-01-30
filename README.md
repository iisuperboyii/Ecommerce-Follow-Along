# Project Title:  
**E-Commerce Website**

---

## Project Overview:  
This project is all about creating a fully functional e-commerce website where users can browse products, add them to their cart, and complete purchases securely. It’s a platform designed to simulate real-world online shopping experiences while providing a space to learn key web development skills. The project focuses on creating a user-friendly and visually appealing interface backed by a robust and scalable backend.

---

## Key Features:  

- **User Authentication:**  
  Allow users to sign up, log in, and manage their accounts securely.  

- **Product Catalog:**  
  Display a dynamic catalog of products with details like name, price, and description.  

- **Search and Filter:**  
  Enable users to search for products and apply filters like price range or category.  

- **Cart System:**  
  Let users add items to their cart, view the total, and proceed to checkout.  

- **Order Management:**  
  Users can view their order history and track ongoing orders.  

- **Admin Panel:**  
  Admins can add, edit, or delete products and manage user orders.  

- **Interactive Frontend:**  
  A responsive and engaging UI to ensure a smooth shopping experience.  

- **Payment Integration:** *(Optional)*  
  Integrate a payment gateway for secure transactions.  

---

## Tech Stack:  

- **Frontend:** React with Vite for a fast and responsive user interface.  
- **Backend:** Node.js with Express to handle server-side logic.  
- **Database:** MongoDB for storing user and product data.  
- **Authentication:** Secure user authentication using JSON Web Tokens (JWT).  
- **Hosting:** Netlify for the frontend and Render for the backend.  
- **API:** RESTful APIs for communication between the frontend and backend.  


## Milestones

### Milestone 1: Repository Creation

* Created a GitHub repository named "Ecommerce-Follow-Along" with a README file.

### Milestone 2: Initial Setup & Login Page

* Pushed code to the GitHub repository.
* Set up separate folders for frontend and backend.
* Developed a functional Login Page for the frontend.

### Milestone 3: Project Setup & Foundation

* Established project structure, set up database connection, and implemented basic error handling.

### Milestone 4: User Authentication & File Uploads

* Implemented user registration, login, and file upload functionalities.
* Integrated user authentication and authorization middleware.

### Milestone 5: User Signup

* Created the Signup page with form validation.

* Implemented user signup functionality with email verification.


### Milestone 6: Password Encryption & Data Storage

1. **Encrypt Password:**
    * Hash the user's password with `bcrypt` during signup.
    * Store the hashed password securely in the database.

2. **Store User Data:**
    * Save user data (e.g., name, email) in the database, ensuring the password remains encrypted.


### Milestone 7: Login Endpoint

1. **Accept User Credentials:** Receive email/username and password from the user.
2. **Retrieve User:** Query the database for the user matching the provided credentials.
3. **Password Validation:**
    * Hash the entered password with `bcrypt`.
    * Compare the hashed password with the stored hashed password in the database.
    * Authentication is successful if they match.


### Milestone 8: Product Card & Homepage Layout

* Created a reusable Card Component with props for product details.
* Designed the Homepage layout using a grid or flexbox to display multiple product cards.

### Milestone 9: Product Form Creation

1. **Create Product Form:**
   - Make a form for adding product details like name, description, price, and images.

2. **Image Uploads:**
   - Allow users to upload multiple images for the product.

3. **Form Validation:**
   - Check that the form fields are filled correctly (e.g., price is a number, name is not empty).
   

   # Project Title:  
**E-Commerce Website**

---

## Project Overview:  
This project is all about creating a fully functional e-commerce website where users can browse products, add them to their cart, and complete purchases securely. It’s a platform designed to simulate real-world online shopping experiences while providing a space to learn key web development skills. The project focuses on creating a user-friendly and visually appealing interface backed by a robust and scalable backend.

---

## Key Features:  

- **User Authentication:**  
  Allow users to sign up, log in, and manage their accounts securely.  

- **Product Catalog:**  
  Display a dynamic catalog of products with details like name, price, and description.  

- **Search and Filter:**  
  Enable users to search for products and apply filters like price range or category.  

- **Cart System:**  
  Let users add items to their cart, view the total, and proceed to checkout.  

- **Order Management:**  
  Users can view their order history and track ongoing orders.  

- **Admin Panel:**  
  Admins can add, edit, or delete products and manage user orders.  

- **Interactive Frontend:**  
  A responsive and engaging UI to ensure a smooth shopping experience.  

- **Payment Integration:** *(Optional)*  
  Integrate a payment gateway for secure transactions.  

---

## Tech Stack:  

- **Frontend:** React with Vite for a fast and responsive user interface.  
- **Backend:** Node.js with Express to handle server-side logic.  
- **Database:** MongoDB for storing user and product data.  
- **Authentication:** Secure user authentication using JSON Web Tokens (JWT).  
- **Hosting:** Netlify for the frontend and Render for the backend.  
- **API:** RESTful APIs for communication between the frontend and backend.  



### Milestone 10: Product Schema & Endpoint

1. **Product Schema:**
   - Define product details (name, description, price, image URL) using Mongoose with validation.

2. **Endpoint Creation:**
   - Create a POST endpoint to save product data to MongoDB.

3. **Why Validation?**
   - Ensures only valid data is saved, keeping the database accurate.

### Milestone 11: Data Fetching and Display

1. This milestone focuses on fetching product data from the backend and dynamically displaying it on the frontend using product cards.

2. **Key Objectives**

  - Implement a backend endpoint to retrieve all product data from MongoDB and send it to the frontend.
  - Create a frontend function to fetch the product data from the endpoint.
  - Dynamically render the retrieved product data using the existing product card component.