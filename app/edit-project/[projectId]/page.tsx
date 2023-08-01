import { ProjectInterface } from "@/common.types";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

const EditProject = async ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/");

  const res = (await getProjectDetails(projectId)) as {
    project?: ProjectInterface;
  };

  return (
    <Modal>
      <h3 className="modal-head-text">Edit Project</h3>
      <ProjectForm type="edit" session={session} project={res?.project} />
    </Modal>
  );
};

export default EditProject;
