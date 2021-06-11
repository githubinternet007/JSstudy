        var age = prompt("나이를 입력하세요.");
        var charge;

        if (age !== null) {
            if (age < 8) {
                document.write("미취학 아동입니다.");
                charge = 1000;
            } else if (age >= 8 && age < 14) {
                document.write("초등학생 입니다.");
                charge = 2000;
            } else if (age >= 14 && age < 20) {
                document.write("중, 고등학생 입니다.");
                charge = 2500;
            } else {
                document.write("일반인 입니다.");
                charge = 3000;
            }
            document.write("<br>입장료는 <span style='color:red'>" + charge + "</span>원 입니다.");

        } else {
            document.write("입력이 취소되었습니다.");
        }
        // 최상위 if문은 null값이 나올때와 정상 입력값을 받았을 때를 나누어 조건문을 수행하도록 한다.
        // 이 실습예제에서는 나이값을 입력하지 않고 취소버튼을 누르면 null값이 반환된다.
        // 다른 조건문에서도 null값이 반환될 때의 조건처리를 넣어줘야 한다.


        // 자바스크립트로 출력되는 요소에 스타일을 먹이는 방법. 여기서는 인라인스타일로 넣었다. 
        // script 태그에서 설정하려면 <span class="명칭">을 부여하고 이를 호출하여 스타일을 설정한다.
        // 어떤 경우이든 span 태그를 설정해주는 선언 형식을  주의해야 한다.
