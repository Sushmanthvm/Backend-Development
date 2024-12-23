localStorage.setItem('task1', 'Learn Node.js');

const tasks = ['Learn Node.js', 'Practice JavaScript'];
localStorage.setItem('tasks', JSON.stringify(tasks));

const task = localStorage.getItem('task1');
console.log(task); // Output: Learn Node.js

const storedTasks = JSON.parse(localStorage.getItem('tasks'));
console.log(storedTasks); // Output: ['Learn Node.js', 'Practice JavaScript']
