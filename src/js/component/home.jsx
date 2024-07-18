import React, { useState } from "react";

const Home = () => {
  const [newEntry, setNewEntry] = useState("");
  const [toDoList, setToDoList] = useState([
    "Make coffee",
    "Drink coffee",
    "Prepare the meal",
    "Study for the bootcamp",
    "10 mnts exercise routine",
  ]);

  const onChangeHandler = (e) => {
    const newListItem = e.target.value;
    setNewEntry(newListItem);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setNewEntry("");

    const updatedToDoList = [...toDoList, newEntry];
    setToDoList(updatedToDoList);
    console.log(updatedToDoList);
  };

  const deleteToDo = (index) => {
    const updatedToDoList = [...toDoList];
    updatedToDoList.splice(index, 1);
    setToDoList(updatedToDoList);
  };

  return (
    <div className="container-sm">
      <h1 className="ps-3 d-flex justify-content-center fw-lighter">Todos</h1>
      <div className="m-auto" style={{ width: "40rem" }}>
        <form onSubmit={onSubmitHandler}>
          <input
            onChange={onChangeHandler}
            value={newEntry}
            type="text"
            className="form-control ps-0 fs-1 fw-lighter bg-white ps-3"
            id="to-do"
            placeholder="What needs to be done?"
          ></input>
        </form>
        <ol className="ps-0">
          {toDoList.map((toDo, index) => (
            <li
              className="d-flex justify-content-between border border-light-subtle p-3"
              style={{ height: "4rem" }}
              key={index}
            >
              {toDo}
              <button
                className="d-flex justify-content-end bg-white border-0 delete-button"
                onClick={() => deleteToDo(index)} 
              >
                <i className="fa-solid fa-x bg-white"></i>
              </button>
            </li>
          ))}
        </ol>
        <p className="align-items-end ps-3">
          {toDoList.length > 0
            ? toDoList.length + " item(s) left"
            : "Please add a new task"}
        </p>
      </div>
    </div>
  );
};

export default Home;
