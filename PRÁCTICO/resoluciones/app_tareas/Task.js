
class Task {
    constructor(name, finished) {
        this.name = name
        this.finished = finished
    }

}

/**
 * Tasks functions:
 */

const ulAllTasks = document.getElementById("all_tasks");

const insertTask = (task) => {
    let liTask = document.createElement("li")
    let inputCheck = document.createElement("input");
    inputCheck.classList.add("form-check-input")
    inputCheck.type = "checkbox"
    inputCheck.id = "checkbox_" + task.name;
    inputCheck.addEventListener("click", event_updateTaskStatus);

    let label = document.createElement("label");
    label.classList.add("form-check-label");
    label.for = inputCheck.id;
    label.appendChild(document.createTextNode(task.name));
    
    if (task.finished) {
        label.classList.add("line-through");
        inputCheck.checked = true;
    }
    liTask.appendChild(inputCheck);
    liTask.appendChild(label);

    ulAllTasks.appendChild(liTask);

}

const getAllTasks = ()=> JSON.parse(localStorage.getItem('all_tasks'));

const saveTask = (task) => {
    let allTasks = getAllTasks();
    if (allTasks == null || allTasks == undefined) {
        allTasks = new Array();
    }
    allTasks.push(task);
    localStorage.setItem('all_tasks', JSON.stringify(allTasks));
}

const showAllTasks = () => {
    const allTasks = getAllTasks();

    if (allTasks != null && allTasks.length !=0) 
    {
        for (let task of allTasks) insertTask(task);    
    }
}

const updateTaskStatus = (taskname) => {
    const allTasks = getAllTasks();
    for (let task of allTasks) {
        if (task.name === taskname) {
            task.finished = (!task.finished);
        }
    }
    
    localStorage.setItem('all_tasks', JSON.stringify(allTasks));
}

const event_updateTaskStatus = (evt)=> {
    const element = evt.srcElement;
    let taskName = element.id.split('_')[1];
    // remove line from label:
    const label = element.parentElement.childNodes[1]
    // debugger;
    if (element.checked) {
        label.classList.add("line-through");
    } else {
        label.classList.remove("line-through");
    }
    
    // updated task in local storage:
    updateTaskStatus(taskName);
}
