/* eslint-disable react/prop-types */
import { useDrag, useDrop } from 'react-dnd';

import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ItemTypes } from './ItemTypes';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Card, CardContent } from '@mui/material';
import Swal from 'sweetalert2';

const TaskItem = ({ task, onDrop, index }) => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: tasks = [], refetch} = useQuery({
        queryKey: ["tasks", user.email],
        queryFn: async () => {
          const res = await axiosPublic.get(`/tasks/${user.email}`);
          return res.data;
        },
      });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { id: task._id, index, status: task.status },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (droppedItem) => {
      if (droppedItem.id !== task._id) {
        onDrop(droppedItem.id, task.status); // Update status on drop
      }
    },
  });

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
    <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Card data-aos="fade-up">
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
                <p className='hidden'>{task.status}</p>
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
              {/* <div className="flex justify-between mt-3">
              <button
                  onClick={() => handleOngoing(task)}
                  className="btn btn-sm btn-outline border-[#8A4EC2] hover:bg-[#8A4EC2] "
                >
                  Mark As Ongoing
                </button>
                <button
                  onClick={() => handleCompleted(task)}
                  className="btn btn-sm btn-outline border-[#8A4EC2] hover:bg-[#8A4EC2] "
                >
                  Mark As Completed
                </button>
              </div> */}
            </CardContent>
          </Card>
    </div>
  );
};

export default TaskItem;