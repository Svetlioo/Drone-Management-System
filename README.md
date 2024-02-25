# Nemetschek Bulgaria RISE 2024 Homework

### name

Svetoslav Iliev

### email

svetlio.iliev17@gmail.com

# Drone Management System

### **Important: Running the Project Locally**

Before diving into the features and details of this project, it's important to know how to get it running on your local machine:

- Clone this repo
- `npm install` to install all required dependencies
- **`npm run server` to start the local server**
- **`npm run dev` to start the development server**

Once the server is running, open your browser and visit `http://localhost:<your_port>` to start using the application.

Now, let's dive into what this project is all about.

## Project Overview

This project is a real-time drone management system that simulates drone movement in a grid environment. It calculates and displays the distance, path, and number of steps between two points on the grid, supporting both diagonal and non-diagonal movements.

The system is built with WebSockets, allowing for real-time updates and concurrent users. Users can add orders through a form and these orders are updated in real-time across all connected clients. The system constantly keeps every user updated about the whole state of the entire simulation process.

Furthermore, the project is designed with extensibility in mind, allowing for seamless integration of additional features in the future. Although certain features were not implemented due to time constraints, the modular architecture and robust algorithms provide a solid foundation for further development and enhancement.

As a Java developer, working solely with JavaScript on this project presented a real challenge. The lack of type safety in JavaScript compared to Java (in this case TypeScript) made the development process slower and more error-prone. However, this challenge provided an opportunity for me to enhance my skills and knowledge in JavaScript development, adapting to a dynamically-typed language.

Debugging was particularly difficult due to the complex nature of the project. To overcome this challenge, I made a conscious effort to thoroughly analyze and familiarize myself with every aspect of the codebase. By gaining a deep understanding of the project's architecture, algorithms, and implementation details, I was able to effectively identify and fix issues, making the debugging process more manageable.

This experience not only improved my debugging skills but also allowed me to become more proficient in JavaScript development. It reinforced the importance of thorough understanding and attention to detail in software development, especially when working with complex projects.

## Features

- Real-time drone movement simulation in a grid environment with a legend.
- Calculation and display of distance, path, and number of steps between two destinations.
- Support for both diagonal and non-diagonal movements.
- Real-time updates and support for concurrent users through WebSockets.
- User orders can be added through a form and are updated in real-time.

## Conclusion

Thank you for taking the time to explore this project. Your interest and feedback are greatly appreciated. I hope you find the work I've done here valuable and enjoyable.

Best Regards,

**Svetoslav Iliev**
