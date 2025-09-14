# Assignment 8: Todo List Web Application

[Live Demo](https://ass-8-todo-mongo-ejs.onrender.com/)

## About

A dynamic and responsive Todo List web application built with Node.js, Express, EJS, and MongoDB Atlas. This project is part of Assignment 8 of the MERN Stack course, extending the previous EJS Todo List by adding permanent data storage and priority-based task management.

## Features

- Add new tasks with title and priority (High, Medium, Low)
- Edit existing tasks with real-time alerts
- Delete tasks with confirmation and success alerts
- Filter tasks by priority on the UI
- Responsive design with an intuitive interface
- Persistent data storage with MongoDB Atlas
- Proper RESTful API handling with HTTP methods (GET, POST, PUT, DELETE)

## Technology Stack

- Backend: Node.js, Express.js
- View Engine: EJS (Embedded JavaScript templates)
- Database: MongoDB Atlas (cloud-hosted NoSQL database)
- Frontend: HTML, CSS, JavaScript (Vanilla)
- Styling: CSS

## Project Structure
<pre>
├── index.js # Main server file
├── package.json # Dependencies and scripts
├── models
│ └── Task.js # Mongoose schema/model for tasks
├── views
│ └── list.ejs # EJS template for the todo list UI
├── public
│ ├── style.css # CSS style sheet
│ └── script.js # Client-side JavaScript
</pre>


## Installation and Setup

1. Clone the repository:

<pre>
  git clone https://github.com/vaibhavpatidarbhoot/ass-8-todo-ejs-mongo.git
  cd ass-8-todo-ejs-mongo
</pre>


2. Install dependencies:
<pre>
  npm install
</pre>


3. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), configure user and network access, then copy your connection string URI.

4. Set environment variable `MONGODB_URI` with your MongoDB Atlas connection string. You can do this by creating a `.env` file or by setting it in your deployment environment.

5. Start the app locally:

<pre>
  npm run dev
</pre>

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Render

1. Push your code to GitHub.

2. Log in to [Render](https://render.com) and create a new Web Service.

3. Connect your GitHub repository.

4. Set the Build Command to:


<pre>
  npm install
</pre>


5. Set the Start Command to:

<pre>
  npm start
</pre>


6. Add an environment variable named `MONGODB_URI` with your MongoDB Atlas URI.

7. Create the service and wait for deployment to complete.

8. Your app will be live at the provided Render URL.

## Usage

- Add tasks with title and select priority.
- Click Edit (pencil icon) to modify a task; updates save automatically on blur.
- Click Delete (trash icon) to remove a task with confirmation.
- Use the priority filter dropdown to filter visible tasks.
- Alerts are shown for empty inputs, successful edits, and deletions.

## Author

Vaibhav Patidar  
[GitHub](https://github.com/vaibhavpatidarbhoot)

## License

ISC License













