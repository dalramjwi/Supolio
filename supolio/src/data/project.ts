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
        "라이브러리 사용 없이 Vanilia Node.js를 사용해 서버를 구축하고, 블로그 사이트를 구현했다. <br/>목표한 기능을 구현하고 학습을 위해 두번의 리팩토링을 진행했다. <br/><br/> 첫 번째 버전에서는 <strong>게시글 작성과 조회 기능을 포함한 페이지를 구현</strong>했다. <br/>그러나 이 과정에서 작성한 글이 실시간 조회가 되지 않는 문제를 겪었다. 이는 서버가 정적으로 제작된 HTML을 송출하는 형식이었기 때문에 발생하는 문제였다.<br/><br/> 이에 두 번째 버전에서는 서버 사이드 랜더링 개념을 적용해 동적으로 HTML을 생성 및 전달하는 방식을 채택해 <strong>새로운 게시글 작성 및 조회 시 동적으로 업데이트 된 내용을 조회</strong>할 수 있도록 했다. <br/>JSON 파일을 활용해 게시글 작성, 삭제, 조회, 검색, 수정 데이터를 핸들링해 목표했던 기능을 모두 구현했다. <br/><br/> 세 번쨰 버전에서는 코드를 모듈 단위로 분리했다. 이 과정에서 <strong>각 기능을 독립된 모듈로 나누며 유지 보수성을 높이는 경험</strong>을 했다. <br/>또한 코드 내 주석 작업을 통해 코드의 가독성을 높이며 코드 이해도를 높이는데 중점을 두었다. <br/><br/> 이러한 리팩토링 과정을 통해 코드의 구조와 기능을 발전시켰으며 각 리팩토링 단계마다 기술적 성장을 이루어냈다. ",
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
        "사용자가 선택한 메뉴에 따라 변경되는 이벤트와 랜덤 이벤트 발생에 따라 엔딩 포인트를 제공하는 간단한 게임 형식의 웹사이트를 구현했다. <br/> 간단한 DB 사용과 SSR을 활용한 동적 HTML 구성을 통해 페이지를 제작했다.",
      details:
        "SSR과 REST API 개념을 알게 되고 이를 바탕으로 영양사가 급식 식단표를 구상하는 것처럼 사용자의 다양한 선택에 따라 이벤트가 발생하는 페이지를 제작하게 되었다. <br/> 프로젝트를 제작하다 팀 프로젝트 : 수상한 자판기 및 DelaN 제작을 병행하게 되어 한동안 진행을 하지 못했다. <br/><br/> 다시 코드를 작성하려 했을 때에는 프로젝트 초반에는 아무런 설계 없이 코드를 작성하여 코드의 유지보수성과 확장성의 중요성을 절실히 깨달았으며 코드를 파악하기 힘들다는 것을 알게 되었다. <br/>이를 해결하기 위해 코드 리뷰 페이퍼를 작성해 코드의 구조를 정리하고, 구체적인 설계를 바탕으로 코드를 리팩토링하는 과정을 거쳤다. <br/><br/>급식왕은 코드를 작성하는데 있어 본격적인 설계를 시도한 첫 번째 프로젝트이며, 구상한 기능들을 구현하기 위해 다양한 개념들을 접하게 되었다. <br/><br/> 첫 번째로 <strong>HTML의 meta data 기능에 대해 인식</strong>하게 되었다. meta data에 대해 크게 중요하게 생각치 않고 있었는데, 이 페이지에서 특정 구간에서의 반복이 진행되고 얼마나 반복이 진행된 페이지인지 인식해야 하는 로직을 구상하는 과정에서 meta data를 활용하게 되었다. <br/>meta data 자체가 웹 페이지의 정보를 나타내는 중요한 부분이기도 하지만 특정 값이 반복이 될 수록 증가하도록 활용해 반복을 감지할 수 있도록 사용했다. <br/><br/> 두 번째로 DB 사용 경험을 쌓는 계기가 되었다. <br/><strong>Database의 값을 통해 HTML의 데이터로 나타내고 클라이언트에서 전송받은 값을 특정 로직에 의해 처리한 후 DB에 삽입</strong>하는 경험, DB 간의 값을 응용해 서버 로직에서 사용하기 위해 SQL 작성법에 더 익숙해졌다.",
      data: [
        "/img/급식왕_version1_main.png",
        "/img/급식왕_version1_menu.png",
        "/img/급식왕_version1_arkit.png",
        "/img/급식왕_version2_main.png",
        "/img/급식왕_version2_menu.png",
        "/img/급식왕_version2_cafe.png",
        "/img/급식왕_version2_event.png",
        "/img/급식왕_version2_random.png",
        "/img/급식왕_version2_end.png",
        "/img/급식왕_version2_arkit_front.png",
        "/img/급식왕_version2_arkit_back.png",
      ],
      imgnavigate: {
        0: "버전 1.0 메인 화면",
        1: "버전 1.0 메뉴 화면",
        2: "버전 1.0 서버 아키텍처",
        3: "버전 2.0 메인 화면",
        4: "버전 2.0 메뉴 화면",
        5: "버전 2.0 식당 화면",
        6: "버전 2.0 이벤트",
        7: "버전 2.0 랜덤 이벤트",
        8: "버전 2.0 엔딩",
        9: "버전 2.0 프론트엔드 파일 아키텍처",
        10: "버전 2.0 백엔드 서버 아키텍처",
      },
      review:
        "굉장히 오랜 기간동안 제작한 프로젝트였다. <br/>개인 프로젝트를 진행하다 팀 프로젝트를 병행하게 되며 개인 프로젝트가 잠시 중단되었고, 한참 동안 보지 않았던 코드를 다시 이해하며 프로젝트를 완성하는 경험을 했다. <br/> 이 프로젝트는 팀 프로젝트와 개인 프로젝트를 병행하는 방법을 깨닫게 해주었고, 이전에 작성한 코드를 다시 해석하고 이어서 작업하는 귀중한 경험을 제공한 재미있는 프로젝트였다. <br/> 급식왕 프로젝트를 제작하며 가장 크게 느낀 점은 설계의 중요성이었다. <br/> 프로젝트 중 발생한 여러 문제들은 설계 단계에서 더 철저히 구상했더라면 충분히 예방할 수 있었던 오류들이었다. <br/> 하지만 이러한 시행착오 또한 값진 경험이었으며, 이를 통해 문제가 발생했을 때 어떻게 대응할 것인지에 대해 깊이 학습하게 되었다. <br/>이 프로젝트는 단순히 결과물만이 아닌, 진행 과정에서의 성장을 이끌어준 중요한 경험이었다.",
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
        "사용자가 입력한 값에 따라 변경되는 위젯을 구성했다. <br/>입력한 값에 따라 사용자 이름, 위젯 내용이 변경된다. 또한 위젯의 숫자를 조정할 수 있고 위젯 간 위치 변경 기능(드래그 앤 드롭)을 제작했다.",
      details:
        "React를 접하면서 상태 관리가 중요한 개념이라는 걸 알게 되었고, 이를 잘 활용할 수 있는 프로젝트를 해보고 싶다는 생각이 들었다.<br/>이후 <strong>화면의 요소를 사용자가 직접 커스텀할 수 있는 간단한 위젯</strong> 사이트 아이디어가 떠올라 제작을 시작했다.<br/><br/> 프로젝트 도중 팀 프로젝트를 병행하게 되면서 잠시 멈추게 됐지만, 다시 시작할 때 코드 리뷰 페이퍼를 작성해서 설계와 코드를 재정비하고 작업을 이어갔다. <br/> 코드를 작성하면서 <strong>hook과 component를 분리</strong>해 사용하는 경험을 쌓았고, TailwindCSS도 처음으로 사용해보게 되었다. <br/><br/>특히, <strong>드래그 앤 드롭 기능</strong>은 기존 라이브러리를 사용하지 않고 직접 로직을 정의해 구현했다. 무분별한 라이브러리 사용은 쉽고 편하게 적용할 수는 있으나 학습이 목적인 프로젝트에서 사용하기엔 적절하지 않다고 판단했기 때문이다. <br/>onDragStart, onDragOver, onDrop 같은 DOM 이벤트를 활용했고, grid 상태를 추가해 그리드 아이템의 동적 변화를 관리했다. 사용자가 아이템을 드래그하면 인덱스를 저장하고, 드롭하면 위치를 바꾸는 로직을 통해 직관적인 인터페이스를 제공했다.",
      data: [
        "/img/customwidgets_main.png",
        "/img/customwidgets_base.png",
        "/img/customwidgets_setting.png",
        "/img/customwidgets_custom.png",
        "/img/customwidgets_arkit.png",
      ],
      imgnavigate: {
        0: "메인 화면",
        1: "커스텀 위젯 기본 화면",
        2: "커스텀 위젯 설정 화면",
        3: "커스텀 위젯 적용 화면",
        4: "파일 아키텍처",
      },
      review:
        "Custom Widgets 프로젝트의 실질적인 기간은 약 2주로 비교적 짧은 시간 내에 완성되었다. <br/>이러한 짧은 기간 동안 프로젝트에 몰입해 집중적으로 작업을 마무리한 경험은 큰 성취감을 얻게 되었다. <br/>각 페이지의 요소를 설계하고, 특히 로직적인 면 또한 미리 설계한 대로 구현하며 React와 TailwindCSS의 활용 경험을 키웠다.<br/> 이 프로젝트에서 가장 보람을 느꼈던 부분은 프로젝트 마감 기한을 명확히 설정하고 목표를 구체적으로 세워 나가는 과정이었다.<br/> 일 별로 계획을 세우고 이를 조정해 실천해나가며 점진적으로 완성해나가는 경험은 뜻깊었다.<br/> Custom Widgets를 통해서 React의 상태 관리와 TailwindCSS 활용법에 대해 이해할 수 있었고 단기간에 집중적으로 작업하는 방법 또한 익히게 되었다.",
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
        "이력서를 작성하고 취업을 준비하면서, 개인 포트폴리오를 사이트로 배포하는 것이 포트폴리오의 접근성을 높이고, 나를 효과적으로 표현하는 데 도움이 될 것이라 생각했다",
      stack: ["React", "TailwindCSS"],
      period: "2024.09-20 ~ 2024.10.7",
      content:
        "포트폴리오의 목적성은 나에 대한 정보 소개와 진행한 프로젝트의 설명이라 생각했다. <br/>그렇기에 프로젝트를 어떠한 이유로 제작했고 어떻게 제작했는지를 이미지와 함께 표현했다.",
      details:
        "수폴리오는 취업을 위한 포트폴리오 사이트 제작을 목표로 진행한 프로젝트이다. <br/>포트폴리오에서는  <strong>내가 어떤 프로젝트를 제작했는지, 그 이유와 과정에서 발생한 일들을 효과적으로 전달</strong>할 필요가 있다고 판단했다. <br/><br/>이를 위해, 사용자가 사이트를 방문했을 때  <strong>프로젝트에 대한 흥미와 정보 전달이 잘 이루어지도록 하는 것이 중요</strong>하다고 생각했다. <br/> 그래서 프로젝트를 카드 형태로 구성하여 시각적으로 재미있고 흥미를 끌 수 있도록 하였으며, 카드를 클릭하면 모달 창이 열리며 프로젝트 설명을 제공해 정보 전달을 극대화했다.<br/><br/> 이러한 구성을 구현하기 위해 React를 사용했는데, React는 상태 변화에 따라 반응형 UI를 구현하는 데 적합하기 때문에 사용자 경험을 향상시키는 데 알맞다고 판단했다.<br/> CSS는 TailwindCSS를 선택했는데 이전에 사용했던 Vanilla Extract에서 미리 스타일을 객체로 지정해두고 사용하는 방식과 비슷한 테마 기능이 TailwindCSS에 있다는 점에 흥미를 느껴, 그 차이를 체험해보고자 했다.<br/><br/> 사이트 제작 과정에서 가장 어려웠던 부분은 내용을 구성하고 전달하는 작문적인 측면이었다.<br/> 내용 전달력이 가장 중요하다고 생각했기 때문에, 이 점을 염두에 두고 사이트 구조를 설계하고 프로젝트 설명을 작성하는 데 집중했다.<br/>  <strong>프로젝트의 제작 과정과 느낀 점을 중심으로 전달력을 강화하는 방향</strong>으로 사이트를 구성하고 내용을 정리했다.",
      data: [
        "/img/supolio_main.png",
        "/img/supolio_info.png",
        "/img/supolio_info_modal.png",
        "/img/supolio_overview.png",
        "/img/supolio_single.png",
        "/img/supolio_single_modal.png",
        "/img/supolio_arkit.png",
      ],
      imgnavigate: {
        0: "메인 화면",
        1: "정보 화면",
        2: "정보 - 모달 화면",
        3: "프로젝트 기간 조회 화면",
        4: "개인 프로젝트 화면",
        5: "개인 프로젝트 - 모달 화면",
        6: "파일 아키텍처",
      },
      review:
        "수폴리오 프로젝트를 진행하며 내가 했던 다양한 프로젝트를 돌아보며 그 과정에서 얼마나 열심히 노력했는지를 돌아보게 되었다. <br/>프로젝트를 정리하고 하나씩 다시 살펴보는 과정에서 나 자신의 발전을 실감했고 성취감을 느꼈다.<br/>이 프로젝트는 기술적인 성장 보다는 나를 어떻게 표현할 것인가에 대한 깊은 고민이 있었다. <br/>또한 앞으로도 다양한 프로젝트를 제작해 나를 표현하고 싶다는 생각이 들었다.",
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
      content:
        "자판기를 모티브로 한 물품 조회와 물품 구매의 기능을 중점으로 제작했다. <br/> 로그인, 재화 획득, 관리자의 사용자 조회 기능을 포함하고 있다.",
      details:
        "수상한 자판기는 첫 번째 팀 프로젝트로, 팀원들과 함께 비현실적인 물건 판매라는 테마를 기획했다. <br/>각자의 아이디어를 통합해 5개의 테마를 가진 물건을 판매하는 방식으로 구성했고 각 테마마다 다른 배경을 설정해 시각적인 차별화를 주어 프로젝트를 더 흥미롭게 만들었다.<br/><br/>프로젝트에서는  <strong>Sqlite3을 사용해 데이터베이스를 관리</strong>했으며,  <strong>Vanilla Node.js를 이용해 필요한 기능만 최소화해 서버를 구현</strong>했다. <br/>이 과정에서 비동기 처리 개념을 배우고 이를 활용해 데이터베이스 연동을 효과적으로 처리했다.<br/><br/>내가 맡은 작업은 <strong>DB 생성 및 관리와 서버 구현</strong>이었다. <br/>또한 <strong>cookie 개념을 학습하여 로그인 기능을 구현</strong>했고 간단한 프론트 로직을 사용해 로그인 페이지를 제작했다.<br/><br/>프론트엔드 디자인에도 적극적으로 참여하며 프론트엔드 담당 팀원과 소통해 테마 배경과 로직 구성에 대해 논의하고 조율했다.",
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
        "https://github.com/KDT-IaaS-Class-Two-Group/subject-7-exam-database-3",
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
      githubLink: [
        "https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectA-3team",
      ],
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
      githubLink: [
        "https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectB-2team",
      ],
      notionLink: "https://notion.so/sample9",
      thumbnail: "/img/thumbnail_alter.png", // 추가된 썸네일
    },
  },
};
