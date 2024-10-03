import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal.tsx"; // ProjectModal 컴포넌트 불러오기

const Single: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="w-52 h-72 bg-gray-200 rounded-lg shadow-lg p-4 flex flex-col justify-between cursor-pointer"
        onClick={openModal}
      >
        <div className="flex justify-between items-center">
          <div className="text-sm font-bold">이름</div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
          </div>
        </div>
        <div className="w-full h-40 bg-white rounded-md mt-4 flex items-center justify-center">
          이미지
        </div>
        <div className="w-full text-center bg-gray-600 text-white font-bold py-2 rounded mt-4">
          상세설명
        </div>
      </div>

      {/* ProjectModal 사용 */}
      <ProjectModal images={images} show={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Single;
