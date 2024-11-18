import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Google_login = () => {
  const navigate = useNavigate();
  const { GoogleLogin } = useAuth();

  const handleGoogleLogin = () => {
    GoogleLogin().then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div>
        <button
          onClick={handleGoogleLogin}
          className="btn bg-white hover:bg-gray-300 text-black hover:text-black btn-outline w-full"
        >
          <FcGoogle size={24} /> Google
        </button>
      </div>
    </div>
  );
};

export default Google_login;
