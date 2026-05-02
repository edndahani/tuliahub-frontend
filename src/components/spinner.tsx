const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="w-16 h-16 border-8 border-gray-300 border-t-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
