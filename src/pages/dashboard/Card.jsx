const Card = ({ team }) => {
  return (
    <div
      style={{ backgroundColor: team.secondaryColor }}
      className={`flex flex-col gap-y-4 rounded-3xl bg-[#E6F2FF] px-3.5 py-4 pb-6`}
    >
      <div
        style={{ backgroundColor: team.primaryColor }}
        className={`w-full p-3  pb-4 text-lg rounded-xl`}
      >
        {team.description}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-lg font-medium capitalize">{team.team} Team</p>
          <p className="text-sm flex items-center">
            <span>1 Department</span>
            <span className="font-bold mt-[-16px] text-3xl mx-2">.</span>
            <span>1 Unit</span>
          </p>
        </div>
        <img
          src={team.profile}
          alt="team profile"
          className="rounded-[50%] w-10 h-10"
        />
      </div>
    </div>
  );
};

export default Card;
