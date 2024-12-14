const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
    />
  );
};

export default Input; 