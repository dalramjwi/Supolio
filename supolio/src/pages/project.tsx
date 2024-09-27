// pages/project.tsx
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Project: React.FC = () => {
  return (
    <div>
      <p>### single</p>
      <p>
        제목 : 수록 개요 (왜시작) : / 소개 교육 과정 수료 중, 소프트웨어 기획 및
        설계의 과제가 주어졌다. 이에, javascript를 잘 활용할 수 있는 기본적
        매체에 대해 고민해보았을 때 블로그와 같은 형태를 제작해보기로 했다.
      </p>
      <p>
        어떠한 언어를 사용할 때 내가 이 언어의 기초를 배웠는지 확인할 방안은
        CRUD를 잘 할 수 있는가의 척도라 생각된다.
      </p>
      <p>
        이에, CRUD의 기본형이 잘 드러난 블로그의 형태인 개인 기록 사이트를
        제작하게 되었다.
      </p>
      <p>
        기간 5.24 - 6.12 (1차 : 5.24 - 5.29) (2차 : 5.29 - 6.5) (3차 : 6.6 -
        6.12)
      </p>
      <p>기능 페이지 작성, 삭제, 수정, 조회 페이지 검색 (제목, 본문)</p>
      <p>스택 (왜선택) html5, css3, javascript</p>
      <p>
        문제 해결 (어떻게, 왜) 코드의 버전이 3가지. 1. 초기 코드 버전 모듈화라는
        개념을 막 사용하기 시작했을 때. 1. html SSR 2. 서버 코드 모두 모듈화,
        주석 사용
      </p>
      <p>
        완성물 후기 오늘 정말로 완성하며 느낀 코딩에 있어서 중요한 것은 집중력
        뿐만 아니라 코드를 계속 볼 수 있는 인내심이라는 것을 알게 되었다.
      </p>
      <p>관련 기록 notion 빼서 보기</p>

      <p>--- 제목 : 내 꿈은 급식왕</p>
      <p>
        개요 (왜시작) : / 소개 node.js를 배우게 되며, 서버 차원에서 여러
        페이지를 보여줄 수 있다는 것과, SSR 방식으로 웹페이지에서 전송한 요청에
        따라 다양하게 html을 조합해서 이벤트 페이지를 보여주는 식으로 진행하면
        재밌겠다는 생각을 했다.
      </p>
      <p>
        급식 식단을 짜는 방향성이 다양하듯, 다양한 메뉴 선택지와 그에 따른
        이벤트 진행의 무언가를 만들면 재밌겠다는 생각에 내꿈은 급식왕을 구상하기
        시작했다.
      </p>
      <p>기간 5.8 - 9.11 (1차 : 5.8 - 5.21) (2차 : 6.10 - 9.11)</p>
      <p>
        기능 페이지에서 선택할 수 있는 메뉴에 따라 변경되는 이벤트 및 랜덤
        이벤트에 따라 변동되는 값에 따른 엔딩 포인트 분기점. 간단한 게임 형식
      </p>
      <p>스택 (왜선택) html5, css3, javascript, sqlite3</p>
      <p>
        문제 해결 (어떻게, 왜) 급식왕 코드를 작성하다, 소프트웨어 기획 및
        설계(IA & Wireframe) 정규 평가에서 코드를 발전시키며 코드 범주가
        넓어지게 되었다.{" "}
      </p>
      <p>
        완성물 급식왕 마무리를 진행했다. css의 추가 수정과, 로직 부분에 있어
        완성을 진행했다.
      </p>
      <p>관련 기록 notion 빼서 보기</p>

      <p>--- 제목 : 커스텀 위젯</p>
      <p>
        개요 (왜시작) : / 소개 react를 배우게 되며, react를 사용한 어떤
        프로젝트를 만들어보고 싶었다. 이에, 리액트 상태 관리 개념을 적극적으로
        활용할 수 있는 나를 표현할 수 있는 위젯을 만들어보자는 생각이 떠올랐다.
      </p>
      <p>
        위젯들이 존재해서, 내가 커스텀 할 수 있는 형태면 재밌겠다. 공통 색깔
        (테마 변경) ,개별 div 색깔 (back, color) 변경, input을 이용한 text 변경
      </p>
      <p>기간 7.17 - 9.18</p>
      <p>
        기능 입력한 값에 따라 변경되는 위젯, 위젯 위치 변경 가능 (드래그 앤
        드롭)
      </p>
      <p>스택 (왜선택) typescript, react, tailwindcss</p>
      <p>
        문제 해결 (어떻게, 왜) 완성물 custom widgets를 완성했다. 메인 페이지의
        모달, grid 동적 제작, 입력된 데이터 전달, 드래그 앤 드롭 구현, 각 item의
        모달, grid col 값 동적 수정 및 css를 진행했다.
      </p>
      <p>관련 기록 notion 빼서 보기</p>
    </div>
  );
};

export default Project;
