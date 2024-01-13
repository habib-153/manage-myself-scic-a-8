/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { Card, CardContent } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
const TaskCard = ({ x, index }) => {
  return (
    <Draggable draggableId={x.title} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {provided.placeholder}
          <Card data-aos="fade-up">
            <CardContent>
              <h3 className="text-xl font-bold mb-2">{x.title}</h3>
              <p className="text-sm text-[#111111d0]">{x.description}</p>
              <div className="flex justify-between">
                <p>
                  Deadline: <span className="font-semibold">{x.deadline}</span>
                </p>
                <p>
                  Priority: <span className="font-semibold">{x.priority}</span>
                </p>
              </div>
              <div className="flex justify-between">
                <Link to={`/dashboard/updateTask/${x._id}`}>
                  <button className="btn btn-ghost bg-[#8A4EC2] hover:bg-[#8A4EC2] text-white">
                    <FaEdit></FaEdit>
                  </button>
                </Link>
                {/* <button
                  onClick={() => handleDelete(task)}
                  className="btn btn-ghost bg-red-500 hover:bg-red-600 text-white"
                >
                  <FaTrash></FaTrash>
                </button> */}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
