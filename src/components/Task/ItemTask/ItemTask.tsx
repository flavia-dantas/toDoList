import { TasksContext } from "@/contexts";
import { useContext } from "react";
import { PiTrash, PiCircle } from "react-icons/pi";
import CheckCircleIcon from "../CheckCircle/CheckCircle";
import clsx from "clsx";

const ItemTask = () => {
  const { tasks, updateTask, deleteTask } = useContext(TasksContext);

  const handleCheckboxChange = (taskId: string) => {
    updateTask(taskId);
  };

  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="mb-3 flex gap-3 rounded-[8px] border border-solid border-gray-400 bg-gray-500 p-4 md:w-[736px]"
        >
          <label className="relative" htmlFor={`checkbox-${task.id}`}>
            <input
              id={`checkbox-${task.id}`}
              type="checkbox"
              checked={task.isChecked}
              className="absolute cursor-pointer opacity-0"
              onChange={() => handleCheckboxChange(task.id)}
            />

            <div>
              {task.isChecked ? (
                <CheckCircleIcon size={24} color="#F2F2F2" fill="#5E60CE" />
              ) : (
                <PiCircle
                  size={24}
                  className="text-blue hover:text-blue-dark"
                />
              )}
            </div>
          </label>

          <p
            className={clsx(
              "w-[632px] break-all font-normal text-gray-100",
              task.isChecked && "text-gray-300 line-through",
            )}
          >
            {task.task}
          </p>

          <button onClick={() => deleteTask(task.id)}>
            <PiTrash className="text-gray-300 hover:text-danger" size={24} />
          </button>
        </div>
      ))}
    </>
  );
};

export default ItemTask;
