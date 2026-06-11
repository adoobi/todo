import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";

import { db } from "../firebase";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "todo"),
      orderBy("order", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTasks(data);
    });

    return () => unsubscribe();
  }, []);

  const todo = tasks.filter((t) => t.status === "todo");
  const progress = tasks.filter((t) => t.status === "progress");
  const done = tasks.filter((t) => t.status === "done");

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="mt-2 bg-white border border-gray-200 rounded-xl overflow-hidden">

        <table className="border-collapse">
          <thead>
            <tr>
              <th className="p-4 border border-gray-300 w-60 text-sm">Todo</th>
              <th className="p-4 border border-gray-300 w-60 text-sm">On Progress</th>
              <th className="p-4 border border-gray-300 w-60 text-sm">Done</th>
            </tr>
          </thead>

          <tbody>
            <tr>

              {/* TODO */}
              <td className="p-1 border border-gray-300 align-top">
                <div className="flex flex-col gap-2">
                  {todo.map((task) => (
                    <div
                      key={task.id}
                      className="flex flex-col bg-blue-100 border border-blue-200 rounded-md p-3 shadow-sm hover:-translate-y-1 transition"
                    >
                      <h1 className="text-sm text-blue-700 font-semibold mb-2">{task.title}</h1>
                      <h2 className="text-xs text-blue-700">{task.subtitle}</h2>
                    </div>
                  ))}
                </div>
              </td>

              {/* PROGRESS */}
              <td className="p-1 border border-gray-300 align-top">
                <div className="flex flex-col gap-2">
                  {progress.map((task) => (
                    <div
                      key={task.id}
                      className="flex flex-col bg-yellow-50 border border-yellow-300 rounded-md p-3 shadow-sm hover:-translate-y-1 transition"
                    >
                      <h1 className="text-sm font-semibold text-yellow-700">
                        {task.title}
                      </h1>
                      <h2 className="text-xs text-yellow-600">
                        {task.subtitle}
                      </h2>
                    </div>
                  ))}
                </div>
              </td>

              {/* DONE */}
              <td className="p-1 border border-gray-300 align-top">
                <div className="flex flex-col gap-2">
                  {done.map((task) => (
                    <div
                      key={task.id}
                      className="flex flex-col bg-green-50 border border-green-300 rounded-md p-3 shadow-sm hover:-translate-y-1 transition"
                    >
                      <h1 className="text-sm font-semibold text-green-700">
                        {task.title}
                      </h1>
                      <h2 className="text-xs text-green-600">
                        {task.subtitle}
                      </h2>
                    </div>
                  ))}
                </div>
              </td>

            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}