# REST API Assignment

This is a complete REST API project built using Express.js and Modular MVC Architecture. It includes Authentication, Category CRUD, and Course CRUD functionalities.

## Technologies & Packages Used (And Why)

The following packages and technologies were used in this project:

1. Express.js (`express`): 
   - Why? It is the most popular Node.js framework used for building servers, defining routes, and handling APIs. It makes backend development much easier and structured.
2. Mongoose (`mongoose`): 
   - Why? It is used to interact with MongoDB. It helped in creating Schemas and Models for User, Category, and Course to ensure data is saved in the correct format in the database.
3. MongoDB: 
   - Why? It is a NoSQL database used to store the application data. It is connected locally using `mongodb://127.0.0.1:27017/assignmentDB`.
4. Dotenv (`dotenv`): 
   - Why? Used for security. Instead of hardcoding sensitive information (like Database URI and Port) directly into the code, it is stored in a `.env` file.

---

## Modular MVC Architecture (Folder Structure)

The project is divided into modules to keep the code clean and manageable:

- `config/db.js`: Contains the code to connect to the MongoDB database.
- `models/`: Contains the database structures/schemas (`User.js`, `Category.js`, `Course.js`). These define how data looks.
- `controllers/`: Contains the actual logic (functions). This is where the server decides what to do when a request is received (e.g., save data or fetch data).
- `routes/`: Connects the URLs to the controllers. (e.g., Requests to `/api/auth` are routed to `authController`).
- `server.js`: The main entry point of the project. It starts the Express server and connects all the routes.

---

## Endpoints (APIs)

The project contains 3 main modules:

### 1. Authentication System (`/api/auth`)
- `POST /register`: To create a new user (Name, Email, and Password are required).
- `POST /login`: To verify user credentials (Email and Password required).

### 2. Category Module (`/api/categories`)
- `POST /`: To create a new category.
- `GET /`: To fetch a list of all categories.
- `GET /:id`: To fetch a specific category by its ID.
- `PUT /:id`: To update a category.
- `DELETE /:id`: To delete a category.

### 3. Course Module (`/api/courses`)
- `POST /`: To create a new course.
- `GET /`: To fetch a list of all courses.
- `GET /:id`: To fetch a specific course by its ID.
- `PUT /:id`: To update a course.
- `DELETE /:id`: To delete a course.

---

## How to Run This Project

If you have cloned this project from GitHub, follow these steps to run it:

Step 1: Install dependencies:
```bash
npm install