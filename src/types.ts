export interface ITask {
  id: string;
  title: string;
  description: string;
  duedate: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
}

export interface IUser {
  id: string;
  name: string;
}
