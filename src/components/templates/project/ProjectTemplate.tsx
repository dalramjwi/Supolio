import React from "react";
import { ProjectDataStructure } from "../../../dataStructure/project/class/projectDataStructure.ts";
import useSelectedProject from "./hook/useSelectedProject.ts";
import useImageNavigation from "./hook/useImageNavigation.ts";
import useGitHubModal from "../../organisms/Modal/hook/useGithubModal.tsx";
import GitHubModal from "../../organisms/Modal/GithubModal.tsx";
import ProjectList from "../../organisms/project/ProjectList.tsx";
import ProjectDetail from "../../organisms/project/ProjectDetail.tsx";

interface ProjectTemplateProps {
  projectData: ProjectDataStructure[];
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ projectData }) => {
  const { selectedProject, handleProjectClick } = useSelectedProject();
  const { currentImageIndex, handlePrevImage, handleNextImage } =
    useImageNavigation(selectedProject);
  const {
    showGithubModal,
    handleGitHubClick,
    handleGithubVersionClick,
    handleCloseModal,
  } = useGitHubModal(selectedProject);

  return (
    <div className="flex min-h-full bg-gray-100 p-6">
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          currentImageIndex={currentImageIndex}
          onPrevImage={handlePrevImage}
          onNextImage={handleNextImage}
          onGitHubClick={handleGitHubClick}
        />
      )}
      <ProjectList
        projects={projectData}
        onProjectSelect={handleProjectClick}
      />
      {selectedProject && Array.isArray(selectedProject.link[0]) && (
        <GitHubModal
          show={showGithubModal}
          links={selectedProject.link[0]}
          onClose={handleCloseModal}
          onLinkClick={handleGithubVersionClick}
        />
      )}
    </div>
  );
};

export default ProjectTemplate;
