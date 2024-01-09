import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ToDo1 from "../ToDo1/ToDo1";
import Ongoing1 from "../Ongoing1/Ongoing1";
import Completed1 from "../Completed1/Completed";

const Task1 = () => {
    return (
        <div>
            <div className="">
                <Link to="/dashboard/addTask">
                    <button className="btn btn-outline text-xl border-[#8A4EC2] hover:bg-[#8A4EC2]"><FaPlusCircle /></button>
                </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ToDo1></ToDo1>
                <Ongoing1></Ongoing1>
                <Completed1></Completed1>
            </div>
        </div>
    );
};

export default Task1;