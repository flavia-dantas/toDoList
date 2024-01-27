import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { PiPlusCircleBold } from "react-icons/pi";
import SearchFormValues from "./SearchFormValues";
import { useContext } from "react";
import { TasksContext } from "@/contexts";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import searchSchema from "./searchSchema";

interface SearchProps {
  onSubmit: (value: SearchFormValues) => void;
}

const Search: React.FC<SearchProps> = ({ onSubmit }) => {
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
    <div className="-mt-[1rem] flex justify-center gap-2">
      <form id="newTaskForm" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          id="task"
          className="h-[54px] w-[638px] rounded-[8px] border-solid border-gray-700 bg-gray-500 p-4 text-gray-100 placeholder-gray-300 outline-purple-dark"
          type="text"
          autoComplete="off"
          {...register("task")}
        />

        {errors.task?.message && (
          <p className="ml-1 mt-1 text-xs font-medium text-danger">
            {errors.task?.message}
          </p>
        )}
      </form>

      <button
        form="newTaskForm"
        className="flex h-[54px] w-28 items-center justify-center gap-2 rounded-[8px] bg-blue-dark p-4 text-gray-100 hover:bg-blue"
        type="submit"
      >
        Criar
        <PiPlusCircleBold size={20} />
      </button>
    </div>
  );
};

export default Search;
