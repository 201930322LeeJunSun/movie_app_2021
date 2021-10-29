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
