# 201930322 이준선

# [10월 27일]

<h3>■Movie 컴포넌트에 genres props 넘겨주기</h3>
장르의 데이터를 추가시키기 위하여 genres props를 사용한다.<br>

Movie.propTypes에는 genres props가 **문자열 배열 arrayOf(propTypes.string)** 이 반드시 필요함


function에 genres를 추가하고 <br>
`function Movie({id,title,year,summary,poster, genres})` 


Movie PropsType에도 추가해준다<br>
`genres : PropTypes.arrayOf(PropTypes.string).isRequired,`<br>
class 속성 이름을 전부 className으로 수정한다.

<h3>■영화 장르 출력하기</h3>


```
<ul className="movie__genres">
       {genres.map((genres)=>{return <li className="movie__genre">{genres}</li>;})}
</ul>
```

<h3>■li 엘리먼트에 key props추가하기</h3>
li 엘리먼트에 keyprops를 추가하지 않아서 console에 오류가 뜬다. <br>
함수의 2번째 인자 이름인 index를 추가해주자<br>

`{genres.map((genres, index)=>{return <li key={index} className="movie__genre">{genres}</li>;})}`


<h3>■App.css 수정</h3>

```*{
    box-sizing:border-box;
}

body{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #eff3f7;
    height: 100%;
}
```

<h3>■Movie.css 수정</h3>

```.movies .movie{
    background-color: white;
    margin-bottom: 70px;
    font-weight:  300;
    padding: 20px;
    border-radius: 20px;
    color: #adaeb9;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),0 8px 16px -8px
    rgba(0, 0, 0, 0.3),
    0 --6px 16px -6px rgba(0, 0, 0, 0.025);
}

.movie .movie a{
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 2fr;
    grid-gap: 20px;
    text-decoration: none;
    color: inherit;
}

.movie img {
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px
    -18px rgba(0, 0, 0, 0.025);
}
.movie .movie__title,
.movie .movie__year {
    margin: 0;
    font-weight: 300;
}
.movie .movie__title{
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
}
.movie .movie__genres {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0px;
}
.movie__genres li,
.movie__year{
    margin-right: 10px;
    font-size: 14px;
}
```

<h3>■시놉시스 180자로 제한하기</h3>
movie.js 파일에서 <br>
{summary} => {summary.slice(0, 180)}... 로 바꾸기<br>
...은 생략의 의미로 썼음 

<h3>■영화앱 제목 바꾸기</h3>
public 폴더의 index.html 파일에서 title 엘리먼트 사이에 넣으면 됨<br>

`<title>Movie App</title>`

<h3>■라우터를 사용하기 위해 react-router-dom 설치</h3>

`npm install react-router-dom`


<h3>■routes 폴더 만들고 Home.js, About.js, Home.css 파일 만들기</h3>

**Home.js 파일**

```
import Movie from '../components/Movie';
import './Home.css'
export default Home;
```
App.js를 복사 붙여놓고 수정해준다. 


**Home.css 파일**

```
.container {
    height: 100%;
    display: flex;
    justify-content: center;
}

.loader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
}

.movies {
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    grid-gap: 100px;
    padding: 50px;
    width: 80%;
    padding-top: 70px;
}
@media screen and (max-width: 1090px) {
    .movies{
        grid-template-columns: 1fr;
        width: 100%;
    }
    
}
```


<h3>■./src/App.js 파일 수정</h3>

```import React from "react";
import Home from './routes/Home';
import './App.css'

function App() {
  return <Home />;
}

export default App;
```

<h3>■HashRouter와 Route 컴포넌트 사용하기</h3>

```import React from "react";
import './App.css'
import {HashRouter, Route} from 'react-router-dom';

function App() {
  return(
    <HashRouter>
      <Route />
      </HashRouter>
  );
}

export default App;
```

<h3>■Route 컴포넌트에path, component props 추가하기</h3>

```import React from "react";
import './App.css'
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About'

function App() {
  return(
    <HashRouter>
      <Route path="/about" component={About} />
      </HashRouter>
  );
}

export default App;
```

<h3>■About.js 파일 수정하기</h3>

```
import React from "react";
function About() {
    return <span> About this page : I built it because I love movies.</span>;
}

export default About;
```

<h3>■Home 컴포넌트를 위한 Route 컴포넌트 추가하기</h3>

