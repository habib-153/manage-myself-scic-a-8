import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Card, CardContent } from "@mui/material";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { FaEdit, FaTrash } from "react-icons/fa";

const ToDo = () => {
  const { user } = useContext(AuthContext);
  const [toDo, setToDo] = useState([]);
  const axiosSecure = useAxiosSecure();
  const url = `/to-do?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => setToDo(res.data));
  }, [axiosSecure, url]);
  return (
    <div>
      <SectionTitle heading="To Do"></SectionTitle>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {toDo.map((task, index) => (
          <Card key={index} className="">
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
                <button className="btn btn-ghost bg-[#8A4EC2] hover:bg-[#8A4EC2] text-white">
                  <FaEdit></FaEdit>
                </button>
                <button className="btn btn-ghost bg-red-500 hover:bg-red-600 text-white">
                        <FaTrash></FaTrash>
                   </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
