import Seo from "@/components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1>Hello</h1>
    </div>
  );
}

//jsx 문법을 사용하면 React.js를 import 할 필요가 없다.
//따로 파일 이름을 jsx로 바꿔줄 필요도 없음.
//useState, useEffect 같은 경우는 import 해줘야 함.

//nextjs는 초기 상태를 Pre-Rendering 한다.
//HTML로 미리 렌더링 해놓은 코드는 이후 react.js와 연결되어서 실행되게 되는데,
//react.js를 프론트엔드 안에서 실행하는 것과 같은 것을 hydration이라고 한다.
//next.js는 react.js를 백엔드에서 동작시켜서 이 페이지를 미리 만드는데

//유저가 웹 사이트에 가면 초기 미리 생성된 HTML 페이지를 볼 수 있게 되고
//상호작용이 일어나면서 react.js는 이 HTML을 받아서 동작하게 된다
//SEO에도 굉장히 좋다.
