import TaskCard from "@/components/module/tasks/taskCard";
import {
  selectFilter,
  selectTasks,
} from "@/redux/features/counter/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filters = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filters);
  return (
    <div className="w-full">
      <h1 className="text-center mt-6 text-3xl">Tasks</h1>
      <div className="space-y-5 mt-4">
        {
          tasks.map((task) => {
            return <TaskCard task={task}/>;
          })
        }
      </div>
    </div>
  );
};

export default Tasks;
