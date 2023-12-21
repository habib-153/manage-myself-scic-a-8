import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddTasks = () => {
  const { register, handleSubmit } = useForm();
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {
    // console.log(data);
    const task = {
        title: data.title,
        email: user.email,
        description: data.description,
        deadline: data.deadline,
        priority: data.priority,
        status: "to-do"
    }
    console.log(task)
        const res = await axiosSecure.post('/tasks', task)
        console.log(res.data)
        if(res.data.insertedId){
            // show success popup
            Swal.fire({
                icon: "success",
                title: "New Task added",
                showConfirmButton: false,
                timer: 1500
              });
        }
  };

  return (
    <div>
      <Helmet>
        <title>Manage Myself | Add Tasks</title>
      </Helmet>
      <SectionTitle
        heading="Add A New Task"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Title</span>
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <input
                type="text"
                {...register("description", { required: true })}
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Priority</span>
                </label>
                <select defaultValue="default"
                  {...register("priority", {required: true})}
                  className="select select-bordered w-full"
                >
                  <option value="default" disabled>
                    Select a Priority
                  </option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Deadline</span>
              </label>
              <input
                type="date"
                {...register("deadline", { required: true })}
                placeholder="Deadline"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="w-full text-center mt-4">
            <button className="btn">Add To ToDo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTasks;
