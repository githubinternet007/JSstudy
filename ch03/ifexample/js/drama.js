        // var age = 16;
        var age = prompt("나이를 입력하세요.", 15);
        
        // null값 나왔을 때의 조건처리 넣을 것.
        if (age !== null) {
            if (age >= 15) {
                document.write("드라마 관람가<br>");
            } else {
                document.write("드라마 관람불가<br>")
            }
            document.write("나이는 " + age + "세 입니다.");

        } else {
            document.write("나이를 입력하지 않았습니다.")
        }
    