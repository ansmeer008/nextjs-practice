import Layout from "@/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

//nextjs가 어떤 페이지를 랜더링 하려고 할 때
//어떤 페이지에 있는 컴포넌트를 Component 프롭으로 _app.js 파일 내의 App 함수에 전달해주게 된다.

//각 페이지마다 NavBar 컴포넌트를 불러오지 않기 위해서 App 컴포넌트 리턴문 안에 NavBar 컴포넌트를 위치해줄 수 있다.

//이 페이지에서 style global 설정을 해주면 전역으로 설정해줄 수 있다.

//styles 페이지에 생성되는 globals.css 파일은 다른 페이지에서는 import 할 수 없다.
//_app.js 페이지에서만 import 가능.
