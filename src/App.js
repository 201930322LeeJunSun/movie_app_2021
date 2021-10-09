import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoding : true,
    movies:[]
  };

  getMovies = async () => {
    const{
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({movies, isLoding:false});
  }

  componentDidMount(){

    this.getMovies();
  }
  render(){
    const {isLoding }= this.state;
    return <div>{isLoding ? 'Loding...':'We are ready'}</div>;
  }

  }
  
  

export default App;
