// Sélection des éléments html

// const taskinput = document.getElementById('taskinput');
// const addTaskbtn = document.getElementById('addTaskbtn');
// const tasklist = document.getElementById('tasklist');


// Ajouter un écouteur d'événement au bouton addTaskBtn

// addTaskbtn.addEventListener('click', ()=>{
//      // Fonction pour ajouter une tâche
//      const taskText = taskinput.value.trim();
//      if (taskText !=='') {
//         const li = document.createElement('li');
//         li.textContent = taskText;
//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Supprimer';
//         deleteBtn.classList.add('delete');
//         li.appendChild(deleteBtn);
//         tasklist.appendChild('li');
//         taskinput.value = '';
//      }
// })


// Ajouter un écouteur d'événement à taskList pour gérer les tâches

// tasklist.addEventListener('click', (e) => {
//     // Fonction pour gérer les tâches
//     if (e.target.classList.contains('delete')) {
//         const li = e.target.parentElement;
//         tasklist.removeChild(li);
//     }
// });


// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', manageTasks);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Supprimer';
            deleteBtn.classList.add('delete');
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function manageTasks(e) {
        if (e.target.classList.contains('delete')) {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
});