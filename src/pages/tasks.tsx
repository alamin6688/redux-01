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
  return <div>This is task component</div>;
};

export default Tasks;