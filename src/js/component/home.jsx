import React, { useState } from "react";

const Home = () => {

	const [newEntry, setNewEntry] = useState("")
	const [toDoList, setToDoList] = useState(["Make coffee", "Drink coffee", "Prepare the meal", "study for the bootcamp", "10 mnts exercise routine"])

	const onChangeHandler = (e) => {
		const newListItem = e.target.value;
		setNewEntry(newListItem);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();


		const updatedToDoList = [...toDoList, newEntry]
		setToDoList(updatedToDoList);
		console.log(updatedToDoList);
	}

	const deleteToDo = (index) => {
		const updatedToDoList = [...toDoList];
		updatedToDoList.splice(index, 1);
		setToDoList(updatedToDoList);
	}

	return (
		<div className="container text-center m-5 bg-danger-subtle">
			<h1></h1>
			<div>
				<form onSubmit={onSubmitHandler}>
					<input onChange={onChangeHandler} value={newEntry} type="text" className="form-control" id="to-do" placeholder="What needs to be done?">
					</input>
				</form>
				<ol>
					{toDoList.map((toDo, index) => (<li key={index}>{toDo}<button onClick={() => deleteToDo(index)}>X</button></li>))}
				</ol>
			</div>
		</div>
	);
};

export default Home;