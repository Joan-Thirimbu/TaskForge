# My Public Project - TaskForge

This application, built with **Angular**, allows users to efficiently organize and manage their tasks. Users can view their tasks in a table format, making it easy to keep track of them. The app provides functionality to ***add***, ***edit***, and ***delete*** tasks, giving users full control over their task list. It uses **Angular Material** for its UI components, ensuring a clean with modern design elements. Additionally, ***Angular's routing*** is implemented to provide smooth navigation between different views, such as the task list and the forms for adding or editing tasks. This seamless user experience makes the app both functional and easy to use for everyday task management. 

## UI Design

In addition to the core functionality, I also worked on the UI design to ensure a visually appealing and user-friendly experience. The app utilizes ***Angular Material*** & ***Tailwind CSS*** to create a clean and consistent interface, with well-designed forms, buttons, and tables that help users easily interact with the task management features. The app is currently live and fully functional, with a smooth and intuitive user interface in place. The design has been optimized for various screen sizes to ensure a seamless experience across devices. Future enhancements will focus on improving accessibility to further enhance usability for all users.

## Technologies Used

- **Frontend Framework**: Angular (v18.2.12)
- **UI Framework**: Angular Material (v18.2.14)
- **State Management**: RxJS (v7.8.1)
- **TypeScript**: v5.5.4
- **Mock Backend**: JSON Server
- **Angular CLI**: v18.2.12
- **Node.js**: v22.12.0
- **Package Manager**: npm (v10.8.2)
- **Operating System**: macOS (darwin x64)

### Key Angular Packages

- **@angular-devkit/architect**: v0.1402.13
- **@angular-devkit/build-angular**: v18.2.12
- **@angular-devkit/core**: v18.2.12
- **@angular-devkit/schematics**: v18.2.12
- **@angular/cdk**: v18.2.14
- **@angular/cli**: v18.2.12
- **@angular/material**: v18.2.14
- **@schematics/angular**: v18.2.12

## License

This project is licensed under the **Apache License 2.0** – see the [LICENSE](LICENSE) file for details.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/taskforge.git

2. **Navigate to the project folder:**

   ```bash
   cd taskforge

3. **Install dependencies:**

   ```bash
   # Install the project dependencies
   
   npm install

## Running the Application

To start the development server and run the application:

1. **Run the development Server:**

   ```bash
   # Start the Angular development server
   
   ng serve
   
   ```
     *Once the server starts, you can open the app in your browser by navigating to: http://localhost:4200/ in your browser.*

2. **Install & run JSON server for mock data:**

   We are using the db.json file to simulate a backend API using JSON Server.
   
   ```bash
   #Install JSON Server globally (if you haven't already)
   
   npm install -g json-server@0.16.3
   ```
   
   ```bash
   npx json-server --watch db.json

   # This starts the JSON Server which will watch the db.json file for changes, serving mock data to the frontend.

   ```
3. **Building the Project:**

   ```bash
   ng build
   ```

4. **Code scaffolding**
   
    To generate a new component, run:

   ```bash
   ng generate component component-name
   ```
   
    To generate a new (directive/pipe/service/class/guard/interface/enum/module), run:
   
   ```bash
   ng generate directive|pipe|service|class|guard|interface|enum|module
   ```

    *-> Note: **"directive|pipe|service|class|guard|interface|enum|module"** generates the corresponding files and boilerplate code for that specific entity type in your Angular project. So, run them `INDIVIDUALLY` 👀*

6. **Running unit tests**
   
   To execute the unit tests via [Karma](https://karma-runner.github.io), run:

   ```bash
   ng test
   ```
#### Contact Info

If you have any questions, suggestions, or issues, feel free to reach out!

- **LinkedIn**: [Joan (Wangare) Thirimbu](https://www.linkedin.com/in/joan-thirimbu-969008231/)
- **Author/Developer & Designer**: [Joan Thirimbu](https://github.com/Joan-Thirimbu)
- **GitHub Issues**: For bugs or feature requests, please open an issue on the [GitHub repository](https://github.com/Joan-Thirimbu/TaskForge/issues).
