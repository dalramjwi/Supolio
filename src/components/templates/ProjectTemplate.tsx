import React, { useState } from "react";
import ProjectList from "../organisms/project/ProjectList.tsx";
import ProjectDetail from "../organisms/project/ProjectDetail.tsx";
import { ProjectDataStructure } from "../../dataStructure/project/class/projectDataStructure.ts";
import GitHubModal from "../organisms/Modal/GithubModal.tsx";

interface ProjectTemplateProps {
  projectData: ProjectDataStructure[];
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ projectData }) => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectDataStructure | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGithubModal, setShowGithubModal] = useState(false);

  const handleProjectClick = (project: ProjectDataStructure) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    if (selectedProject && selectedProject.img.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.img.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject && selectedProject.img.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.img.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleGitHubClick = () => {
    if (
      Array.isArray(selectedProject?.link[0]) &&
      selectedProject?.link[0].length > 1
    ) {
      setShowGithubModal(true);
    } else {
      const githubLink = selectedProject?.link[0] as string;
      if (githubLink) window.open(githubLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleGithubVersionClick = (link: string) => {
    window.open(link, "_blank");
    setShowGithubModal(false);
  };

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
          onClose={() => setShowGithubModal(false)}
          onLinkClick={handleGithubVersionClick}
        />
      )}
    </div>
  );
};

export default ProjectTemplate;
