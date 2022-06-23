import React from "react";

import ProfileContainer from "components/ProfileContainer";
import TitleLayout from "components/Layouts/TitleLayout";
import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <TitleLayout title="Profile">
      <ProfileContainer token={null} editable={false} id={id} />
    </TitleLayout>
  );
};

export default UserProfile;
