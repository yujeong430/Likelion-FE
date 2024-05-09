import './Style.css';
import Item from './Item';
import logo from './images/logo.png';
import header from './images/header-image.png'
import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';
import img5 from './images/5.jpeg';
import img6 from './images/6.jpeg';
import img7 from './images/7.jpeg';
import img8 from './images/8.jpeg';
import img9 from './images/9.jpeg';
import img10 from './images/10.jpeg';
import banner from './images/banner-icon.png';

function App() {
  return (
    <>
    <div className='navbarContainer'>
      <div className='navbar'>
        <img id='logoImg' src={logo} alt='logo'/>
        <ul className='navbarMenu'>
          <li>중고거래</li>
          <li>동네업체</li>
          <li id='orange'>알바</li>
          <li>부동산</li>
          <li>중고차 직거래</li>
        </ul>
        <input id='search' type='text' placeholder='물품이나 동네를 검색해보세요'/>
        <button id='chatBtn'>채팅하기</button>
      </div>
    </div>
    <div className='headerContainer'>
      <div className='header'>
        <h1 id='headerText1'>우리 동네에서 찾는<br></br>당근알바</h1>
        <p id='headerText2'>걸어서 10분 거리의<br></br>동네 알바들 여기 다 있어요.</p>
        <button id='headerBtn'>공고 올리기</button>
      </div>
      <img id='headerImg' src={header} alt='header'/>
    </div>
    <div className='mainContainer'>
      <h2 id='mainText'>인기 당근알바</h2>
      <div className='itemContainer'>
        <Item img={img1} 
        title='문흥 무인아이스크림 매장관리'
        location='단짠아이스크림  ・ 광주광역시 북구 문흥동'
        wage='월급 150,000'/>
        <Item img={img2} 
        title='오늘 6시부터 빵 생산 알바 오실분'
        location='크로플덕오리아가씨 ・ 인천광역시 서구 가좌동'
        wage='시급 9,860'/>
        <Item img={img3} 
        title='주방 근무자(설겆이)근무하실분.'
        location='꽁당보리밥 ・ 충청남도 아산시 배방읍'
        wage='일급 140,000'/>
        <Item img={img4} 
        title='콜센터 상담원 (스케쥴 접수)모집합니다'
        location='한국중소기업센터(주) ・ 경기도 화성시 영천동'
        wage='시급 15,000'/>
        <Item img={img5} 
        title='원룸청소 하실 분 구해요!(경력 무관)'
        location='충청남도 천안시 서북구 두정동'
        wage='건당 17,000'/>
        <Item img={img6} 
        title='마당에 잔돌 제거 및 청소'
        location='제주특별자치도 서귀포시 상예동'
        wage='일급 100,000'/>
        <Item img={img7} 
        title='정원박람회 퍼레이드 팀을 모집하고있습니다!!!'
        location='라우더유아체육 ・ 전라남도 순천시 오천동'
        wage='건당 50,000'/>
        <Item img={img8} 
        title='해외쇼핑몰 상품 등록 알바 구합니다'
        location='피엠씨코퍼레이션 ・ 경기도 수원시 영통구 영통동'
        wage='시급 10,000'/>
        <Item img={img9} 
        title='학원데스크 직원 구인합니다'
        location='이아이 시매스학원 ・ 전라남도 순천시 왕지동'
        wage='시급 10,000'/>
        <Item img={img10} 
        title='후평동 조은세탁산업 수건게는 작업만 하실분'
        location='조은세탁산업 ・ 강원특별자치도 춘천시 후평동'
        wage='시급 10,000'/>
      </div>
      <div className='banner'>
        <img id='bannerImg' src={banner} alt='banner'/>
        <span id='bannerText'>대규모 채용이 필요하다면<br></br>당근알바 기업용 서비스에 대해 알아보세요!</span>
        <button id='bannerBtn1'>7일 무료 체험</button>
        <button id='bannerBtn2'>1:1 문의</button>
      </div>
    </div>
    </>
  );
}
export default App;
