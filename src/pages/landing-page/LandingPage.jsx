import axios from "axios";
import { useDispatch } from "react-redux";
import Loading from "../../components/utilities/Loading";
import { useNavigate } from "react-router";
export default function LandingPage() {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate("/signup")
  }, 3000)

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <Loading />
    </div>
  );
}

