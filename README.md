# Task-Man

Task-Man is a simple Kanban board application for task management. It allows users to create tasks, assign them to different statuses (Not Started Yet, In Progress, and Completed), and manage tasks via a drag-and-drop interface. The application leverages Bootstrap for styling and jQuery UI for draggable and droppable functionalities.

## Table of Contents

- [Features](#features)
- [Files](#files)
  - [index.html](#indexhtml)
  - [script.js](#scriptjs)
  - [style.css](#stylecss)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Links](#links)

## Features

- **Add Tasks:** Users can add new tasks through a modal form.
- **Task Management:** Tasks can be categorized into three statuses: Not Started Yet, In Progress, and Completed.
- **Drag-and-Drop:** Tasks can be dragged between different status lanes.
- **Persistent Storage:** Tasks are stored in the browser's local storage, ensuring data persistence across page reloads.

## Files

### `index.html`

This is the main HTML file for the Task-Man application. It includes:
- Bootstrap and FontAwesome for styling and icons.
- A modal form for adding new tasks.
- Three columns representing task statuses with corresponding IDs for task management.

### `script.js`

This JavaScript file manages the application's functionality. Key features include:
- **Task Creation:** Generates unique task IDs and creates task cards.
- **Task Rendering:** Renders tasks from local storage and makes them draggable.
- **Task Management:** Handles adding, deleting, and updating tasks.
- **Drag-and-Drop Functionality:** Integrates draggable and droppable features for task cards.

### `style.css`

This stylesheet contains custom styling for the Task-Man application. It includes:
- General styles for body, header, and card components.
- Specific styles for the task cards, modal, and form controls.
- Ensures visual consistency with Bootstrap components.

## Installation

To get started with Task-Man:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/task-man.git
   cd task-man
   ```

2. **Open the project:**
   Open the `index.html` file in your web browser.

## Usage

To use the application, click on the "Add Task" button, fill in the task details, and manage your tasks by dragging them between the different lanes.

## Screenshot

![Task-Man Screenshot](/assets/images/Screenshot-to-do.png)
![Task-Man Screenshot](/assets/images/Screenshot-in-progress.png)
![Task-Man Screenshot](/assets/images/Screenshot-done.png)

## Links

- GitHub Repository: [Your GitHub Link](https://github.com/awb2987/task-man)
