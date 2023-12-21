import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import UsersAndBenefits from "../UsersAndBenefits/UsersAndBenefits";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <UsersAndBenefits></UsersAndBenefits>
            <Footer></Footer>
        </div>
    );
};

export default Home;