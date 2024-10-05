export const projectData = {
  single: {
    수록: {
      title: "수록",
      description:
        "소프트웨어 기획 및 설계 과제로 개인 기록 사이트를 제작하였다. <br />JavaScript의 기초 학습을 확인하기 위해 CRUD 기능을 중심으로 한 사이트를 목표했다.",
      stack: ["HTML5", "CSS3", "JavaScript", "Node.js"],
      period: "2024.05-24 ~ 2024.06-12",
      subPeriods: {
        "1차": "2024.05-24 ~ 2024.05-29",
        "2차": "2024.05-29 ~ 2024.06-05",
        "3차": "2024.06-06 ~ 2024.06-12",
      },
      content:
        "게시글 작성, 수정, 삭제, 조회, 검색 기능을 구현했다. <br/> DB 사용 없이 검색 기능을 구현하기 위해, JSON 파일을 활용해 제목, 내용, 태그, 작성 시간 데이터를 저장했다.",
      details:
        "라이브러리 사용 없이 Vanilia Node.js를 사용해 서버를 구축하고, 블로그 사이트를 구현했다. <br/>목표한 기능을 구현하고 학습을 위해 두번의 리팩토링을 진행했다. <br/><br/> 첫 번째 버전에서는 <strong>게시글 작성과 조회 기능을 포함한 페이지를 구현</strong>했다. <br/>그러나 이 과정에서 작성한 글이 실시간 조회가 되지 않는 문제를 겪었다. 이는 서버가 정적으로 제작된 HTML을 송출하는 형식이었기 때문에 발생하는 문제였다.<br/><br/> 이에 두 번째 버전에서는 서버 사이드 랜더링 개념을 적용해 동적으로 HTML을 생성 및 전달하는 방식을 채택해 <strong>새로운 게시글 작성 및 조회 시 동적으로 업데이트 된 내용을 조회</strong>할 수 있도록 했다. <br/>JSON 파일을 통해 게시글 작성, 삭제, 조회, 검색, 수정 데이터를 핸들링해 목표했던 기능을 모두 구현했다. <br/><br/> 세 번쨰 버전에서는 코드를 모듈 단위로 분리했다. 이 과정에서 <strong>각 기능을 독립된 모듈로 나누며 유지 보수성을 높이는 경험</strong>을 했다. <br/>또한 코드 내 주석 작업을 통해 코드의 가독성을 높이며 코드 이해도를 높이는데 중점을 두었다. <br/><br/> 이러한 리팩토링 과정을 통해 코드의 구조와 기능을 발전시켰으며 각 리팩토링 단계마다 기술적 성장을 이루어냈다. ",
      data: [
        "/img/수록_version1_main.png",
        "/img/수록_version1_write.png",
        "/img/수록_version1_arkit.png",
        "/img/수록_version2_main.png",
        "/img/수록_version2_search.png",
        "/img/수록_version2_arkit.png",
        "/img/수록_version3_main.png",
        "/img/수록_version3_serach.png",
        "/img/수록_version3_arkit.png",
      ],
      imgnavigate: {
        0: "버전 1.0 메인 화면",
        1: "버전 1.0 글 작성 페이지",
        2: "버전 1.0 서버 아키텍처",
        3: "버전 2.0 메인 화면",
        4: "버전 2.0 검색 화면",
        5: "버전 2.0 서버 아키텍처",
        6: "버전 3.0 메인 화면",
        7: "버전 3.0 검색 화면",
        8: "버전 3.0 서버 아키텍처",
      },
      review:
        " 본격적으로 제작한 첫 번째 프로젝트인 수록을 통해 프로그래밍에서 중요한 요소는 집중력뿐만 아니라 동일한 코드를 지속적으로 바라보며 개선할 수 있는 인내심임을 깨닫게 되었다. <br/>또한 코드를 오랫동안 연구하고 개선하려는 노력이 결국 성과로 이어진다는 경험을 통해 노력에 대한 뿌듯함을 느꼈다. <br/>보통 새로운 개념을 접하고 그것을 사용하는 것이 실력 향상의 방법이라 생각되지만, 같은 코드를 계속해서 개선하려는 노력 또한 상당한 성장의 기회를 제공한다는 것을 알게 되었다.",
      githubLink: [
        "https://github.com/dalramjwi/dalramjwi_Study_node.js/tree/main/subject_5",
        "https://github.com/dalramjwi/record-subject_5_trans",
        "https://github.com/dalramjwi/RECORD-trans",
      ],
      notionLink: "https://notion.so/sample1",
      thumbnail: "/img/thumbnail_수록.png", // 추가된 썸네일
    },
    내꿈은급식왕: {
      title: "내 꿈은 급식왕",
      description:
        "Node.js를 배우면서 서버에서 여러 페이지를 처리하는 방식을 익혔다. <br />특히, SSR 방식으로 서버에서 HTML을 조합해 제공해준다는 점이 재미있었다. <br />이에 영감을 얻어, 다양한 요청에 따른 이벤트 페이지를 제공해주는 페이지를 제작하게 되었다.",
      stack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Sqlite3"],
      period: "2024.05-08 ~ 2024.09-11",
      subPeriods: {
        "1차": "2024.05-08 ~ 2024.05-21",
        "2차": "2024.06-10 ~ 2024.09-11",
      },
      content:
        "사용자가 선택한 메뉴에 따라 변경되는 이벤트 및 랜덤 이벤트에 따라 변동되는 값에 따른 엔딩 포인트 분기점을 제공하는 간단한 게임 형식의 웹사이트",
      details:
        "초기에는 설계 없이 코드를 작성하여 코드의 유지보수성과 확장성의 중요성을 절실히 깨달았다. 이를 해결하기 위해 코드 리뷰 페이퍼를 제작하여 구조를 정리하고, 이후 구체적인 설계를 바탕으로 코드를 리팩토링하는 과정을 거쳤다.",
      data: [
        "/img/급식왕_version1_arkit.png",
        "/img/급식왕_version1_main.png",
        "/img/급식왕_version1_menu.png",
        "/img/급식왕_version2_arkit.png",
        "/img/급식왕_version2_cafe.png",
        "/img/급식왕_version2_end.png",
      ],
      imgnavigate: {
        0: "급식왕 프로젝트의 첫 번째 버전 ARKit 화면입니다.",
        1: "첫 번째 버전 메인 화면입니다.",
        2: "첫 번째 버전 메뉴 화면입니다.",
        3: "두 번째 버전 ARKit 화면입니다.",
        4: "두 번째 버전 카페 화면입니다.",
        5: "게임 엔딩 화면입니다.",
      },
      review:
        "CSS의 추가 수정과, 로직 부분에 있어 완성을 진행했다. 설계가 매우 중요하다는 것을 깨닫게 되었다.",
      githubLink: [
        "https://github.com/dalramjwi/SchoolMealKing",
        "https://github.com/dalramjwi/NEW-schoolMealKING",
      ],
      notionLink: "https://notion.so/sample2",
      thumbnail: "/img/thumbnail_급식왕.png", // 추가된 썸네일
    },
    CustomWidgets: {
      title: "Custom Widgets",
      description:
        "React를 배우게 되면서, React의 상태 개념을 활용한 프로젝트를 만들어보고 싶었다. <br />이에 리액트 상태 관리 개념을 적극적으로 활용할 수 있는 나만의 위젯을 구성하는 페이지를 만들어보자는 생각이 떠올랐다.",
      stack: ["TypeScript", "React", "TailwindCSS"],
      period: "2024.07-17 ~ 2024.09-18",
      content:
        "입력한 값에 따라 변경되는 위젯, 위젯 위치 변경 기능 (드래그 앤 드롭), 위젯 숫자 조정 기능",
      details:
        "드래그 앤 드롭 기능은 기존 라이브러리를 사용하지 않고 필요한 기능들을 직접 정의하여 로직을 구현했다.",
      data: [
        "/img/customwidgets_main.png",
        "/img/customwidgets_custom.png",
        "/img/customwidgets_base.png",
      ],
      imgnavigate: {
        0: "Custom Widgets 프로젝트의 메인 화면입니다.",
        1: "커스텀 위젯 설정 화면입니다.",
        2: "기본 위젯 화면입니다.",
      },
      review:
        "custom widgets 프로젝트를 완성하였으며, 짧은 기간 동안 집중력을 발휘해 만족스러운 결과를 낼 수 있었다.",
      githubLink: ["https://github.com/dalramjwi/CustomWidgets"],
      notionLink: "https://notion.so/sample3",
      thumbnail: "/img/thumbnail_CustomWidgets.png", // 추가된 썸네일
    },
    // 도타임: {
    //   title: "도타임",
    //   description:
    //     "독서를 좋아하는 만큼 다양한 종류의 독서에 관심이 있었다. 웹소설과 같은 전자책을 쉽게 제작하고 조회할 수 있는 플랫폼을 제작하려는 프로젝트를 시작하였다.",
    //   stack: ["미정"],
    //   period: "2024.09-19 ~ 진행중",
    //   content: "전자책 제작 기능 및 조회 기능 제공",
    //   data: [],
    //   imgnavigate: {},
    //   review: "",
    //   githubLink: [],
    //   notionLink: "https://notion.so/sample4",
    //   thumbnail: "/img/thumbnail_도타임.png", // 추가된 썸네일
    // },
    수폴리오: {
      title: "수폴리오",
      description:
        "이력서를 작성하고 취업 준비를 하면서, 개인 포트폴리오를 사이트로 배포하는 것이 포트폴리오를 조회하는데 접근성이 좋고 나를 효과적으로 표현하는데 도움이 된다고 생각했다.",
      stack: ["React", "TailwindCSS"],
      period: "2024.09-20 ~ 현재",
      content: [
        "개인 프로젝트 및 팀 프로젝트 소개",
        "기술 스택 및 경험 상세화",
        "연락처 및 소셜 미디어 링크 제공",
      ],
      data: [],
      imgnavigate: {},
      review: "",
      githubLink: ["https://github.com/dalramjwi/Supolio"],
      notionLink: "https://notion.so/sample5",
      thumbnail: "/img/thumbnail_수폴리오.png", // 추가된 썸네일
    },
  },
  team: {
    수상한자판기: {
      title: "수상한 자판기",
      description:
        "KDT 교육 과정 수료 중 데이터베이스 기능을 포함한 자판기 웹 어플리케이션을 구현해야 했다. <br/>도메인과 관련해 “비현실적인” 물건을 판매하는 자판기를 제작했다.",
      stack: ["HTML5", "CSS3", "JavaScript", "Sqlite3"],
      period: "2024.06-20 ~ 2024.07-15",
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
      data: [
        "/img/자판기_version1_main.png",
        "/img/자판기_version2_main.png",
        "/img/자판기_version2_purchase.png",
      ],
      imgnavigate: {
        0: "수상한 자판기 프로젝트의 첫 번째 버전 메인 화면입니다.",
        1: "두 번째 버전 메인 화면입니다.",
        2: "제품 구매 화면입니다.",
      },
      review:
        "팀 프로젝트를 진행하면서 설계적 측면에서의 협업의 중요성을 깨달았다.",
      githubLink: [
        "https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectA-3team",
      ],
      notionLink: "https://notion.so/sample6",
      thumbnail: "/img/thumbnail_수상한자판기.png", // 추가된 썸네일
    },
    DelaN: {
      title: "DelaN",
      description:
        "ERP 시스템을 주제로 하여 인적 자원 관리 프로그램을 제작하는 프로젝트를 진행했다. <br/> 개발자를 지망하는 만큼, 개발자를 관리하는, 그리고 개발자가 자신을 관리하는 툴을 구상했다.",
      stack: [
        "TypeScript",
        "Nest.js",
        "Next.js",
        "Vanilla Extract",
        "MongoDB",
        "PostgreSQL",
      ],
      period: "2024.07-16 ~ 2024.10-11",
      content: [
        "관리자: 업무 할당, 근태 확인, 회원가입 승인, 권한 및 월급 설정",
        "사용자: 프로필 관리, 프로젝트 칸반 보드, 캘린더",
      ],
      details: ["ERD 구조 반영 및 문서 제작"],
      data: [],
      imgnavigate: {},
      review: "",
      githubLink: [],
      notionLink: "https://notion.so/sample7",
      thumbnail: "/img/thumbnail_DelaN.png", // 추가된 썸네일
    },
    갈라테이아: {
      title: "갈라테이아",
      description:
        "개인이 학습시킬 수 있는 AI 템플릿을 제작하여 제공하는 플랫폼을 목표하고 있다. <br/> 사용자가 자신만의 생성형 AI와 상호작용 하고, 사용자 간의 생성형 AI를 공유할 수 있는 커뮤니티를 조성하고자 한다.",
      stack: ["Python"],
      period: "2024.07-24 ~ 진행중",
      content: ["회원가입, 로그인, 캐릭터 생성 및 공유, 카카오톡 챗봇 연동"],
      data: [
        "/img/갈라테이아_main.png",
        "/img/갈라테이아_character.png",
        "/img/갈라테이아_chatbot.png",
      ],
      imgnavigate: {
        0: "갈라테이아 프로젝트의 메인 화면입니다.",
        1: "캐릭터 생성 화면입니다.",
        2: "챗봇 연동 화면입니다.",
      },
      review: "",
      githubLink: [],
      notionLink: "https://notion.so/sample8",
      thumbnail: "/img/thumbnail_alter.png", // 추가된 썸네일
    },
    호랑이: {
      title: "호랑이",
      description:
        "머신 러닝을 활용한 프로젝트로, 이미지 데이터 분석 및 이미지를 분석한 데이터를 토대로 시뮬레이션 예측 모델을 개발하는 데 중점을 두고 있다.",
      stack: ["Python"],
      period: "2024.09-12 ~ 진행중",
      content: [
        "데이터 전처리",
        "모델 학습 및 평가",
        "예측 결과 시각화",
        "사용자 인터페이스 구현",
      ],
      details: [
        "데이터 전처리 및 다양한 머신 러닝 알고리즘을 적용하여 최적 모델을 찾기 위한 실험 수행",
      ],
      data: [
        "/img/호랑이_data_processing.png",
        "/img/호랑이_model_training.png",
        "/img/호랑이_prediction.png",
      ],
      imgnavigate: {
        0: "호랑이 프로젝트의 데이터 전처리 과정입니다.",
        1: "모델 학습 과정입니다.",
        2: "예측 결과 시각화 화면입니다.",
      },
      review: "",
      githubLink: [],
      notionLink: "https://notion.so/sample9",
      thumbnail: "/img/thumbnail_alter.png", // 추가된 썸네일
    },
  },
};
