import React from "react";

const Project: React.FC = () => {
  return (
    <div className="p-10 text-left">
      <h2 className="text-4xl font-bold mb-6">프로젝트</h2>
      <p className="text-lg mb-6">프로젝트 개요 및 기간</p>

      <h3 className="text-3xl font-semibold mb-4">프로젝트 1</h3>
      <p className="text-lg mb-4">
        수록 개요: 소프트웨어 기획 및 설계의 과제를 통해 JavaScript를 기반으로
        블로그 형식의 CRUD 시스템을 제작.
      </p>
      <p className="text-lg mb-4">기간: 5.24 - 6.12</p>
      <p className="text-lg mb-6">스택: HTML5, CSS3, JavaScript</p>

      <h3 className="text-3xl font-semibold mb-4">프로젝트 2</h3>
      <p className="text-lg mb-4">
        급식왕 프로젝트: Node.js를 사용하여 급식 메뉴 선택 및 이벤트 관리 시스템
        제작.
      </p>
      <p className="text-lg mb-4">기간: 5.8 - 9.11</p>
      <p className="text-lg mb-4">스택: HTML5, CSS3, JavaScript, SQLite3</p>
    </div>
  );
};

export default Project;
