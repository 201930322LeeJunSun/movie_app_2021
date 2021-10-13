# 201930322 이준선

#[10월 6일]

# <br>[09월 29일]</br>
- - -
1. prop
2. 클래스형 컴포넌트
3. state

<h3>1.prop</h3>
<p>key props : 컴포넌트다 서로 다르다는 것을 알려주기 위함</p>
※리액트 내부에서 사용되는 특수한 props임※
<p>자료형 검사할 수 있는 도구 : prop-types</p>
명령어 npm install prop-types
<p> 'isRequired'는 필요하다라는 뜻이다</p>


<h3>2.클래스형 컴포넌트</h3>
클래스형 콤포넌트 코드 class App extends React.Component{}


app 클래스가 리액트가 제공하는 Component 클래스를 반드시 상속 받아야한다

__상속은 클래스에 다른 클래스의 기능을 추가할 수 있게 해줌__


JSX 반환하기 위해서 render()라는 함수를 사용한다.

<h3>3.state</h3>
state 정의하기:

**state={};** 라고 작성하면 됨

state는객체 형태의 데이터이다.

**state를 사용하려면 반드시 클래스형 컴포넌트 안에서, 소문자를 이용하여 state라고 적어야 한다.**


# <br>[09월 15일]</br>
<p>컴포넌트 정의할 때의 이름과 사용할 때의 이름이 같아야함</p>
<p>props에 있는 데이터는 문자열인 경우를 제외하고 모두 {}안에 입력해야함</p>
console 보고싶다면 F12 누르면 됨


# <br>[09월 11일]</br>
<p>git 연동</p>

index.js , App.js 파일 수정함
아이디 수정시 index.js도 수정 필요함
<p>ex) root -> potato (index.html와 index.js 아이디 동일하게!!)</p>
<p>※npm start 하기전에 파일 위치 확인하기</p>
