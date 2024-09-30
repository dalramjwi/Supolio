import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation(); // 현재 경로 가져오기

  // 프로젝트 페이지 또는 프로젝트 관련 하위 경로일 때 추가 탭 표시
  const isProjectRelatedPage =
    location.pathname.startsWith("/project") ||
    location.pathname.startsWith("/overview") ||
    location.pathname.startsWith("/single") ||
    location.pathname.startsWith("/team");

  return (
    <header className="relative flex justify-start pt-2.5">
      <div className="absolute top-[45%] w-full bg-tab-dark h-[55%] z-0 rounded-t-2xl"></div>
      <nav className="relative z-10 flex gap-0 pl-8">
        <NavLink
          to="/main"
          className={({ isActive }) =>
            isActive
              ? "bg-tab-green text-black font-bold px-10 py-4 rounded-t-2xl z-20 shadow-lg border border-black -ml-2"
              : "bg-tab-gray text-black px-10 py-4 rounded-t-2xl z-10 border border-black -ml-2"
          }
        >
          main
        </NavLink>
        <NavLink
          to="/info"
          className={({ isActive }) =>
            isActive
              ? "bg-tab-green text-black font-bold px-10 py-4 rounded-t-2xl z-20 shadow-lg border border-black -ml-2"
              : "bg-tab-gray text-black px-10 py-4 rounded-t-2xl z-10 border border-black -ml-2"
          }
        >
          info
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive
              ? "bg-tab-green text-black font-bold px-10 py-4 rounded-t-2xl z-20 shadow-lg border border-black -ml-2"
              : "bg-tab-gray text-black px-10 py-4 rounded-t-2xl z-10 border border-black -ml-2"
          }
        >
          project
        </NavLink>

        {/* 프로젝트 관련 경로일 때만 추가 탭을 표시 */}
        {isProjectRelatedPage && (
          <>
            <NavLink
              to="/overview"
              className={({ isActive }) =>
                isActive
                  ? "bg-tab-green text-black font-bold px-10 py-4 rounded-t-2xl z-20 shadow-lg border border-black -ml-2"
                  : "bg-tab-gray text-black px-10 py-4 rounded-t-2xl z-10 border border-black -ml-2"
              }
            >
              overview
            </NavLink>
            <NavLink
              to="/single"
              className={({ isActive }) =>
                isActive
                  ? "bg-tab-green text-black font-bold px-10 py-4 rounded-t-2xl z-20 shadow-lg border border-black -ml-2"
                  : "bg-tab-gray text-black px-10 py-4 rounded-t-2xl z-10 border border-black -ml-2"
              }
            >
              single
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive
                  ? "bg-tab-green text-black font-bold px-10 py-4 rounded-t-2xl z-20 shadow-lg border border-black -ml-2"
                  : "bg-tab-gray text-black px-10 py-4 rounded-t-2xl z-10 border border-black -ml-2"
              }
            >
              team
            </NavLink>
          </>
        )}
      </nav>
      <div className="absolute bottom-0 w-full border-t border-black" />
    </header>
  );
};

export default Header;
