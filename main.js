let taskInput = document.getElementById('task');
let addBtn = document.getElementById('addTask');
let allTasks = document.getElementById('allTasks');
let noTask = document.getElementById('noTask');
let showModal = document.getElementById('showModal');
let modal = document.getElementById('modal');
let close = document.getElementById('close');

let showModell = () => {
modal.classList.toggle('display');
}
close.addEventListener('click' ,showModell);
showModal.addEventListener('click',showModell )
let showNoTask = () => {
    if (allTasks.childNodes.length == 0) {
        noTask.style.display = "block"
    } else {
        noTask.style.display = "none"
    }
}

let addTask = () => {
    let task = taskInput.value;

    if (task.trim() == '' || taskInput.value.length < 2) {
        alert("you Must Valid Data")
    } else {
        noTask.style.display = "none"

        alertTask = document.createElement("div");
        alertTask.classList = "task alert alert-info mx-auto col-4 m-4";
        alertTask.append(task);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList = "btn btn-danger float-right delete";
        deleteBtn.innerText = "Delete";
        alertTask.append(deleteBtn)

        alertTask.addEventListener("click", (e) => {
            if (e.target.classList.contains('task')) {
                e.target.classList.toggle('cheaked')
            }
        })

        allTasks.append(alertTask)
        taskInput.value = '';
        showModell();
    }
}

document.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('delete')) {
        ev.target.parentElement.remove();
        showNoTask();
    }


})


addBtn.addEventListener("click", addTask)