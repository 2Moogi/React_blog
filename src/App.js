import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '컵라면 순위';
  let [first,a] = useState('닛신 시푸드 누들');
  let [second,b] = useState('공화춘 짜장');
  let [third,c] = useState('육개장 소컵');
  let [fourth,d] = useState('사리곰탕');
  let [fifth,e] = useState('튀김우동');
  let [sixth,f] = useState('컵누들');
  let [seventh,g] = useState('베트남 쌀국수');


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '16px'}}>2Moogi님의 블로그</h4>
      </div>
      <div><h4>{post}</h4></div>
      <div className="list">
        <h4>1. {first}</h4>
        <p>아마 옛날에 누군가한테 선물받아서 처음 먹게된 라면이다</p>
        <p>매콤한걸 좋아하는 편이 아니라그런지 정말 맛있게 먹었다.</p>
        <p>아마 해물을 싫어하는게 아니라면 누구든 맛있게 먹을거라 장담한다. 핵꿀맛</p>
        <h4>2. {second}</h4>
        <p>군필이라면 먹어본 적은 없어도 한 번 먹은 적은 없다는 공화춘 짜장맛.</p>
        <p>섞어먹어도 맛있지만 난 두개는 무리라서 감동란에 같이 먹고는 했다.</p>
        <p>감동란+공화춘+쇼미더머니 = 군대에서 허락한 유일한 마약...</p>       
        <h4>3. {third}</h4>
        <p>삼각김밥 및 김밥과 가장 잘 어울린다고 볼 수 있다.</p>
        <p>모두가 알고있겠지만 '소컵' 이다. 큰 용기 사지 않도록 주의하자!!</p>
      </div>

    </div>
  );
}

export default App;
