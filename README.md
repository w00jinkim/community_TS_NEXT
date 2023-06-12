# 커뮤니티 만들기 with Nextjs, MongoDB

- 목표: Next.js/MongoDB 로 TypeScript 기반 커뮤니티 만들기
- Next.js 기반 SSR 및 CSR 의 차이 및 사용법 숙지
- MongoDB를 사용한 백엔드 작동방법 경험
- TypeScript를 사용한 정적 언어 사용 및 숙지
- 기능구현을 통한 React 및 JS의 심도 있는 이해

<br/><br/>

## 설치, 환경설정 및 실행방법

```
1. git clone https://github.com/w00jinkim/community_TS_NEXT.git
2. cd [folder name]
3. cd client
4. npm install
5. npm start (리액트가 켜지길 기다립니다.)
6. ctrl + c (터미널)
7. npm build
8. 빌드되는걸 기다립니다.
9. cd ..
10. cd server
11. npm install
12. npm start (노드가 켜지길 기다립니다.)
13. ctrl + c (터미널)
14. cd ..
15. 경로가 최상위 디렉토리인지 확인
16. 최상위 디렉토리에서 npm install
17. 같은 디렉토리에서 npm start!
```

<br/><br/>

## 개발 기간

- 2023-06-07 ~ 진행중

## TECH-STACKS

### Front/Back-End

<p>
<img src="https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white&style=for-the-badge"/>
<img src="https://img.shields.io/badge/next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/MongoDB-47A248?logo=MongoDB&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?logo=TailwindCSS&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/Vercel-000000?logo=Vercel&logoColor=white&style=for-the-badge" />

## 배포/ 데모영상

- Not available at the moment

<br/><br/>

## 참여자

|                                                                Front-end                                                                |
| :-------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                 김우진                                                                  |
|               <img width="95px" height="95px" src="https://avatars.githubusercontent.com/u/111094669?v=4" alt="avatar"/>                |
| [<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/w00jinkim) |

<br/><br/>

## 구현사항

  <br/>
1. 홈페이지 <br/>
  
- [ ] 모든 카테고리 프리뷰
  <br/>

2. 게시판<br/>

- 글쓰기<br/>
  &nbsp; [x] - 글쓰기 버튼 클릭시 /write 페이지로 리다이렉트<br/>
  &nbsp; [x] - 글쓰기 페이지내 게시 클릭시 서버저장 요청 및 게시판으로 리다이렉트<br/>
  &nbsp; [x] - <br/>

- 게시글 <br/>
  &nbsp; [x] - 작성일 기준 최신순으로 글 조회 <br/>

&nbsp; [x] - 게시물 10개 기준 페이지네이션 구현<br/>

&nbsp; [x] - 게시글 클릭시 해당 게시글로 이동<br/>

&nbsp; [x] - 아이디 일치 여부에따른 게시글 수정/삭제 활성화/비활성화<br/>
&nbsp; [x] - 댓글 기능 구현 <br/>
&nbsp; [ ] - 조회수 기능 구현 <br/>
&nbsp; [ ] - 좋아요 기능 구현 <br/>

3. 네비게이션 바 기능
   &nbsp; [x] - 메인배너 클릭시 홈페이지 리다이렉트<br/>
   &nbsp; [x] - 게시글 검색 기능<br/>
   &nbsp; [x] - 로그인 여부에따른 UI 변경<br/>
   &nbsp; [x] - 카테고리 표기<br/>

4. 회원기능<br/>

- 회원가입/로그인<br/>
  &nbsp; [x] - 회원가입/로그인간 validation 체크<br/>
  &nbsp; [x] - 회원가입 후 서버 저장 요청 및 비밀번호 Bcrypt로 암호화<br/>

- 일반 계정과 관리자 계정의 구분<br/>
  &nbsp; [x] - 회원가입시 역할을 일반으로 설정하여 관리자계정과 구분<br/>
  &nbsp; [x] - 기본적으로 관리자가 아닐 경우 자신이 쓴 글만 수정/삭제가 가능하며 롤이 관리자인 경우 게시글 삭제 가능 <br/>

- 회원페이지 기능<br/>
  &nbsp; [ ] - 회원 정보 페이지 구현<br/>
  &nbsp; [ ] - 프로필 이미지 등록<br/>
  &nbsp; [ ] - 프로필 이미지 기반 게시글, 댓글 등 기능 추가<br/>

5. 추가 게시판<br/>

- [ ] - 좋아요 기반 인기 게시물 표기<br/>
- [ ] - 공지사항 게시물 표기<br/>
- [ ] - 문의사항 게시물 표기<br/>
