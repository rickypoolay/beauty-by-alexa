function ScheduleStep({ info, number }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="p-4 md:p-6 bg-black rounded-full overflow-hidden relative mb-auto">
        <h3 className="text-white absolute top-1/2 left-1/2 mt-[2px] -translate-x-1/2 -translate-y-1/2">
          {number}
        </h3>
      </div>
      {info}
    </div>
  );
}

export default ScheduleStep;
