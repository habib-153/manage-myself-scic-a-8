import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ToDo from "../ToDo/ToDo";
import Ongoing from "../Ongoing/Ongoing";
import Completed from "../Completed/Completed";

const Tasks = () => {
    return (
        <div>
            <div className="">
                <Link to="/dashboard/addTask">
                    <button className="btn btn-outline text-xl border-[#8A4EC2] hover:bg-[#8A4EC2]"><FaPlusCircle /></button>
                </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ToDo></ToDo>
                <Ongoing></Ongoing>
                <Completed></Completed>
            </div>
        </div>
    );
};

export default Tasks;