# Full Stack Template Project

A reusable full-stack starter template built to provide a clean MVC foundation for future projects. This template is designed to speed up development by handling basic server setup, routing structure, and database integration from the start.

**Link to project:** Not deployed (local development template)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express, MongoDB  
**Dependencies:** ejs, express, mongoose, morgan, dotenv, cors

This project began as a simple full-stack application and was refactored into a reusable template for building future projects more efficiently. It follows an MVC architecture, separating routes, controllers, models, and views to encourage maintainable and scalable code organization.

Express is used to handle server routing and middleware, while MongoDB serves as the database layer. Mongoose provides schema definitions and a structured way to interact with the database. EJS is included for server-side rendering, making it easy to generate dynamic pages without a frontend framework.

The template includes common middleware such as Morgan for logging, dotenv for environment variable management, and CORS for flexible development setups. The goal of the template is to remove repetitive setup work so new projects can focus on feature development and business logic.

## Optimizations

As the template evolved, unnecessary code was removed and the folder structure was standardized to make it easy to extend. Middleware and dependencies were chosen to balance simplicity with practical real-world needs.

## Future Improvements

Future improvements could include adding optional authentication scaffolding, improving documentation, and providing example routes or models. Updating dependencies and expanding configuration options would also help keep the template current.

## Lessons Learned:

This project reinforced the value of starting with a solid architectural foundation. Abstracting repeated setup work into a reusable template helped me better understand MVC patterns, middleware usage, and how small structural decisions early on can significantly impact development speed and maintainability.