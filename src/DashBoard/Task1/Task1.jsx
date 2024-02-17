import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { DragDropContext } from "react-beautiful-dnd";
import Todo1 from "../Todo1/Todo1";
import Completed1 from "../Completed1/Completed1";
import Ongoing1 from "../Ongoing1/Ongoing1";
const Task1 = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [todo, setTodo] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  const tasks = useQuery(
    {
        queryKey: ['tasks'],
        queryFn: async () => {
            let res = await axiosPublic.get(`/tasks/${user.email}`)
            
            setTodo(res.data.todo)
            setOngoing(res.data.ongoing)
            setCompleted(res.data.completed)
            return res.data
        },
        enabled:!!user?.email
    }
)


async function DragDone(results) {
    console.log(results);
    const {source,destination,type,draggableId}=results
    if(!destination) return;
    if (source.droppableId===destination.droppableId && source.index===destination.index) {
        return
    }
    if(type==="group"){
        let newTodo=[...todo]
        const [removeTodo]=newTodo.splice(source.index,1)
        newTodo.splice(destination.index,0,removeTodo)
        console.log(newTodo);
        return setTodo(newTodo)
    }
}
  return (
    <div>
    <DragDropContext onDragEnd={DragDone}>
        <div className="grid grid-cols-3 gap-4">
            <div>
                {/* <CreateTask type="Pending" tasks={tasks} /> */}
                <Todo1 tasks={tasks} todo={todo}  />
            </div>
            <div>
                {/* <CreateTask type="Ongoing" tasks={tasks} /> */}
                <Ongoing1 tasks={tasks} ongoing={ongoing}/>
            </div>

            <div>
                {/* <CreateTask type="Completed"  tasks={tasks}/> */}
                <Completed1 tasks={tasks}  completed={completed}/>
            </div>
        </div>
    </DragDropContext>
</div>
  )
};

export default Task1;
