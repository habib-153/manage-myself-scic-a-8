import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tasks = () => {
    return (
        <div>
            <div className="">
                <Link to="/dashboard/addTask">
                    <button className="btn btn-outline text-xl border-[#8A4EC2] hover:bg-[#8A4EC2]"><FaPlusCircle /></button>
                </Link>
            </div>
        </div>
    );
};

export default Tasks;