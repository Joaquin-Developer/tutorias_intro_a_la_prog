const btnNewTask = document.getElementById('add_new_task');
const inputNewTask = document.getElementById('newTask');

addEventListener("load", showAllTasks)

btnNewTask.addEventListener("click", () => {
    if (inputNewTask.value) {
        const task = new Task(inputNewTask.value, false);
        insertTask(task);
        saveTask(task);
        inputNewTask.value = "";
    }
});

