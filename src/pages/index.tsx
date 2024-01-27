import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import { Task } from "@/components/Task";
import { TasksProvider } from "@/contexts";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>ToDo List | Gerenciamento de Tarefas</Head>

      <TasksProvider>
        <div className="flex flex-col">
          <Header />
          <Search />

          <div className="flex justify-center">
            <Task />
          </div>

          <Footer />
        </div>
      </TasksProvider>
    </>
  );
}
