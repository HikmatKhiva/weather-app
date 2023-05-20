const CurrentLoading = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="relative overflow-hidden flex gap-4">
          <div className="w-24 lg:w-28  lg:h-28 h-24 border rounded-full animate-spin border-t-transparent" />
          {/* <h2 className="text-6xl font-semibold text-gray-500">0°</h2> */}
        </div>
      </div>
      <h3 className="text-center text-4xl font-semibold capitalize"></h3>
      <div className="flex justify-between my-5 text-center overflow-hidden">
        <div className="relative">
          <h3 className="text-xl text-zinc-500">Humidity</h3>
          <p>Loading</p>
        </div>
        <div className="relative">
          <h3 className="text-xl text-zinc-500">Wind speed</h3>
          <p>Loading</p>
        </div>
      </div>
    </div>
  );
};
export default CurrentLoading;
