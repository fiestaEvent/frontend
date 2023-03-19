import { useNavigate } from "react-router-dom";
export default function Preloader() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/home");
    }, 2000);
  return (
    <div className="w-full h-screen bg-black z-50 absolute flex justify-center items-center">
      <img
        src="/logo_clean.png"
        className="h-96 animate-fadein animate-grow"
        alt="logo"
      />
    </div>
  );
}
