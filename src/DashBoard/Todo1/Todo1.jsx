/* eslint-disable react/prop-types */
import { Card, Spinner, } from "flowbite-react";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../TaskCard/TaskCard";
const Todo1 = ({tasks,todo}) => {
    return (
        <Card className="my-3">
        <p className="text-center text-3xl font-semibold">Todo</p>
        {
            tasks.isLoading ? <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" ></Spinner>:
            tasks.isSuccess? todo.length==0? <p>There is no Data</p>:
            <Droppable droppableId="Todo" type="group">
                
            {
                (provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="grid grid-cols-1 gap-4">
                        {provided.placeholder}
                        {
                            todo.map((x,index)=>{
                                return(
                                    <TaskCard x={x} index={index} key={index}/>
                                )
                            })
                        }
                    </div>
                )
            }
        </Droppable>:
        <p>Failed to load data</p>
        }
        
    </Card>
    );
};

export default Todo1;