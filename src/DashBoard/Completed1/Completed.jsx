// Completed.js
import{ useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import TaskItem from '../Taskitem/Taskitem';

const Completed1 = () => {
    const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data: completed = [], refetch } = useQuery({
    queryKey: ["completed", user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/completed/${user.email}`);
      return res.data;
    },
  });
  const handleDrop = async (taskId, newStatus) => {
    // Make a request to update the task status on the server
    const response = await fetch(`/task/updateStatus/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    });

    if (response.ok) {
      // Handle success, e.g., refetch tasks
      refetch();
    } else {
      // Handle error
    }
  };

  return (
    <div>
      <SectionTitle heading="Completed"></SectionTitle>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {completed.map((task, index) => (
          <TaskItem key={task._id} task={task} onDrop={handleDrop} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Completed1;
