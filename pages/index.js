import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
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

//아래 함수는 서버 사이드 렌더링을 가능하게 해주는데, 이때 이 함수 이름은 절대로 바뀌면 안 된다.
//이 함수에 어떤 내용을 작성하든지 그 코드는 server에서 돌아가게 된다.
//서버에서 받은 데이터를 페이지에 props로 전달해줄 수 있다.
//이 방법을 사용하면 유저가 페이지에 들어왔을 때 데이터까지 Html로 준비된 화면을 보여줄 수 있다.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
