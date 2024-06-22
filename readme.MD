# mission-1

## 네이버 로그인 페이지를 자바스크립트로 동작하게 만들기!!

주어진 html과 css에 있는 input에 내가 이메일을 작성하였을 때 올바르지 않은 방식으로 작성을 한다면 빨간색 경고 validation이 뜨고, 올바르게 작성하였을 때는 validation이 보여지지 않게 만들기!
(If I write an email in the input in the given html and css in the wrong way, the red warning validation will appear, and if it is written correctly, the validation will not be visible!)

로그인을 올바르게 작성 후 로그인 버튼을 누르면 welcome.html파일로 넘어갈 수 있도록 만들기!
(Create Login button and press the login button to move on to the Welcome.html file!)

----

제일 먼저 해야할 것은 e-mail을 조건처리 해주기
(First, we have to deal with the conditions to e-mail.)

 //   - false면 해당 input에 is--invalid 추가
			node.classList.remove('is--invalid')
//  - true면 해당 input에 is--invalid 제거
			node.classList.add('is--invalid')

그 다음 해야 할 내용은 pw 정규표현식을 사용한 validation해주기
(And than, Validate using regular expressions for passwords.)

//   - false면 해당 input에 is--invalid 추가
			node.classList.remove('is--invalid')
//  - true면 해당 input에 is--invalid 제거
			node.classList.add('is--invalid')

로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
(Compare the value of user.id with the input value when the login button is clicked.)
    value === user.id

로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
(Compare the value of user.pw with the input value when the login button is clicked.)
    value === user.pw

두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
(If both values match, navigate to the next page (welcome.html).)
    window.location.href = 'welcome.html'

----
## 나의 문제점
어떻게 시작을 해야 할 지 모르겠다는 생각이 가장 먼저 들었다
왜 그런가 생각을 해보니 js코드를 볼 때 막막하다는 생각과, 어디서부터 손을 대야 할 지 모륵겠다는 생각이 들었다
막상 과제 제출이 끝나고 과제 리뷰를 해줄 땐, 맞다,, 저렇게 하면 되는거지? 하는 생각이 들지만 과제를 할 때 내가 혼자서 풀어 나가는 것이 어렵다.
계속 문제를 풀어보고 한계점에 부딫혀봐야 나의 문제점과 부족한 점, 채울 점이 명확하게 드러나는데 지금은 건들지도 못하고 있으니 경험 부족이라는 생각이 든다.

---
## 과제 리뷰를 듣고 느낀 점