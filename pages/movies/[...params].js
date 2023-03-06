//URL에 변수를 넣는 방법은 대괄호를 사용한 js 페이지를 작성하는 것
// "/movies" 다음에 변수 id가 들어오길 바라므로 이렇게 작성한다.

import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params }) {
  const router = useRouter();
  // 아래 코드에서 || 뒤의 []를 사용한 것은 서버 사이드 렌더링이 아니라 CSR을 해준 것임
  //누군가가 시크릿 모드에서 접속한다면 아직 router.query.params는 아직 존재하지 않아서 에러를 띄운다
  //아래와 같이 처리하면 에러가 없어진다. 그러나 소스코드에서 살펴봤을 때 title은 찾아볼 수 없음. 서버 사이드 렌더링이 아니므로.
  // const [title, id] = router.query.params || [];

  //서버 사이드 렌더링 적용해서 바꾼 것
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

//위처럼 작성하면 SEO에 최적화될 수 없으므로 아래처럼 서버 사이드 렌더링을 사용해줄 수 있음.
//여기서는 index.js 에서 사용했던 것과는 달리 fetch를 해오기 위함은 아니고
//좀 더 빠르게 데이터를 가져오기 위함이라고 이해할 수 있다.
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
