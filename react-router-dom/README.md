<header>
        <h1>MyApp React Project</h1>
        <p>This is a React application with authentication and product management functionality.</p>
    </header>

   <section>
        <h2>Project Overview</h2>
        <p>This application is built using React, React Router for navigation, and localStorage for managing users and authentication data. It features the following:</p>
        <ul>
            <li>Home, About, Contact pages</li>
            <li>Product list and product details page</li>
            <li>User authentication (Login, Register, and Logout)</li>
        </ul>
    </section>


  <section>
    <h2>ScreenShots and Video</h2>



https://github.com/user-attachments/assets/caff0d87-ecf8-4f90-ae6c-52dab055142d


    
  ![Screenshot 2025-01-27 153049](https://github.com/user-attachments/assets/0bed9bdf-7a12-4bed-ae33-131060abd7b4)
  ![Screenshot 2025-01-27 153328](https://github.com/user-attachments/assets/734de27e-7a5a-4a3c-81ba-49f8065a43eb)
![Screenshot 2025-01-27 153147](https://github.com/user-attachments/assets/49bb3a07-d307-4883-8b61-4898a900298b)
![Screenshot 2025-01-27 153137](https://github.com/user-attachments/assets/1bc3744d-cdae-4f85-a1bb-f28c7ff4b553)
![Screenshot 2025-01-27 153127](https://github.com/user-attachments/assets/38d3c22b-a496-439b-a46e-47823dbeafae)
![Screenshot 2025-01-27 153110](https://github.com/user-attachments/assets/dcce17ba-66e4-49cb-86a5-0a97db7a154a)
![Screenshot 2025-01-27 153058](https://github.com/user-attachments/assets/6a18def0-13c9-4d46-afd6-2b9b4de0cba7)


  </section>

  <section>
        <h2>Installation</h2>
        <p>To install and run this project locally, follow these steps:</p>
        <ol>
            <li>Clone the repository: <code>git clone <repository-url></code></li>
            <li>Navigate to the project directory: <code>cd <project-folder></code></li>
            <li>Install dependencies: <code>npm install</code></li>
            <li>Run the development server: <code>npm start</code></li>
        </ol>
    </section>
    <section>
        <h2>Usage</h2>
        <p>After running the project, the following routes are available:</p>
        <ul>
            <li><strong>/</strong> - Home Page</li>
            <li><strong>/about</strong> - About Page</li>
            <li><strong>/contact</strong> - Contact Page</li>
            <li><strong>/products</strong> - Product List Page</li>
            <li><strong>/products/:productId</strong> - Product Details Page</li>
            <li><strong>/register</strong> - Registration Page</li>
            <li><strong>/login</strong> - Login Page</li>
        </ul>
    </section>
    <section>
        <h2>Technologies Used</h2>
        <ul>
            <li>React</li>
            <li>React Router</li>
            <li>CSS for styling</li>
            <li>LocalStorage for user authentication</li>
        </ul>
    </section>
    <section>
        <h2>File Structure</h2>
        <pre>
src/
├── components/
│   └── Navbar.js
├── context/
│   └── AuthContext.js
├── pages/
│   ├── AboutPage.js
│   ├── Contact.js
│   ├── HomePage.js
│   ├── Layout.js
│   ├── Login.js
│   ├── Product.js
│   ├── ProductDetails.js
│   └── Register.js
├── App.js
├── index.js
└── styles/
    ├── Login.css
    └── Register.css
        </pre>
    </section>

   <section>
        <h2>AuthContext</h2>
        <p>The <code>AuthContext</code> is used to manage user authentication. It provides functions to register, login, and logout users, while storing user data in <code>localStorage</code>.</p>
    </section>

  <section>
        <h2>Login & Register</h2>
        <p>Users can register and log in using email and password. If the credentials are correct, the user will be logged in and redirected to the home page.</p>
    </section>
    <section>
        <h2>Product Management</h2>
        <p>Products are listed on the <code>/products</code> page, and individual product details can be viewed by clicking on a product. Product data is simulated with images and descriptions.</p>
    </section>
    <section>
        <h2>License</h2>
        <p>This project is licensed under the MIT License.</p>
    </section>
