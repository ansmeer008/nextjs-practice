import NavBar from "@/components/NavBar";

export default function Potato() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

//nextjs에서 중요한 건 pages 폴더 내부에 작성하는 파일의 이름이다.
//실제로 그 페이지 내부에서 컴포넌트 이름을 뭐라고 작성하는지는 중요하지 않음.
//대신 export default로 설정해주어야 함.
//홈 페이지, 루트 페이지 같은 경우에는 index.js 파일과 연결되는데 이것만 파일명의 예외라고 할 수 있음.
