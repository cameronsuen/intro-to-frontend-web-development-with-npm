import moment from 'moment';

class TodoItem 
{
	constructor(task, deadline)
	{
		this._task = task;
		this._deadline = deadline;
	}

	get task()
	{
		return this._task;
	}

	get deadline()
	{
		return this._deadline;
	}
}

(function() {

	// Fetches the ul element called todoList
	const todoList = document.getElementById('todoList');

	const items = [
		new TodoItem('Make an App', '19:00'),
		new TodoItem('Write a Report', '24:00'),
		new TodoItem('Make a Website', '17:00')
	];

	// Maps each TodoItem as a <li> element
	// Callback is written using arrow function
	// Please check the documentaiton if you are not sure
	const listItems = items.map((item) => {
		
		// Create and return the li element
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(item.task + '@ ' + moment(item.deadline, 'HH:mm').fromNow()));
		return li;

	});

	for (let listItem of listItems) {
		todoList.appendChild(listItem);
	}

})();