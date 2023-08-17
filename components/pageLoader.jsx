export default function PageLoader() {
  return (
    <>
      <div className="fixed bg-black inset-0 z-50">
        <div className="absolute h-12 w-12 -mt-6 -ml-6 -indent-96 text-xs mr-0 mb-0 rounded-full border-2 border-solid border-l-white border-r-white/50 border-y-white/50 left-2/4 top-2/4 animate-spin z-50">
          Loading...
        </div>
      </div>
    </>
  );
}
