function getCompletedTasks(tasks) {
    return tasks.filter(task => task.status === 'completed');
}

const tasks = [
    { taskId: 1, title: "Task 1", status: "completed", dueDate: "2023-10-01" },
    { taskId: 2, title: "Task 2", status: "pending", dueDate: "2023-10-05" },
    { taskId: 3, title: "Task 3", status: "completed", dueDate: "2023-10-10" },
    { taskId: 4, title: "Task 4", status: "in-progress", dueDate: "2023-10-15" }
];

const completedTasks = getCompletedTasks(tasks);
console.log(completedTasks);
