import { useState } from "react";
import { ProjectDataStructure } from "../../../../dataStructure/project/class/projectDataStructure";

const useGitHubModal = (selectedProject: ProjectDataStructure | null) => {
  const [showGithubModal, setShowGithubModal] = useState(false);

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

  const handleCloseModal = () => setShowGithubModal(false);

  return {
    showGithubModal,
    handleGitHubClick,
    handleGithubVersionClick,
    handleCloseModal,
  };
};

export default useGitHubModal;
