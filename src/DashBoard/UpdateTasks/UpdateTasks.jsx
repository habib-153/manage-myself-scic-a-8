import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UpdateTasks = () => {
    const {title, email, description, deadline, priority, status, _id} = useLoaderData()
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic()
    const onSubmit = async (data) => {
        // console.log(data);
        const task = {
            title: data.title,
            email: email,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority,
            status: status
        }
        const menuRes = await axiosPublic.patch(`/task/${_id}`, task)
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // show success popup
                Swal.fire({
                    icon: "success",
                    title: "Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
    }
    return (
        <div>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Title</span>
              </label>
              <input
                type="text" defaultValue={title}
                {...register("title", { required: true })}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <input
                type="text" defaultValue={description}
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
                <select defaultValue={priority}
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
                type="date" defaultValue={deadline}
                {...register("deadline", { required: true })}
                placeholder="Deadline"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="w-full text-center mt-4">
            <button className="btn">Update</button>
          </div>
        </form>
      </div>
        </div>
    );
};

export default UpdateTasks;