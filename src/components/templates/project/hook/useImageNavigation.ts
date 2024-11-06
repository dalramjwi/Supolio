import { useState } from "react";
import { ProjectDataStructure } from "../../../../dataStructure/project/class/projectDataStructure";

const useImageNavigation = (selectedProject: ProjectDataStructure | null) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return { currentImageIndex, handlePrevImage, handleNextImage };
};

export default useImageNavigation;
