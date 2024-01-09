import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import OngoingTaskItem from './OngoingTaskItem'; // Import the OngoingTaskItem component
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
//import { ItemTypes } from './ItemTypes'; // Import the ItemTypes constants

const Ongoing1 = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
  
    const { data: ongoing = [], refetch } = useQuery({
      queryKey: ["ongoing", user.email],
      queryFn: async () => {
        const res = await axiosPublic.get(`/ongoing/${user.email}`);
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
      <SectionTitle heading="Ongoing"></SectionTitle>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {ongoing.map((task, index) => (
          <OngoingTaskItem key={task._id} refetch={refetch} task={task} onDrop={handleDrop} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Ongoing1;