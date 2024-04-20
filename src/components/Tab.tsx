export default function Tab({ icon, children }) {
  return (
    <div className="w-[181px] h-20 flex flex-col justify-center items-center bg-[#DD363D]">
      <p>{icon}</p>
      <p className="text-xs mt-1">{children}</p>
    </div>
  );
}
