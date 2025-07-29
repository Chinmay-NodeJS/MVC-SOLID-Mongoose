# 🧠 Custom ORM-based MVC Framework in Node.js with Mongoose

This project is a lightweight, scalable backend framework built with **Node.js**, **Express**, and **Mongoose**, following:

- ✅ MVC Architecture
- ✅ SOLID Principles
- ✅ Custom Repository Pattern
- ✅ PSR-4-like Route Organization

---

## 📁 Project Structure

```bash
your-app/
├── src/
│ ├── config/ # DB config and environment
│ ├── core/ # BaseRepository (abstract ORM logic)
│ ├── app/
│ │ ├── models/ # Mongoose schemas
│ │ ├── repositories/ # Repositories extending base
│ │ ├── controllers/ # Business logic layer
│ │ └── routes/ # Express routes
├── index.js # Main entry point
├── .env
├── package.json
```


---

## 🚀 Features

- Modular, testable codebase
- Clean separation of concerns (SRP)
- Extensible `BaseRepository` for CRUD logic
- Easy-to-use controller and routing system
- Environment configuration via `.env`

---

## 🛠️ Installation

```bash
git clone https://github.com/Chinmay-NodeJS/MVC-SOLID-Mongoose.git
cd MVC-SOLID-Mongoose
npm install
```

## ⚙️ Environment Setup
Create a `.env` file in the root:
```ini
PORT=3000
MONGO_URI=mongodb://localhost:27017/yourdbname
```
## 🧪 Run the App
```bash
npm start
```
Or run directly:
```bash
node index.js
```

## 🧩 Example Usage
### 📁 Controller (`UserController.js`)
```js
const UserRepository = require('../repositories/UserRepository');

class UserController {
  async index(req, res) {
    const users = await UserRepository.findAll();
    res.json(users);
  }
}
```

### 📁 Repository (`UserRepository.js`)
```js
const BaseRepository = require('../../core/BaseRepository');
const User = require('../models/UserModel');

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }
}
```

## ✅ API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/users`     | Get all users     |
| GET    | `/api/users/:id` | Get user by ID    |
| POST   | `/api/users`     | Create a new user |
| PUT    | `/api/users/:id` | Update user       |
| DELETE | `/api/users/:id` | Delete user       |


## 📚 Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## 🧠 Principles Followed
- Single Responsibility: Each layer has one job.
- Open/Closed: Easily extend repositories.
- Liskov Substitution: Child repositories replace parent base safely.
- Interface Segregation: Each file sticks to its concern.
- Dependency Inversion: Controllers depend on abstractions, not DB logic.

## 📄 License
MIT License