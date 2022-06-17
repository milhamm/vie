import React, { useEffect, useRef } from "react";
import cx from "classnames";
import { pickTextColorBasedOnBgColorAdvanced } from "lib/pickColor";
import NextLink from "next/link";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { TeamType } from "types";

type TeamCardProps = {
  data: TeamType;
};

const TeamCard = ({ data }: TeamCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { color_code, competition, id, max_member, roles_offered, team_name } =
    data;
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.style.backgroundColor = color_code;
      ref.current.style.color = pickTextColorBasedOnBgColorAdvanced(color_code);
    }
  }, []);

  return (
    <LinkBox as="div">
      <div className="flex justify-center shadow">
        <div
          ref={ref}
          className={cx(
            "h-[140px] w-[420px] rounded-lg bg-red-500 flex items-end"
          )}
        >
          <div className="p-4 w-full">
            <div className="flex w-full justify-between">
              <NextLink href={`/team/${id}`} passHref>
                <LinkOverlay>
                  <h1 className="text-2xl font-black">{team_name}</h1>
                </LinkOverlay>
              </NextLink>
              <p className="">{roles_offered}</p>
            </div>
            <div className="flex w-full justify-between">
              <h6 className="">0/{max_member} Members</h6>
              <p className="">{competition.name}</p>
            </div>
          </div>
        </div>
      </div>
    </LinkBox>
  );
};

export default TeamCard;
