//loader for api
export default function ApiModal(props) {
  return (
    <div className="fixed z-50 bg-black bg-opacity-80 flex justify-center items-center h-screen w-screen">
      <div
        class="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-white m0auto border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}
