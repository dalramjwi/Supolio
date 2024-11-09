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
  textDecoration: "none",
  transition: "transform 0.1s ease, color 0.2s ease, text-shadow 0.2s ease", // 빠른 효과 전환
  ":hover": {
    color: "#000", // Hover 시 진한 검정색으로 변경
    transform: "translateY(3px) scale(0.98)", // 살짝 아래로 눌리는 효과
    textShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)", // Hover 시 텍스트 자체에 그림자 추가
  },

  // 반응형 조정: 작은 화면에서는 글씨 크기와 패딩 조정
  "@media": {
    "(max-width: 768px)": {
      fontSize: "9.5vw",
    },
    "(max-width: 480px)": {
      fontSize: "11.5vw",
      paddingRight: "3vw",
    },
  },
});
