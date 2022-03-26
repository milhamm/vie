import React from "react";

type TeamCardProps = {
  teamName: string;
  currentMember: number;
  maxMember: number;
  event: string;
  roles: string;
};

const TeamCard = ({
  teamName,
  currentMember,
  maxMember,
  event,
  roles,
}: TeamCardProps) => {
  return (
    <div className="flex justify-center">
      <div className="h-[140px] w-[420px] rounded-lg	bg-[green] flex items-end">
        <div className="p-4 w-full">
          <div className="flex w-full justify-between">
            <h1 className="text-white text-2xl font-black">{teamName}</h1>
            <p className="text-white">{roles}</p>
          </div>
          <div className="flex w-full justify-between">
            <h6 className="text-white">
              {currentMember}/{maxMember} Members
            </h6>
            <p className="text-white">{event}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
