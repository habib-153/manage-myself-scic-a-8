/* eslint-disable react/prop-types */

const SectionTitle = ({heading}) => {
    return (
        <div className="text-center md:w-[30%] mx-auto">
            <p className="text-[#151515c1] border-[#0db3eae1] font-semibold border-b-2 text-[35px] ">{heading}</p>
        </div>
    );
};

export default SectionTitle;