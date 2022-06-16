import React, { useEffect, useRef } from "react";
import cx from "classnames";
import { pickTextColorBasedOnBgColorAdvanced } from "utils/pickColor";

type TeamCardProps = {
  teamName: string;
  currentMember: number;
  maxMember: number;
  event: string;
  roles: string;
  color_code: string;
};

const TeamCard = ({
  color_code,
  teamName,
  currentMember,
  maxMember,
  event,
  roles,
}: TeamCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.style.backgroundColor = color_code;
      ref.current.style.color = pickTextColorBasedOnBgColorAdvanced(color_code);
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div
        ref={ref}
        className={cx(
          "h-[140px] w-[420px] rounded-lg bg-red-500 flex items-end"
        )}
      >
        <div className="p-4 w-full">
          <div className="flex w-full justify-between">
            <h1 className="text-2xl font-black">{teamName}</h1>
            <p className="">{roles}</p>
          </div>
          <div className="flex w-full justify-between">
            <h6 className="">
              {currentMember}/{maxMember} Members
            </h6>
            <p className="">{event}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
