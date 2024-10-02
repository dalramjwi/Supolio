export const projectData = {
  single: {
    수록: {
      title: "수록",
      description:
        "소프트웨어 기획 및 설계 과제로 개인 기록 사이트(블로그)를 제작하였다. JavaScript의 기초 학습을 확인하기 위해 CRUD 기능을 중심으로 한 사이트를 제작하며, 프로젝트는 세 차례의 리팩토링을 거쳐 발전해왔다.",
      stack: ["html5", "css3", "javascript", "node.js"],
      period: "5.24 - 6.12",
      subPeriods: {
        "1차": "5.24 - 5.29",
        "2차": "5.29 - 6.5",
        "3차": "6.6 - 6.12",
      },
      content: "게시글 작성, 수정, 삭제, 조회, 검색",
      details: [
        {
          version: "첫 번째 버전",
          description:
            "기본적인 HTTP 모듈을 사용해 서버를 구축하였고, 게시글 조회 기능을 포함한 블로그 사이트를 구현하였다. 그러나 이 과정에서 서버에 생성된 HTML은 최초 요청 시의 게시글만을 보여주었고, 새로운 게시글 추가 시 실시간 업데이트가 되지 않는 문제를 겪었다.",
        },
        {
          version: "두 번째 버전",
          description:
            "서버 사이드 렌더링(SSR) 개념을 적용하여 이러한 문제를 해결하였다. HTTP 모듈을 통해 서버에서 동적으로 HTML을 생성 및 전달하는 방식을 채택하여, 새로운 게시글 작성 및 조회 시 동적으로 업데이트된 내용을 보여줄 수 있도록 하였다.",
        },
        {
          version: "세 번째 버전",
          description:
            "코드를 모듈 단위로 분리하여 리팩토링을 진행하였다. 이 과정에서 각 기능을 독립된 모듈로 쪼개고, 이를 통해 유지보수성을 크게 향상시켰다. 또한, 코드 내 주석 작업을 통해 코드 설명을 강화하며, 코드의 가독성을 높이고 협업 환경에서의 코드 공유와 이해도를 높이는 것을 목표로 하였다.",
        },
      ],
      data: [
        "https://prod-files-secure.s3.us-west-2.amazonaws.com/e5acc962-4ecc-4f29-9dc7-6348dfa00542/346c0833-cb8f-4651-910b-d33bb08e2d67/%EC%88%98%EB%A1%9D_version1_main.png",
        "https://prod-files-secure.s3.us-west-2.amazonaws.com/e5acc962-4ecc-4f29-9dc7-6348dfa00542/da5596b2-f485-499c-83a3-fb9093c1d8a4/%EC%88%98%EB%A1%9D_version1_write.png",
        "https://prod-files-secure.s3.us-west-2.amazonaws.com/e5acc962-4ecc-4f29-9dc7-6348dfa00542/e4f7045e-6fa6-4b96-af67-5dbde7be5c25/%EC%88%98%EB%A1%9D_version2_main.png",
        "https://prod-files-secure.s3.us-west-2.amazonaws.com/e5acc962-4ecc-4f29-9dc7-6348dfa00542/48ac7921-8b1b-4546-9cde-e237b2574d3f/%EC%88%98%EB%A1%9D_version2_search.png",
        "https://prod-files-secure.s3.us-west-2.amazonaws.com/e5acc962-4ecc-4f29-9dc7-6348dfa00542/9095385d-be24-4336-9a89-f29194d041eb/%EC%88%98%EB%A1%9D_version3_main.png",
        "https://prod-files-secure.s3.us-west-2.amazonaws.com/e5acc962-4ecc-4f29-9dc7-6348dfa00542/038b7ef6-7b90-4537-bb7d-0735a8bcc82e/%EC%88%98%EB%A1%9D_version3_write.png",
        "https://prod-files-secure.s3.us-west-2.amazonaws.com/e5acc962-4ecc-4f29-9dc7-6348dfa00542/93af16bf-b612-4533-8dc7-403a7084ea58/%EC%88%98%EB%A1%9D_version3_serach.png",
        "https://prod-files-secure.s3.us-west-2.amazonaws.com/e5acc962-4ecc-4f29-9dc7-6348dfa00542/77cc5af2-707f-4273-aaff-1c21547abefa/%EC%88%98%EB%A1%9D_version1_arkit.png",
        "https://prod-files-secure.s3.us-west-2.amazonaws.com/e5acc962-4ecc-4f29-9dc7-6348dfa00542/2722a698-3407-46ed-861d-245d4282758c/%EC%88%98%EB%A1%9D_version2_arkit.png",
        "https://prod-files-secure.s3.us-west-2.amazonaws.com/e5acc962-4ecc-4f29-9dc7-6348dfa00542/d3a4f445-8df6-41d5-925c-29d25756d8fb/%EC%88%98%EB%A1%9D_version3_arkit.png",
      ],
      review:
        "오늘 정말로 완성하며 느낀 코딩에 있어서 중요한 것은 집중력 뿐만 아니라 코드를 계속 볼 수 있는 인내심이라는 것을 알게 되었다.",
      githubLink: [
        "https://github.com/dalramjwi/dalramjwi_Study_node.js/tree/main/subject_5",
        "https://github.com/dalramjwi/record-subject_5_trans",
        "https://github.com/dalramjwi/RECORD-trans",
      ],
    },
    내꿈은급식왕: {
      title: "내 꿈은 급식왕",
      description:
        "Node.js를 배우면서 서버에서 여러 페이지를 처리하는 방식을 익혔다. 특히, SSR(Server-Side Rendering) 방식을 통해 웹페이지 요청에 따라 HTML을 동적으로 조합해 다양한 이벤트 페이지를 보여주는 아이디어가 흥미로웠다.",
      stack: ["html5", "css3", "javascript", "node.js", "sqlite3"],
      period: "5.8 - 9.11",
      subPeriods: {
        "1차": "5.8 - 5.21",
        "2차": "6.10 - 9.11",
      },
      content:
        "사용자가 선택한 메뉴에 따라 변경되는 이벤트 및 랜덤 이벤트에 따라 변동되는 값에 따른 엔딩 포인트 분기점을 제공하는 간단한 게임 형식의 웹사이트",
      details:
        "초기에는 설계 없이 코드를 작성하여 코드의 유지보수성과 확장성의 중요성을 절실히 깨달았다. 이를 해결하기 위해 코드 리뷰 페이퍼를 제작하여 구조를 정리하고, 이후 구체적인 설계를 바탕으로 코드를 리팩토링하는 과정을 거쳤다.",
      data: [],
      review:
        "CSS의 추가 수정과, 로직 부분에 있어 완성을 진행했다. 설계가 매우 중요하다는 것을 깨닫게 되었다.",
      githubLink: [
        "https://github.com/dalramjwi/SchoolMealKing",
        "https://github.com/dalramjwi/NEW-schoolMealKING",
      ],
    },
    CustomWidgets: {
      title: "Custom Widgets",
      description:
        "React를 배우게 되면서, React를 활용한 프로젝트를 만들어보고 싶었다. 이에 리액트 상태 관리 개념을 적극적으로 활용할 수 있는 위젯을 만들어보자는 생각이 떠올랐다.",
      stack: ["typescript", "react", "tailwindcss"],
      period: "7.17 - 9.18",
      content:
        "입력한 값에 따라 변경되는 위젯, 위젯 위치 변경 기능 (드래그 앤 드롭), 위젯 숫자 조정 기능",
      details:
        "드래그 앤 드롭 기능은 기존 라이브러리를 사용하지 않고 필요한 기능들을 직접 정의하여 로직을 구현했다.",
      data: [],
      review:
        "custom widgets 프로젝트를 완성하였으며, 짧은 기간 동안 집중력을 발휘해 만족스러운 결과를 낼 수 있었다.",
      githubLink: ["https://github.com/dalramjwi/CustomWidgets"],
    },
    도타임: {
      title: "도타임",
      description:
        "독서를 좋아하는 만큼 다양한 종류의 독서에 관심이 있었다. 웹소설과 같은 전자책을 쉽게 제작하고 조회할 수 있는 플랫폼을 제작하려는 프로젝트를 시작하였다.",
      stack: "미정",
      period: "9.19 - 진행중",
      content: "전자책 제작 기능 및 조회 기능 제공",
      details: "",
      data: [],
      review: "",
      githubLink: "",
    },
    수폴리오: {
      title: "수폴리오",
      description:
        "이력서를 작성하고 취업 준비를 하면서, 개인 포트폴리오를 사이트로 배포하는 것이 AWS 연습과 나를 소개하는 데 큰 도움이 될 것 같았다.",
      stack: ["react"],
      period: "9.20 - 현재",
      content: [
        "개인 프로젝트 및 팀 프로젝트 소개",
        "기술 스택 및 경험 상세화",
        "연락처 및 소셜 미디어 링크 제공",
      ],
      details: "",
      data: [],
      review: "",
      githubLink: ["https://github.com/dalramjwi/Supolio"],
    },
  },
  team: {
    수상한자판기: {
      title: "수상한 자판기",
      description:
        "교육 과정 수료 중 데이터베이스 기능 모델을 포함한 자판기 웹 어플리케이션을 구현해야 했다. 도메인과 관련해 “비현실적인” 물건을 판매하는 자판기 프로젝트.",
      stack: ["html", "css", "javascript", "sqlite3"],
      period: "6.20 - 7.15",
      content: [
        "관리자 페이지와 사용자 페이지 구분",
        "제품 정보 조회",
        "제품 구매, 재화 획득",
      ],
      details: [
        "DB 동기 처리 문제 해결",
        "DB 외래키 문제 해결",
        "회원가입 관련 기능 구현",
      ],
      review:
        "팀 프로젝트를 진행하면서 설계적 측면에서의 협업의 중요성을 깨달았다.",
      githubLink: [
        "https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectA-3team",
      ],
    },
    DelaN: {
      title: "DelaN",
      description:
        "ERP 시스템을 주제로 하여 인적 자원 관리와 관련된 프로젝트를 진행했다.",
      stack: [
        "TypeScript",
        "Vanilla Extract",
        "MongoDB",
        "PostgreSQL",
        "Nest",
        "Next",
      ],
      period: "7.16 - 8.14 (리팩토링: 8.22 - 진행중)",
      content: [
        "관리자: 업무 할당, 근태 확인, 회원가입 승인, 권한 및 월급 설정",
        "사용자: 프로필 관리, 프로젝트 칸반 보드, 캘린더",
      ],
      details: ["ERD 구조 반영 및 문서 제작"],
      data: [],
      review: "",
      githubLink: "",
    },
    갈라테이아: {
      title: "갈라테이아",
      description:
        "생성형 프롬프트와 관련된 프로젝트로, 개인이 학습시킬 수 있는 AI 템플릿을 제작하여 제공하는 플랫폼을 목표로 하고 있다.",
      stack: ["Django", "Next", "PostgreSQL", "WebSocket"],
      period: "7.24 - 진행중",
      content: ["회원가입, 로그인, 캐릭터 생성 및 공유, 카카오톡 챗봇 연동"],
      details: "",
      review: "",
      githubLink: "",
    },
    호랑이: {
      title: "호랑이",
      description:
        "머신 러닝을 활용한 프로젝트로, 데이터 분석 및 예측 모델을 개발하는 데 중점을 두고 있다.",
      stack: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy"],
      period: "기간 기입 필요",
      content: [
        "데이터 전처리",
        "모델 학습 및 평가",
        "예측 결과 시각화",
        "사용자 인터페이스 구현",
      ],
      details: [
        "데이터 전처리 및 다양한 머신 러닝 알고리즘을 적용하여 최적 모델을 찾기 위한 실험 수행",
      ],
      review: "",
      githubLink: "",
    },
  },
};
