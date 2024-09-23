// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// Function to generate a unique task id
function generateTaskId() {
    const id = nextId++;
    localStorage.setItem("nextId", JSON.stringify(nextId));
    return id;
}

// Create a function to create a task card
function createTaskCard(task) {
    return `
    <div class="card mb-3" data-id="${task.id}">
        <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <p class="card-text">${task.description}</p>
            <p class="card-text">Due Date: ${task.dueDate}</p>
            <button class="btn btn-danger btn-sm delete-task">Delete</button>
        </div>
    </div>
    `;
}

// Function to render the task list and make cards draggable
function renderTaskList() {
    // Clear current tasks in each lane
    $('#todo-cards').empty();
    $('#in-progress-cards').empty();
    $('#done-cards').empty();

    taskList.forEach(task => {
        const taskCard = createTaskCard(task);
        switch (task.status) {
            case 'not-yet-started':
                $('#todo-cards').append(taskCard);
                break;
            case 'in-progress':
                $('#in-progress-cards').append(taskCard);
                break;
            case 'completed':
                $('#done-cards').append(taskCard);
                break;
        }
    });

    // Make task cards draggable
    $('.card').draggable({
        helper: 'clone',
        revert: 'invalid'
    });

    // Make lanes droppable
    $('.lane').droppable({
        accept: '.card',
        drop: handleDrop
    });
}

// Function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();

    const title = $('#task-title').val().trim();
    const description = $('#task-description').val().trim();
    const dueDate = $('#task-due-date').val();
    const status = $('#task-status').val();

    if (!title || !description || !dueDate || !status) {
        alert('Please fill out all fields correctly.');
        return;
    }

    const newTask = {
        id: generateTaskId(),
        title,
        description,
        dueDate,
        status
    };

    taskList.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();

    $('#formModal').modal('hide');
}

// Function to handle deleting a task
function handleDeleteTask(event) {
    const card = $(event.target).closest('.card');
    const taskId = parseInt(card.attr('data-id'));

    taskList = taskList.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();
}

// Function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const taskId = parseInt($(ui.draggable).attr('data-id'));
    const newStatus = $(this).attr('id') === 'done' ? 'completed' : $(this).attr('id') === 'in-progress' ? 'in-progress' : 'not-yet-started';

    taskList = taskList.map(task => {
        if (task.id === taskId) {
            task.status = newStatus;
        }
        return task;
    });

    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();
}

// Initialize upon page load
$(document).ready(function () {
    // Render task list
    renderTaskList();

    // Event listener for form submission
    $('#task-form').on('submit', handleAddTask);
    // Event listener for task deletion
    $('#todo-cards, #in-progress-cards, #done-cards').on('click', '.delete-task', handleDeleteTask);

    // Initialize date picker for due date
    $('#task-due-date').datepicker({
        dateFormat: 'dd/mm/yy'
    });

    // Assign statuses to lanes for dropping
    $('#todo-cards').droppable({
        accept: '.card',
        drop: handleDrop
    });
    $('#in-progress-cards').droppable({
        accept: '.card',
        drop: handleDrop
    });
    $('#done-cards').droppable({
        accept: '.card',
        drop: handleDrop
    });
});
