## Basic REST API
```markdown


This project is a simple RESTful API built with **Express.js** that provides secure CRUD operations for user management.

---

## Features
- Add user data
- Read user data
- Delete user data

---

## File Structure
```
ProgHubs_01/
├── src/
│   ├── controllers/
│   │   ├── userController.js       # Handles CRUD operations for users
│   ├── routes/
│   │   ├── userRoutes.js           # Routes for user CRUD operations
│   ├── middlewares/
│   │   └── authMiddleware.js       # Middleware to validate basic authentication
│   ├── models/
│   │   └── userModel.js            # User schema and password hashing logic
│   ├── app.js                      # Express application setup
├── .env                             # Environment variables
├── .gitignore                       # Files to ignore in Git
├── package.json                     # Project dependencies and scripts
├── index.js                        # Server entry point
```

#### Get All Users
- **Endpoint:** `GET /users`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com"
    },
    {
      "id": 2,
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  ]
  ```

#### Add a New User
- **Endpoint:** `POST /users`
- **Request Body:**
  ```json
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "id": 3,
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
  ```

#### Delete a User
- **Endpoint:** `DELETE /users/:id`
- **Example:** `/users/1`
- **Response:**
  - **If user exists:**
    ```json
    {
      "message": "User with ID 1 deleted successfully"
    }
    ```
  - **If user does not exist:**
    ```json
    {
      "error": "User with ID 1 not found"
    }
    ```

---

## Testing with Postman
1. **Add a User:** send a `POST` request to `/user` with user details.
2. **Get a User:**send a `GET` request to `/user`.
3. **Delete a User:** send a `DELETE` request to `/user/id`.
