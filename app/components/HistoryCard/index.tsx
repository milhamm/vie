const HistoryCard = ({ name, role, status }) => {
  return (
    <div className="mt-5 flex justify-center">
      <div className="h-[140px] w-[420px] rounded-lg bg-[purple]">
        <div className="p-4">
          <h1 className="text-[white]">{role}</h1>
          <h1 className="font-black	text-3xl	text-[white]">{name}</h1>

          <div className="mt-5 flex justify-end">
            <div className="mr-4 h-[30px] w-[30px] bg-[grey] rounded-full"></div>
            <h1 className="text-base	font-medium	text-[white]">{status}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
