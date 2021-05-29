import React, { useState } from "react";

// import ReactDOM from "react-dom";


// function TodoItem(props) {
// 	return (
// 		<div className="todoItem">
// 			<p>{props.task}</p>
// 			<button className="complete" onClick={props.onCheck}>Mark Complete</button>
// 			<button className="crossOff" onClick={props.onCross}>Cross Off</button>
// 		</div>
// 	);
// }

// class TodoList extends React.Component {
// 	render() {
// 		return (
// 			<ul>
// 				{this.props.items.map(item=> (
// 					<li key={item.id}>
// 						<TodoItem task={item.task} onCheck={this.props.check} onCross={this.props.cross} />
// 					</li>
// 				))}
// 			</ul>
// 		);
// 	}
// }

// export default class TodoApp extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			items: [],
// 			text: "",
// 		};
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	render() {
// 		return (
// 			<div className="container">
// 				<h3>TO-DO LIST</h3>
// 				<Todolist items={this.state.items} />

// 			</div>
// 		);
// 	}
// }


// ReactDOM.render(
// 	<TodoApp />,
// 	document.getElementById("todos")
// );

// const listOfItems = [
// 	{
// 		id: 0,
// 		task: "Project",
// 		complete: false,
// 		ignored: false,
// 	},
// 	{
// 		id: 1,
// 		task: "Daily Retros",
// 		complete: false,
// 		ignored: false,
// 	},
// 	{
// 		id: 2,
// 		task: "Track Team Meet",
// 		complete: false,
// 		ignored: false,
// 	}
// ];

function Item(taskName) {
	const [task, setTask] = useState(taskName);
	const [complete, setComplete] = useState(false);
	const [ignore, setIgnore] = useState(false);

	const style = {
		color: (complete ? "green" : "royalblue"),
		textDecoration: (ignore ? "line-through" : "none"),
	}

	const getClassComplete = () => {
		return "taskButton "+(complete ? "complete" : "");
	}

	const getClassIgnore = () => {
		return "taskButton "+(ignore ? "ignore" : "");
	}

	return (
		<li>
				<span style={style}>{task}</span>
				<button className={getClassComplete()}  onClick={() => setComplete(!complete)}>Check</button>
				<button className={getClassIgnore()} onClick={() => setIgnore(!ignore)}>Cross</button>
		</li>
	);
}

export default function TodoApp() {
	const [items, setItems] = useState(null);
	const [inputValue, setInputValue] = useState("");

	const addNew = (item) => {
		items.push(item);
	};

  const changeInput = evt => {
    const { value } = evt.target;
    setInputValue(value);
	};
	const reset = () => {
    setInputValue("");
  };

	return (
		<div className="todo-widget container">
			<h2>To-Do List</h2>
			<ul>
				{	items.map(i => {return i})	}
			</ul>
			<input id='input' type='text' value={inputValue} onChange={changeInput} />
			<button id='resetInput' onClick={reset}>Reset</button>
		</div>
	);
}