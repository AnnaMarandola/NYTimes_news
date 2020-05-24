import React from 'react'
import NewsList from './NewsList'
import SearchBar from './SearchBar'
import './Main.css'
import BigLogo from '../assets/nyt-logo.png'
import { Button } from 'reactstrap'



class Main extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?',
      APIkey: 'flRhW6GhkksU0brJvVF16SOZQv2G9zld',
      input: '',
      results: [],
    };
  }

  handleChange = (e) => {
    this.setState ({
      input: e.target.value,
    });
    // console.log(e.target.input)
  }

  handleSubmit = () => {
    console.log (this.state.input)
    this.query ()
    this.setState({input: ''})
  }

  handleClear = () => {
    this.setState({results: []})
  }

  query = () => {
    let url =
      this.state.baseURL +
      'q=' +
      this.state.input +
      '&api-key=' +
      this.state.APIkey;
    fetch (url)
      .then (response => {
        if (!response.ok) {
          console.log (response.statusText);
          return;
        }
        return response.json ();
      })
      .then (data => {
        let docs = data.response.docs;
        let results = docs.map (doc => {
          let url = doc.web_url;
          let headline = doc.headline;
          let main = headline.main;
          let date = doc.pub_date;
          let snippet = doc.snippet;
          let byline = doc.byline;
          let author = byline.original;
          let section = doc.section_name;
          let id = doc._id;
          return {
            id: id,
            title: main,
            date: date,
            url: url,
            author: author,
            sumUp: snippet,
            category: section,
          };
        });
        this.setState ({results: results});
        console.log (data.response.docs);
      });
  };

  render () {
    return (
      <div className="app">
      <div className="top-bar"></div>
        <div className="curve">
        <SearchBar 
        change={this.handleChange} 
        submit={this.handleSubmit}
        reset={this.handleChange}
        />
        <Button className={  this.state.results.length > 0 ? "clear-btn" : "clear-btn-off"} onClick={this.handleClear}>clear</Button>
        </div>
        <div className="invert-curve">
        <NewsList results={this.state.results}/>
        <div className="logo-container">
        <img  className="big-logo" src={BigLogo} alt="Nytimes Logo PNG" />
        </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default Main;
