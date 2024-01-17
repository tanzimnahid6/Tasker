import { useState } from "react";
import SearchBox from "./Task/SearchBox";
import TaskAction from "./Task/TaskAction";
import TaskList from "./Task/TaskList";
import Modal from "./Task/Modal";

const TaskSection = () => {
  const defaultTask = {
    id: 1,
    title: "Learn react",
    description: "I am learning react from reactive accilator",
    tags: ["web", "react", "js"],
    priority: "high",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const onSaveTask = ({ e, task, addMode }) => {
    e.preventDefault();
    if (addMode) {
      setTasks([...tasks, task]);
    } else {
      setTasks(
        tasks.map((item) => {
          if (item.id === task.id) {
            return task;
          }
          return item;
        })
      );
    }

    setShowModal(false);
  };

  const handleEdit = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    console.log(id);
    const remainTask = tasks.filter((task) => task.id !== id);
    console.log(remainTask);

    setTasks(remainTask);
  };

  const handleSearch = (text) => {
    if (text) {
      const filterTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(text.toLowerCase())
      );
      setTasks([...filterTasks]);
    } else {
      setTasks(tasks);
    }
  };

  return (
    <>
      <section className="mb-20" id="tasks">
        {showModal && (
          <Modal
            onSaveTask={onSaveTask}
            setTaskToUpdate={setTaskToUpdate}
            taskToUpdate={taskToUpdate}
            setShowModal={setShowModal}
          ></Modal>
        )}
        <div className="container">
          {/* Search Box */}
          <SearchBox handleSearch={handleSearch}></SearchBox>
          {/* Search Box Ends */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddTask={() => setShowModal(true)}></TaskAction>

            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              ></TaskList>
            ) : (
              <div>
                {" "}
                <h1>No task found</h1> <p>Please add one</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskSection;
