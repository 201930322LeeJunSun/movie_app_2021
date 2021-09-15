import { render } from "@testing-library/react";
import React from "react";

function Food({ name,picture }) {
  
  return(
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
  
}
const foodILike = [
  {
    name: 'chicken',
    Image:'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8a%2F25%2F8f%2F8a258fa4a2440132ecca63d1f11b64cb.png&type=a340',
  },
  {
    name: 'takoyaki',
    image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MjNfMTYx%2FMDAxNjI2OTk0ODkyNjY4.NP_jtdJMRTDBv6ydkfTj-ZfKjiyV5fSse_O4MRAfPNYg.34c6qV7gyRwZnaEk9oUrwO7chaz1MrCPfWkelU4MKUog.JPEG.matboom%2F%253F%253F%25EC%25BD%2594%25EC%2595%25BC%253F%2581%25BC_%25EA%25B3%25A0%25ED%2599%2594%25EC%25A7%253F_%253F%259E%25A5%253F%2582%25AC%253F%2582%25AC%25EC%25A7%253F_%25EB%25A7%259B%25EB%25B6%2590.jpg&type=a340',
  
  },
  ];
  function renderFood(foo){
    return <Food name ={foo.name} picture={foo.image} />;
  }
function App() {
  return(
    <div>
    {
      foodILike.map(renderFood)
    }
    </div>
  );

}



export default App;
