//URL에 변수를 넣는 방법은 대괄호를 사용한 js 페이지를 작성하는 것
// "/movies" 다음에 변수 id가 들어오길 바라므로 이렇게 작성한다.

import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  //콘솔에 찍하는 객체에서 query 키를 확인하면 id에 해당하는 값이 쿼리 키의 값인 것을 확인할 수 있다.
  return "detail";
}
