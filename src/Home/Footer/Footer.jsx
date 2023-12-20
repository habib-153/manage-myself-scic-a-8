import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a href="/about" className="link link-hover">About</a>
    <a href="/contact" className="link link-hover">Contact</a>
    <a href="/tasks" className="link link-hover">Tasks</a>
    <a href="/login" className="link link-hover">Login</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4 text-lg">
      <a href='https://www.facebook.com/h.R4hM4n.8'><FaFacebookF /></a>
      <a href="https://www.youtube.com"><FaYoutube /></a>
      <a href="https://www.twitter.com"><FaTwitter /></a>
    </div>
  </nav> 
  <aside className="flex flex-col md:flex-row justify-evenly w-full">
    <div>
    <p>Copyright © 2023 - All right reserved<span className="text-[#0db3eae1] font-semibold"></span></p>
    </div>
    <div className="text-left">
      <p className="font-semibold">Developer Info</p>
      <p>Habibur Rahman</p>
      <p>h.r.sihab@gmail.com</p>
      <p>+8801575632219</p>
    </div>
  </aside>
</footer>
    );
};

export default Footer;