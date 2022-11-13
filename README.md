
## Package Manager

yarn 사용

```javascript
yarn install
```

## Project Start

```bash
yarn dev
```
Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Directory Structure

```
└── src
    ├── components
    ├── hooks
    ├── model
    ├── pages
    ├── store
    ├── styles
    └── utils
```
- components : 공용컴포넌트들을 작성하는 폴더
- hooks : 공통 혹은 페이지별로 사용되는 커스텀 훅 폴더
- model : 공통으로 사용되는 model 정의
- pages : 라우팅되는 컴포넌트들 정의 (camelCase사용)
- store : reducer module, module 통합, store 생성 및 wrapper 생성
- styles : globelStyle 과 공통으로 사용되는 스타일 theme에 정의
- utils : 비지니스 로직을 제외한 공통 로직들만 모아두는 폴더

## Thchnical Skills

- 메인 라이브러리 & 프레임워크: React, Next.js
- 메인 언어 및 문법: Typescript, Javascript ES6+, JSX
- 상태 관리: redux, reduc-toolkit, redux-persist
- 스타일 : styled-components
- UI Library: styled-components, bootstrap, react-icons
- 기타: git, eslint, prettier, lodash

## prettier
```js
{
  "trailingComma": "es5", // 객체, 배열을 사용할때 마지막줄 쉼표
  "tabWidth": 2, // 탭 넓이 2칸
  "printWidth": 120, // 한줄길이 120
  "semi": true, // 세미콜론 사용
  "singleQuote": true, // 싱글쿼터 사용
  "bracketSpacing": true // 객체 리터럴에서 괄호에 공백 삽입 여부
}
```
