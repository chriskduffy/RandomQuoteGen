import React, {Component} from 'react';
import {Quotes, getRandomQuote} from './components/quote';
import './App.css';
import { FaTwitter } from 'react-icons/fa';


var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: {},
      color: '#333'
    };
    this.getRandomColor = this.getRandomColor.bind(this);
  }

    getRandomColor = () => {
      return colors[Math.floor(Math.random() * colors.length)]
  }

  handleClick = () => {
    this.setState({quote: getRandomQuote()});
    let newColor;
    do {
      newColor = this.getRandomColor();
    } while (newColor === this.state.color)
    this.setState({color: newColor});
  };

  

    componentDidMount() {
      // using an API call to they say so for new quote every
    //   fetch('https://quotes.rest/qod?language=en')
    //   .then(res => res.json())
    //   .then((data) => {
    //     this.setState({quote: data.contents.quotes[0]})
    //     console.log(data.contents.quotes[0].quote)
    //   })
    //   .catch(console.log)

      // this is to use a local set of quotes for the freecodecamp challenge
      this.setState({quote: getRandomQuote()})
      this.setState({color: this.getRandomColor()});
    }
   
  render () {
    return (
      <>
      <div class="container" style={{ backgroundColor: this.state.color }}>
        <div class="quote-box" id="quote-box">
          <Quotes quote={this.state.quote} color={this.state.color}/>
          <div class="buttons">
          <a class="" id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <FaTwitter solid class="button" id="tweet-icon" style={{color: this.state.color}}/>
          </a>
          <button class="button" id="new-quote" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>New Quote</button>
        </div>
        </div>
      </div>
    </>
    );
  }
}

export default App;
