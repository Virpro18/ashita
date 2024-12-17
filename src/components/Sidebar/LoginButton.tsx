interface LoginButtonProps {
    name: string | boolean; // Izinkan string atau boolean
  }
  
  const LoginButton: React.FC<LoginButtonProps> = ({ name }) =>
  name ? (
    name
  ) : (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-200"
      onClick={() => {
        window.location.href = "/api/auth/login";
      }}
    >
      Login
    </button>
  );

  export default LoginButton
