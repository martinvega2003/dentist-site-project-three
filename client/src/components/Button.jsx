const Button = ({ label, onClick, type = "button", variant = "primary", className }) => {
    const baseClasses = "px-4 py-2 rounded-lg font-semibold transition duration-200" + className;
    const variants = {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]}`}
      >
        {label}
      </button>
    );
  };
  
  export default Button;