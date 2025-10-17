/*
	[진화과정은 다음과 같습니다.]
	이상해씨 - 이상해풀 - 이상해꽃
	파이리 - 리자드 - 리자몽
	꼬부기 - 어니부기 - 거북왕

	1. level1 변수를 생성
	2. level1 변수에 이상해씨의 레벨(#level1)을 넣으세요.
	3. 만약 레벨(#level1)이 10이상이면 1번 진화(이상해풀)
	4. 레벨(#level1)이 20 이상이면 2번 진화(이상해꽃)하게 만드세요.
	5. 나머지 캐릭터도 동작하게 만들어주세요.

	단, document.querySelector() 대신에 document.getElementById("id")를 사용하세요.
	- id를 선택할 수 있음
	- #은 제외하고 id만 " "안에 입력
	

	[ if문 활용법 ]
	if ( 이 안에 TRUE를 넣으면 중괄호안의 코드들이 실행 ) {

		- 이미지 소스 변경하는 코드
		document.getElementById("id").src = 'url' 적기
		콘솔창에 document.getElementById("id").src 입력
		url에는 img경로 적기
		
		- 캐릭터 이름도 같이 변경해주세요

	}

	if (parseInt(level2.innerHTML) > 10) {
	}
	

	완성되었다면 html에서 이상해씨, 파이리, 꼬부기 레벨을 바꿔보면서 제대로 작동하는지 확인해보세요~
*/
var level1 = document.getElementById("level1"); 
var level1_name = document.getElementById("name1");

var level2 = document.getElementById("level2"); 
var level2_name = document.getElementById("name2");

var level3 = document.getElementById("level3"); 
var level3_name = document.getElementById("name3");


if (parseInt(level1.innerHTML) >= 10) {  
    document.getElementById("cha1").src = 'icon01_2.png'; 
    level1_name.innerHTML = "이상해풀";  
}
if (parseInt(level1.innerHTML) >= 20) {  
    document.getElementById("cha1").src = 'icon01_3.png'; 
    level1_name.innerHTML = "이상해꽃";  
}

//도마뱀
if (parseInt(level2.innerHTML) >= 10) {  
    document.getElementById("cha2").src = 'icon02_2.png'; 
    level2_name.innerHTML = "리자드";  
}
if (parseInt(level2.innerHTML) >= 20) {  
    document.getElementById("cha2").src = 'icon02_3.png'; 
    level2_name.innerHTML = "리자몽";  
}

//거북이
if (parseInt(level3.innerHTML) >= 10) {  
    document.getElementById("cha3").src = 'icon03_2.png'; 
    level3_name.innerHTML = "어니부기";  
}
if (parseInt(level3.innerHTML) >= 20) {  
    document.getElementById("cha3").src = 'icon03_3.png'; 
    level3_name.innerHTML = "거북왕";  
}