```
import Home from "./routes/Home";
<Route path="/" component={Home} />
 ```
 
<h3>■Home 치면 Home 나오고 introduction치면 introduction 나옴</h3>
 
```function App() {
  return(
    <HashRouter>
      <Route path ="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
      </HashRouter>
  );
}
```


<h3>■About.css 파일 수정하기</h3>

```
.about__container{
    box-shadow: 0 13px 27px --5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px
    rgba(0, 0, 0, 0.3),
    0 -6px 16px rgba(0, 0, 0, 0.25);
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    margin: 0 auto;
    margin-top: 100px;
    width: 400px;
    font-weight: 300;
}

.about__container span:first-child {
    font-size: 20px;
}

.about__container span:last-child{
    display: block;
    margin-top: 10px;
}
```

<h3>■About.js 파일 수정하기</h3>

```
import React from "react";
import './About.css';
function About() {
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If 
                that is granted, all else
                follows"
            </span>
            <span>- George Orwell, 1984</span>
        </div>
    );
}

export default About;
```

<h3>■Navigation 컴포넌트 만들기</h3>

```
import React from "react";

function Navigation(){
    return(
        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    );
}

export default Navigation;
```

<h3>■a 엘리먼트 Link 컴포넌트로 바꾸기</h3>

```
import React from "react";
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div>
            <Link to href="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;
```

# [10월 13일]
**movie 컴포넌트를 임포트한 다음 <Movie /> 에 반환**<br>
`import Movie from './Movie'`


**Movie 컴포넌트에 props 전달하기**<br>
```{movies.map(movie=>( 
      <Movie
      key={movie.id}
      id={movie.id}
      year={movie.year}
      title={movie.title}
      summary={movie.summary}
      poster={movie.medium_cover_image}
      />
       ))}
 ```
       
※주의사항 : poster props는 키 이름이 medium_cover_image이므로 movies.medium_cover_image라고 작성해야 함

console log는 사용하지 않기 때문에 지우고 <br>
keporps에 `key={movie.id}` 를 넣어준다

**App 컴포넌트에 HTML 추가하기**<br>
```
  render(){
    const {isLoding, movies }= this.state;
    return (
    <section class ="container">
      {isLoding ?(
      <div class ="loder"> << 로딩하기 위해씀
        <span class="loder__text">Loding...</span>
        </div>
    ) : (
      <div class ="movies">
       {movies.map(movie=>(
      <Movie
      key={movie.id}
      id={movie.id}
      year={movie.year}
      title={movie.title}
      summary={movie.summary}
      poster={movie.medium_cover_image}
      />
       ))}
       </div>
    )}
    </section>
    )
  }

  }
export default App;

<Movie> 컴포넌트가 반환할 JSX 를 <div class="movies"></div>에 감싼다.
```


**영화 포스터 이미지 추가하기**<br>
Movie.js 공간에
`<div class="movie">
            <img src={poster} alt={title} title={title} />`
            
            
**App.js와 Movie.js 컴포넌트에 css 파일 임포트하기**<br>
`import './App.css';`
`import './Movie.css';`




# [10월 6일]
**마운트로 분류하는 생명주기 함수들**

constructor() -> render() -> componentDidMount()



**생성자란 무엇인가.**

●constructor()는 component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 사용한다.

●자바스크립트에서 super는 부모클래스 생성자의 참조한다는 의미이다.

●생성자 내에서는 외부 API를 직접 호출할 수 없다 필요 하다면 componentDidMount()를 사용한다

●생성자 내에서는 setState를 사용하지 않고, this.state를 사용하여 state의 초기값을 할당한다.


**앱로딩 하는 변수 : isLoding state**

app 컴포넌트가 render()함수가 실행되면 호출되는 생명주기 함수는? :

__componentDidMount() 함수이다__

api에서 데이터를 받아오는 axios.get()을 실행하려면 시간이 필요하다,

그 사실을 자바스크립트에게 알려야만 데이터를 잡을 수 있으므로 async,await를 사용한다.

<<<<<<< HEAD
>>>>>>> 73691863c4f7a1d236d63e93dd9385ed8fa9cdb5
=======
>>>>>>> 73691863c4f7a1d236d63e93dd9385ed8fa9cdb5

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
