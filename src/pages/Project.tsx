// src/pages/Project.tsx
import React, { useState } from "react";
import { ProjectInstance } from "../dataStructure/project/instance/projectInstance.ts";
import { ProjectDataStructure } from "../dataStructure/project/class/projectDataStructure.ts";
import ProjectDetail from "../components/organisms/project/detail.tsx";
import ProjectList from "../components/organisms/project/list.tsx";
import GitHubModal from "../components/organisms/Modal/GithubModal.tsx";

const Project: React.FC = () => {
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
      {/* 왼쪽 프로젝트 상세 정보 */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          currentImageIndex={currentImageIndex}
          onPrevImage={handlePrevImage}
          onNextImage={handleNextImage}
          onGitHubClick={handleGitHubClick}
        />
      )}

      {/* 오른쪽 프로젝트 목록 */}
      <ProjectList
        projects={ProjectInstance}
        onProjectSelect={handleProjectClick}
      />

      {/* GitHub 링크 모달 */}
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

export default Project;
