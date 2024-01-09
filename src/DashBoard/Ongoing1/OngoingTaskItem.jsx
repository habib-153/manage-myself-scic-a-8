/* eslint-disable react/prop-types */
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../Taskitem/ItemTypes'; // Create ItemTypes.js to define constants
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@mui/material';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const OngoingTaskItem = ({ task, onDrop, refetch, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { id: task._id, index, status: task.status },
  });
  const axiosPublic = useAxiosPublic();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/task/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Card key={index} data-aos="fade-up">
            <CardContent>
              <h3 className="text-xl font-bold mb-2">{task.title}</h3>
              <p className="text-sm text-[#111111d0]">{task.description}</p>
              <div className="flex justify-between">
                <p>
                  Deadline:{" "}
                  <span className="font-semibold">{task.deadline}</span>
                </p>
                <p>
                  Priority:{" "}
                  <span className="font-semibold">{task.priority}</span>
                </p>
              </div>
              <div className="flex justify-between">
                <Link to={`/dashboard/updateTask/${task._id}`}>
                  <button className="btn btn-ghost bg-[#8A4EC2] hover:bg-[#8A4EC2] text-white">
                    <FaEdit></FaEdit>
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(task)}
                  className="btn btn-ghost bg-red-500 hover:bg-red-600 text-white"
                >
                  <FaTrash></FaTrash>
                </button>
              </div>
            </CardContent>
          </Card>
    </div>
  );
};

export default OngoingTaskItem;