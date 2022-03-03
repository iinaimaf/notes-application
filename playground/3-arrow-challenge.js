const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTaskToDo() {
        const tasksToDo = this.tasks.filter((task) => {
            return task.completed === false
        })
        return tasksToDo
    }
}




console.log(tasks.getTaskToDo())