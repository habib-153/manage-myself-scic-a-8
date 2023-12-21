/* eslint-disable react/prop-types */

const SectionTitle = ({heading}) => {
    return (
        <div className="text-center md:w-[40%] mx-auto">
            <p className="text-[#151515c1] border-[#8A4EC2] font-semibold border-b-2 text-[30px] ">{heading}</p>
        </div>
    );
};

export default SectionTitle;