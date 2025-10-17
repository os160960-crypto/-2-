/*
	[진화과정은 다음과 같습니다.]
	이상해씨 - 이상해풀 - 이상해꽃
	파이리 - 리자드 - 리자몽
	꼬부기 - 어니부기 - 거북왕

	1. 이상해씨의 정보를 넣을 poke1 오브젝트 변수를 생성해주세요.
	2. poke1 오브젝트안에 키 값으로 name, level, cha를 만들어 각각에 맞는 HTML요소를 넣으세요.
	3. 만약 레벨이 10이상이면 1번 진화 
	4. 레벨이 20 이상이면 2번 진화하게 만드세요.
	5. 나머지 캐릭터도 동작하게 만들어주세요.
	
	if ( 이 안에 TRUE를 넣으면 중괄호안의 문구들이 발동함 ) {
		- 이미지 소스 변경 자바스크립트
		ID선택.src = '../url/url.png'
		background :url ('../url/url.png')
		
		- 캐릭터 이름도 같이 변경해주세요

	}

	- document.getElementById("id")를 사용하세요.
	- 완성되었다면 html에서 이상해씨, 파이리, 꼬부기 레벨을 바꿔보면서 제대로 작동하는지 확인해보세요.
*/

var poke1 = {
	name: document.getElementById("name1"),
	level: document.getElementById("level"),
	cha: document.getElementById("cha1")
}
var poke2 = {
	name: document.getElementById("name2"),
	level: document.getElementById("leve2"),
	cha: document.getElementById("cha2")
}
var poke3 = {
	name: document.getElementById("name3"),
	level: document.getElementById("leve3"),
	cha: document.getElementById("cha3")
}


if (parselnt(poke1.level.innerHTML) >= 10) {
	poke1.cha.src = 'icon01_2.png';
	poke1.name1.innerHTML = "이상해풀";
}
if (parselnt(poke1.level.innerHTML) >= 20) {
	poke1.cha.src = 'icon01_3.png';
	poke1.name1.innerHTML = "이상해꽃";
}

if (parselnt(poke1.level.innerHTML) >= 10) {
	poke2.cha.src = 'icon02_2.png';
	poke2.name2.innerHTML = "리자드";
}
if (parselnt(poke1.level.innerHTML) >= 20) {
	poke2.cha.src = 'icon02_3.png';
	poke2.name2.innerHTML = "리자몽";
}

if (parselnt(poke1.level.innerHTML) >= 10) {
	poke3.cha.src = 'icon03_2.png';
	poke3.name3.innerHTML = "어니부기";
}
if (parselnt(poke1.level.innerHTML) >= 20) {
	poke3.cha.src = 'icon03_3.png';
	poke3.name3.innerHTML = "거북왕";
}