const btnNewTask = document.getElementById('add_new_task');
const inputNewTask = document.getElementById('newTask');

const showAllTasks = () => {
    const allTasks = Task.getAllTasks();

    if (allTasks != null && allTasks.length !=0) 
    {
        for (let task of allTasks) Task.insertTask(task);    
    }
}

addEventListener("load", showAllTasks);

btnNewTask.addEventListener("click", () => {
    if (inputNewTask.value) {
        const task = new Task(inputNewTask.value, false);
        Task.insertTask(task);
        Task.saveTask(task);
        inputNewTask.value = "";
    }
});
