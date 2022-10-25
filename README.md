# BEB-06-FIRST-01
<h2>
Client/src/component/
</h2>
MetamaskConnect.js
: 메타마스크 연결과 관련된 내용들이 포함되어 있음. 부모 컴포넌트에서 호출할 경우 연결된 지갑주소를 props로 전달해줌.
<br>
Abi.js
: NFT 민팅을 위해 솔리디티 언어로 배포된 코드의 abi 파일. 이를 이용하여 js를 통해 컨트랙트의 함수를 호출할 수 있음.
<br>
HeadCarousel.js
: 웹페이지 홈의 정중앙에 캐러셀형태의 이미지를 삽입하여 사용자가 여러 정보들을 쉽게 볼 수 있게 함.
<br>
<h2>
Client/src/pages/
</h2>
Home.js
: 상단에는 /profile, /mintpage로 라우팅 되어있는 버튼들이 있으며, 중앙부에는 캐러셀형태의 이미지가있고, 하단에는 OpenSea 카테고리 형식의 내용들이 열거되어 있음
<br>
MintPage.js
: 메타마스크 지갑을 연결하면 account 해쉬값을, 이미지를 선택하면 File 값을  /tokenUri 로 POST하여 버퍼 형태로 처리 후 URI로 치환한 문자열 형태를, 텍스트필드에서 작성된 NFT의 아티스트, 콜렉션이름, NFT 이름을 JSON 형태로 만들어 DB에 전송할 수 있게 함.
<br>
Profile.js
: 메타마스크 지갑을 연결하면 account 해쉬값을 전달받아, /senddata에 전달하고 그 값을 DB에서 필터링하여 지갑과 관련된 객체만을 추출한뒤 받아옴. 그 객체 내용들에는 account, artist, collection, name, tokenUri 값이 있으며 이를 화면에 나타나게해주어 지갑에서 민팅한 NFT를 열거시켜줌.

<h2>
Server/apps/
</h2>
tokenUri.js
: 이 코드를 호출하게 되면 이미지 버퍼값을 ipfs를 통해 tokenUri 값으로 치환시켜줌.

<h2>
Server/
</h2>
index.js
: Client 에서 받아온 이미지 파일은 버퍼 형식으로 바꿔주고, 민팅한 NFT의 내용들을 담은 JSON 파일들을 DB에 저장시켜주며, Profile에서 호출시 필요한 내용들만 필터링하여 JSON형태로 보내줌
