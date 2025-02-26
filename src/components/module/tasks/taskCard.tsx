import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { AiFillDelete } from "react-icons/ai";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  return (
    <div className="border mt-8 px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h3>{task.title}</h3>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <AiFillDelete />
          </Button>
          <Checkbox />
        </div>
      </div>
      <div>
        <p className="text-gray-500">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
