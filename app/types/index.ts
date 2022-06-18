export type CompetitionType = {
  category: string;
  description: string;
  guidebook: string | null;
  id: string;
  name: string;
  organizer: string;
  createdAt: string;
  updated_at: string;
};

export type UserType = {
  academic_year: string;
  email: string;
  id: string;
  image: null | string;
  major: string;
  name: string;
};

export type JoinStatusType = 0 | 1 | 2;

export type TeamType = {
  color_code: string;
  competition: CompetitionType;
  competition_id: string;
  id: string;
  leader_id: string | null;
  max_member: number;
  roles_offered: string;
  team_name: string;
  created_at: string;
  updated_at: string;
  leader: UserType | null;
  TeamMember: Array<{
    status: JoinStatusType;
    user: Pick<UserType, "id" | "name" | "image">;
  }>;
  join_status: JoinStatusType | undefined;
};
