import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from "react-redux"
import { getPostLists } from './redux/apiRequest';
import PostList from './component/PostList';
import PostForm from './component/PostForm';
function App() {
  const exampleArray = ['a', 'ab', 'abc', 'cd', 'def', 'gh']
  const newExample2 = ['abc', 'abs', 'abc', 'cd', 'desf', 'g']
  function findFrequentItem(params) { ///// create new array which includes elements' length appear the most in the array
    const objLengCount = {}
    let valueOfComparedCount = 0;
    let valueOfMostLength;
    for (let index = 0; index < params.length; index++) {
      if (objLengCount[params[index].length] === undefined) {
        objLengCount[params[index].length] = 1;
      } else {
        objLengCount[params[index].length] = objLengCount[params[index].length] + 1;
      }
      if (objLengCount[params[index].length] > valueOfComparedCount) {
        valueOfComparedCount = objLengCount[params[index].length];
        valueOfMostLength = params[index].length;
      }
    }
    const newArray = valueOfMostLength && params.length > 0 && params.filter(item => item.length === valueOfMostLength)
    console.log(newArray)
  }
  findFrequentItem(exampleArray)
  findFrequentItem(newExample2)
  /////////////// CALCULATE THE TOTAL OF ARRAY WHERE ELEMENTS GREATER THAN 2 ////////////////////////////
  function accumulateNumberGreaterThan2(params) {
    const newArray = params.length > 0 && params.filter(element => element > 2)
    const Total = newArray.reduce((acc, curVal) => acc = acc + curVal, 0)
    console.log(Total)
  }
  const ex3 = [1, 4, 2, 3, 5]
  const ex4 = [5, 100, 24, 35, 53]
  accumulateNumberGreaterThan2(ex3)
  accumulateNumberGreaterThan2(ex4)
  const dispatch = useDispatch()
  useEffect(() => {
    async function gettingData() {
      // const res = await axios.get("https://jsonplaceholder.typicode.com/posts") /// cach 1
    }
    // cach 2 dung redux
    getPostLists(dispatch)
  }, [])
  return (
    <div className="App">
      <div className="container-fluid bg-light">
        <PostList />
      </div>
      <div className="container py-5">
        <PostForm />
      </div>
    </div>
  );
}

export default App;
