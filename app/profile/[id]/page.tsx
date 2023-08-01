import React from "react";

import { getUserProjects } from "@/lib/actions";
import { UserProfile } from "@/common.types";
import ProfilePage from "@/components/ProfilePage";

interface ProfileProps {
  params: {
    id: string;
  };
}

const Profile = async ({ params }: ProfileProps) => {
  const res = (await getUserProjects(params.id, 100)) as { user: UserProfile };

  if (!res.user) {
    return <p className="no-result-text">Failed to fetch user info</p>;
  }

  return <ProfilePage user={res?.user} />;
};

export default Profile;
