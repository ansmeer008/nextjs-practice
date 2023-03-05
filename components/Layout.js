import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}

//children은 react.js가 제공하는 prop인데 하나의 컴포넌트를 또 다른 컴포넌트 안에 넣을 때 사용할 수 있음.

//보통 사람들은 _app.js 파일이 너무 커지는 것을 원하지 않음.
//그래서 Layout 컴포넌트에서 여러 페이지에서 동일한 레이아웃을 사용할 수 있도록 컴포넌트를 구성한다.
//매 페이지마다 작성하지 않을 수 있어 편리함.

//사용법 : Layout 컴포넌트를 생성하고, 생성한 컴포넌트를 상위 컴포넌트로 적용할 컴포넌트들을 감싸주면 됨.
//여기서는 _app.js 페이지에서 컴포넌트들을 감싸주고 있다.

//여러 개의 레이아웃이 필요할 때는 getLayout을 사용할 수 있다.
//이를 사용하면 페이지 마다 레이아웃을 정의할 수 있는듯.
//https://nextjs.org/docs/basic-features/layouts
