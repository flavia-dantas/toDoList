import { useContext } from "react";
import { Empty } from "./Empty";
import { HeaderTask } from "./HeaderTask";
import { ItemTask } from "./ItemTask";
import { TasksContext } from "@/contexts";

const Task = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="mb-7 w-3/4 md:w-[736px]">
      <HeaderTask />

      {tasks?.length > 0 ? <ItemTask /> : <Empty />}
    </div>
  );
};

export default Task;
