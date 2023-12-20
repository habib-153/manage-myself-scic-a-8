import { useRef, useEffect } from "react";
import Typed from "typed.js";
import img from "../../assets/task-management-banner.jpg";
import './banner.css'

function Banner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["A Task Management System"],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-8 p-4">
      <div className="space-y-3">
        <h2 className="text-5xl font-bold ">Manage Myself</h2>
        <div>
          <span
            className="type-writer text-3xl font-semibold text-[#8A4EC2]"
            ref={el}
          ></span>
        </div>
        <p className="md:w-[80%] text-[#111111b2] text-sm">This is a solution for everyone. Although it is at the heart of Scrum and is typically used by software development teams, it can be successfully applied to other businesses, as well as used for improving personal productivity.</p>
        <button className="btn btn-outline hover:bg-[#8A4EC2] border-[#8A4EC2] text-[17px]">Let’s Explore</button>
      </div>
      <div>
        <div className="w-full">
          <img className="rounded-full img w-96 lg:w-[400px] mx-auto" src={img} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
