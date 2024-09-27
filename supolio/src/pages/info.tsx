// pages/info.tsx
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Info: React.FC = () => {
  return (
    <>
      <div>
        <p>전화번호: 010-9823-3662</p>
        <p>이메일: dalramjwi@gmail.com</p>
        <p>깃허브: [깃허브 주소]</p>

        <h2>Stack</h2>
        <ul>
          <li>
            <strong>Language:</strong> JavaScript, TypeScript, Python
          </li>
          <li>
            <strong>Framework / Library:</strong> React, Next.js, Nest.js,
            Node.js, TailwindCSS, Vanilla Extract
          </li>
          <li>
            <strong>MarkUp:</strong> HTML5, CSS3
          </li>
          <li>
            <strong>Database:</strong> Sqlite3, PostgreSQL, MongoDB
          </li>
          <li>
            <strong>Tool:</strong> Git, GitHub, Figma, Notion
          </li>
          <li>
            <strong>AWS:</strong> S3, Amplify, EC2
          </li>
        </ul>

        <h2>공부 과정</h2>
        <h3>일일 ToDo 리스트</h3>
        <ul>
          <li>매일 아침, 그날의 목표 및 학습할 내용을 정리</li>
          <li>중요한 과제, 공부할 주제, 실습할 코드 등을 포함</li>
          <li>완료한 항목에 체크하여 성취감 느끼기</li>
        </ul>

        <h3>일일 일지 / 작업 기록</h3>
        <ul>
          <li>매일 학습한 내용을 요약하고 느낀 점 기록</li>
          <li>어떤 문제를 해결했는지, 어떤 개념을 이해했는지 적기</li>
          <li>하루의 학습 성과와 개선할 점 기록</li>
        </ul>

        <h3>문제 해결 방식</h3>
        <ul>
          <li>발생한 문제를 구체적으로 기록하고 해결 과정 정리</li>
          <li>예시: 에러 메시지, 시도한 해결 방법, 최종적으로 해결한 방법</li>
          <li>비슷한 문제 발생 시 참고할 수 있는 자료로 활용</li>
        </ul>

        <h3>헷갈리는 개념 정리</h3>
        <ul>
          <li>공식 문서, 블로그, 유튜브 강의 등을 참고하여 정리</li>
          <li>자신이 이해한 내용을 문서 또는 노트에 기록</li>
          <li>이해한 내용을 다른 사람에게 설명하며 점검</li>
        </ul>

        <h3>GPT 활용</h3>
        <ul>
          <li>학습한 개념이나 문제에 대해 GPT에게 질문하여 피드백 받기</li>
          <li>내가 이해한 내용을 정리하고 GPT와 비교하며 부족한 부분 보완</li>
          <li>특정 개념을 더 깊이 이해하고 싶을 때, 추가 정보나 예제를 요청</li>
        </ul>
      </div>
      <footer>
        <Link to="/project">project</Link>
      </footer>
    </>
  );
};

export default Info;
