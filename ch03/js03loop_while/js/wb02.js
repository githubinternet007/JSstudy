
        // 숫자를 입력 받아서 그 숫자까지 출력하는 프로그램
        var n = 1;
        var i = prompt("출력을 원하는 끝 자연수를 입력하세요.");
        while (true) {
            document.write(n + "<br>")
            n += 1;

            if (n > i) {
                break;

            }
            // true - break 구문을 넣어 일정 조건을 넘어서면 반복을 중단시킨다. 실무 자주 활용하기도 한다. 
        }
    