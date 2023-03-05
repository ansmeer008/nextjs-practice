import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </a>
      </Link>
    </nav>
  );
}

//Nextjs 내에 앱 내에서 페이지를 네비게이트 할 때 사용해야 하는 특정 컴포넌트가 존재한다.
//그래서 a 태그를 쓰지 않고 Link 컴포넌트를 사용하게 되는데,
//Link 컴포넌트는 Nextjs 어플리케이션의 클라이언트 사이드 네비게이션을 제공해준다.
//Link 컴포넌트 사용법은 위 예시와 같다.
//Link 컴포넌트는 href를 위해서 사용되기 때문에 className이나 style 속성 등이 적용되지 않는다.
//그래서 Link 컴포넌트 내부에 해당 내용들은 적용해주어야 함.

//useRouter hook으로는 location에 대한 정보를 얻을 수 있다.
