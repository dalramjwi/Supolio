import { style } from "@vanilla-extract/css";

// 컨테이너 스타일 (전체 배경 색상 및 우측 정렬)
export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end", // 우측 정렬
  height: "100vh",
  backgroundColor: "#D9D9D9",
  padding: "2vh", // 상대 단위로 변경
  paddingRight: "5vw", // 우측 여백을 상대 단위로
});

// 링크 컨테이너 스타일 (링크 간 간격 설정)
export const linkContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "2vh", // 링크 간 간격을 상대 단위로
  marginTop: "5vh",
  alignItems: "flex-end", // 각 링크 우측 정렬
});

// 링크 스타일 및 Hover 효과
export const linkStyle = style({
  color: "rgba(0, 0, 0, 0.5)", // 기본적으로 흐린 투명도
  fontSize: "5.5vw",
  fontWeight: "bold",
  transition: "color 0.3s",
  textDecoration: "none",
  ":hover": {
    color: "black", // Hover 시 검정색으로 변경
  },

  // 반응형 조정: 작은 화면에서는 글씨 크기와 패딩 조정
  "@media": {
    "(max-width: 768px)": {
      // 태블릿 및 작은 화면용
      fontSize: "9.5vw",
    },
    "(max-width: 480px)": {
      // 모바일 화면용
      fontSize: "11.5vw",
      paddingRight: "3vw", // 모바일에서는 우측 패딩도 축소
    },
  },
});
