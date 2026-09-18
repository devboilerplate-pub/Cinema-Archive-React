# Cinema Archive (시네마 아카이브) 🎬

Cinema Archive는 감성과 분위기를 중심으로 엄선된 영화들을 탐색하고 저장할 수 있는 모던 웹 애플리케이션입니다. 영화의 분위기, 연도, 장르별로 나만의 인생 영화를 찾아보고 '나만의 컬렉션'에 저장해 보세요!

## ✨ 주요 기능

*   **영화 탐색 및 필터링 (Archive)**: 제목 검색은 물론, 연도, 장르, 개봉일, 평점 등 다양한 기준으로 영화를 쉽게 찾을 수 있습니다.
*   **감성 기반 장르 분류**: '드라마', '느와르', '로맨스', 'SF' 등 다양한 느낌별로 영화를 둘러볼 수 있습니다.
*   **새로운 릴리즈 및 클래식 영화 추천**: 갓 보관소에 들어온 신작(New releases)과 오랫동안 사랑받은 고전 명작(Deep cuts)들을 한눈에 확인하세요.
*   **나만의 컬렉션 (My List)**: 마음에 드는 영화를 북마크하여 개인 보관함에 저장하고 언제든지 다시 볼 수 있습니다.
*   **영화 상세 정보 모달**: 아름다운 영화 포스터와 함께 감독, 출연진, 줄거리 등 상세한 영화 정보를 팝업 형태로 제공합니다.

## 🛠 기술 스택

이 프로젝트는 최신 프론트엔드 생태계를 적극 활용하여 빠르고 유려한 사용자 경험을 제공합니다.

*   **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/) (빠른 개발 환경 및 빌드 제공)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/) (모던하고 깔끔한 아이콘 라이브러리)
*   **UI / UX**: 
    *   [Radix UI](https://www.radix-ui.com/): 접근성 높은 기반 컴포넌트
    *   [Sonner](https://sonner.emilkowal.ski/): 유려한 Toast 알림 시스템
*   **Routing**: [Wouter](https://github.com/molefrog/wouter) (React를 위한 매우 가벼운 라우팅 라이브러리)

## 🚀 시작하기

로컬 환경에서 프로젝트를 실행하고 테스트하는 방법입니다.

### 1. 패키지 설치
프로젝트 루트 디렉토리에서 아래 명령어를 통해 필요한 의존성을 설치합니다.
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
명령어 실행 후 브라우저에서 제공되는 로컬 호스트 주소(일반적으로 `http://localhost:5173`)로 접속하면 앱을 확인할 수 있습니다.

### 3. 빌드 (프로덕션 배포용)
```bash
npm run build
```
최적화된 정적 파일들이 `dist/` 폴더에 생성됩니다.

## 📁 주요 폴더 구조

```text
📦 src
 ┣ 📂 components   # 재사용 가능한 UI 컴포넌트 (버튼, 헤더, 영화 카드, 모달 등)
 ┣ 📂 contexts     # 전역 상태 관리를 위한 Context (테마 설정 등)
 ┣ 📂 data         # 영화 목록 및 추천 영화 등 목업 정적 데이터
 ┣ 📂 lib          # 유틸리티 함수 및 설정 파일
 ┣ 📂 pages        # 라우팅되는 각 화면 컴포넌트 (Home, NotFound)
 ┣ 📜 App.tsx      # 메인 컴포넌트, 라우팅 및 전역 프로바이더 설정
 ┣ 📜 index.css    # 전역 스타일 및 Tailwind CSS 설정
 ┗ 📜 main.tsx     # React 앱 진입점 (Entry Point)
```

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `package.json`을 참고해 주세요.
