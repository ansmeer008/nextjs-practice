import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      {/* style jsx 사용법 */}
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
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

//style jsx 사용하면 css module 파일을 적용한 것처럼 적용한 곳마다 적용한 스타일이 모듈화 된다
//스타일들 적용되는 범위가 오직 작성한 컴포넌트 내부로 범위가 한정된다.
//부모 컴포넌트가 동일한 클래스 이름을 사용하고 있더라도 상관 없으며, 태그에 대한 style도 전역으로 적용되지도 않는다.
//css 파일을 import 해 올 필요도 없다는 장점이 있음.
