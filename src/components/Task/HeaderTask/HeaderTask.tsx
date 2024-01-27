import { TasksContext } from "@/contexts";
import { useContext } from "react";

const HeaderTask = () => {
  const { tasks } = useContext(TasksContext);

  const completedTasks = tasks.filter((task) => task.isChecked);

  return (
    <div className="mb-6 mt-5 flex flex-col gap-4 sm:flex-row sm:justify-between md:mt-12">
      <div className="flex gap-2">
        <p className="font-bold text-blue">Tarefas criadas</p>

        <span className="flex items-center rounded-[999px] bg-gray-400 px-2 py-[2px] text-sm font-bold text-gray-200">
          {tasks.length}
        </span>
      </div>

      <div className="flex gap-2">
        <p className="font-bold text-purple">Concluídas</p>

        <span className="flex items-center rounded-[999px] bg-gray-400 px-2 py-[2px] text-sm font-bold text-gray-200">
          {completedTasks.length} de {tasks.length}
        </span>
      </div>
    </div>
  );
};

export default HeaderTask;
