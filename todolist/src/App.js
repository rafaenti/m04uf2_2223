



import React from 'react';

import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import './App.css';

class App extends React.Component {	
	constructor (props){
		super(props);

		this.state = {
			tasklist: ["lista de la app", "otra tarea"]
		};
	}



	addTask = (task) => {
		console.log(task);

		this.state.tasklist.unshift(task);

		this.setState({
			tasklist: this.state.tasklist
		});
	}

	render (){
  	return (
    <main className="App">
		<Title text="TOD-o-App 2000" />
		<TaskForm onAddTask={this.addTask} />
		<TaskList list={this.state.tasklist} />
		<p>Tienes <strong>{this.state.tasklist.length}</strong> tareas pendientes</p>
    </main>
  	);
	}
}

export default App;
