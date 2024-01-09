// ToDo.js
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import TaskItem from '../Taskitem/Taskitem';

const ToDo1 = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
  
    const { data: toDo = [], refetch } = useQuery({
      queryKey: ["toDo", user.email],
      queryFn: async () => {
        const res = await axiosPublic.get(`/to-do/${user.email}`);
        return res.data;
      },
    });

  const handleDrop = async (taskId, newStatus) => {
    // Make a request to update the task status on the server
    // You may want to use a state management library (e.g., Redux) or a context to handle this
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
      <SectionTitle heading="To Do"></SectionTitle>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {toDo.map((task, index) => (
          <TaskItem key={task._id} task={task} onDrop={handleDrop} index={index} />
        
        ))}
      </div>
    </div>
  );
};

export default ToDo1;
