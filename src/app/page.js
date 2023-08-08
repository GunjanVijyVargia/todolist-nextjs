import Image from "next/image";
import TodoPage from "./components/todoPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <TodoPage />
      <ToastContainer />
    </main>
  );
}
