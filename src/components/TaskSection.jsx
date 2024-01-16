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

  const onSaveTask = ({e,task}) => {
    e.preventDefault()
    setTasks([...tasks,task])
    setShowModal(false)
  };

  return (
    <>
      <section className="mb-20" id="tasks">
        {showModal && <Modal onSaveTask={onSaveTask}></Modal>}
        <div className="container">
          {/* Search Box */}
          <SearchBox></SearchBox>
          {/* Search Box Ends */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddTask={() => setShowModal(true)}></TaskAction>
            <TaskList tasks={tasks}></TaskList>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskSection;
