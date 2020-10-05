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

const listOfItems = [
	{
		id: 0,
		task: "Project",
		complete: false,
		ignored: false,
	},
	{
		id: 1,
		task: "Daily Retros",
		complete: false,
		ignored: false,
	},
	{
		id: 2,
		task: "Track Team Meet",
		complete: false,
		ignored: false,
	}
];

function Item() {
	const [complete, setComplete] = useState(false);
	const [ignore, setIgnore] = useState(false);

	const style = {
		// fontSize: "1.5em",
		// margin: "0.5em",
		color: (complete ? "green" : "royalblue"),
		textDecoration: (ignore ? "line-through" : "none"),
	}

	return (
		<li>
				<span style={style}>{item.task}</span>
				<button onClick={() => markComplete}>Check</button>
				<button onClick={() => markIgnored}>Cross</button>
		</li>
	);
}

export default function TodoApp() {
	const [items, setItems] = useState(listOfItems);

	const addNew = (item) => {
		// setItems(items.push(new Item()));
		// setItems(items.push(item));
	};

	// const getClassName = (id) => {
	// 	let className = "task";
	// 	if (items[id].complete) {
	// 		className += " complete";
	// 	} else if (items[id].ignored) {
	// 		className += " ignored";
	// 	}

	// 	return className;

	// }

	const makeItem = (item) => {

	}

	return (
		<div className="todo container">
			<h2>To-Do List</h2>
			<div class="list">
				<ul>
					{
						items.map(item => new Item(item))

					}
				</ul>
				


			</div>
		</div>
	);
}