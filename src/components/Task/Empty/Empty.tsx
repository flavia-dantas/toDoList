import Image from "next/image";
import IconClipboard from "../../../assets/clipboard.svg";

const Empty = () => (
  <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-t-[1px] border-solid border-t-gray-400 px-6 py-16">
    <Image src={IconClipboard} alt="icon clipboard" />

    <div>
      <p className="text-center text-base font-bold text-gray-300">
        Você ainda não tem tarefas cadastradas
      </p>

      <p className="text-center text-base text-gray-300">
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  </div>
);

export default Empty;
