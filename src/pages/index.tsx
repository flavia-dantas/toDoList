import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import { Task } from "@/components/Task";
import { TasksContext, TasksProvider } from "@/contexts";
import Head from "next/head";
import { useContext } from "react";

export default function Home() {
  const { createdTask } = useContext(TasksContext);

  return (
    <>
      <Head>ToDo List | Gerenciamento de Tarefas</Head>

      <TasksProvider>
        <div className="flex flex-col">
          <Header />
          <Search onSubmit={() => createdTask} />

          <div className="flex justify-center">
            <Task />
          </div>

          <Footer />
        </div>
      </TasksProvider>
    </>
  );
}
