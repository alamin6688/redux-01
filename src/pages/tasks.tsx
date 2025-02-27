import { AddTaskModal } from "@/components/module/tasks/addTaskModal";
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
    <div className="w-full mx-auto">
      <div className="flex justify-between items-center mt-6">
        <h1 className="text-center text-3xl">Tasks</h1>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-4">
        {tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
