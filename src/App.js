import { render } from "@testing-library/react";
import React from "react";
import propTypes from "prop-types";

function Food({ name,picture,rating}) {
  
  return(
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
  
}
const foodILike = [
  {
    id:1,
    name: 'kimch',
    image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MTJfMTIy%2FMDAxNjMxNDI2OTUwNDU1.1GFY0XULyzgZaoG9Nn9tOhszn2atzvbENjxhtVwXsbMg.J4VtvTm8_mbGH2T-iATSqWVXKckMQasvo1dgn2DO0xgg.JPEG.hna210%2F%25BB%25E7%25C1%25F8_2021._9._11._%25BF%25C0%25C8%25C4_2_34_19.jpg&type=a340',
    rating:5,
  },
  {
    id:2,
    name: 'takoyaki',
    image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MjNfMTYx%2FMDAxNjI2OTk0ODkyNjY4.NP_jtdJMRTDBv6ydkfTj-ZfKjiyV5fSse_O4MRAfPNYg.34c6qV7gyRwZnaEk9oUrwO7chaz1MrCPfWkelU4MKUog.JPEG.matboom%2F%253F%253F%25EC%25BD%2594%25EC%2595%25BC%253F%2581%25BC_%25EA%25B3%25A0%25ED%2599%2594%25EC%25A7%253F_%253F%259E%25A5%253F%2582%25AC%253F%2582%25AC%25EC%25A7%253F_%25EB%25A7%259B%25EB%25B6%2590.jpg&type=a340',
    rating:4.5,
  },
  ];

function App() {
  return(
    <div>
    {
      foodILike.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))
    }
    </div>
  );

}

Food.propTypes ={
  name: propTypes.string.isRequired,
  picture:propTypes.string.isRequired,
  rating:propTypes.number.isRequired,
}


export default App;
