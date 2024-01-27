import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { PiPlusCircleBold } from "react-icons/pi";
import SearchFormValues from "./SearchFormValues";
import { useContext } from "react";
import { TasksContext } from "@/contexts";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import searchSchema from "./searchSchema";
import clsx from "clsx";


const Search = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
  });
  const { createdTask } = useContext(TasksContext);

  const handleFormSubmit = (data: SearchFormValues) => {
    console.log("Form submitted with data:", data);
    createdTask({
      id: uuidv4(),
      task: data.task,
      isChecked: false,
    });
    reset();
  };

  return (
    <div className="-mt-[1rem] flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:gap-2">
      <form
        className="flex w-full flex-col items-center justify-center md:w-[638px] md:items-start"
        id="newTaskForm"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          id="task"
          type="text"
          placeholder="Adicione uma nova tarefa"
          autoComplete="off"
          {...register("task")}
          className={clsx(
            "h-[54px] w-3/4 rounded-[8px] border-solid bg-gray-500 p-4 text-gray-100 placeholder-gray-300 md:w-[638px]",
            (errors.task && "border-danger outline-danger") ||
            "border-gray-700 outline-purple-dark",
          )}
        />

        {errors.task?.message && (
          <p className="ml-1 mt-1 text-xs font-medium text-danger">
            {errors.task?.message}
          </p>
        )}
      </form>

      <button
        className="flex h-[54px] w-3/4 items-center justify-center gap-2 rounded-[8px] bg-blue-dark p-4 text-gray-100 hover:bg-blue md:w-28"
        form="newTaskForm"
        type="submit"
      >
        Criar
        <PiPlusCircleBold size={20} />
      </button>
    </div>
  );
};

export default Search;
