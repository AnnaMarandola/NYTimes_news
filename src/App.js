import React from 'react'
import NewsList from './components/NewsList'
import SearchBar from './components/SearchBar'


class App extends React.Component {
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
      <div className="App">
        <h1>New York Times News</h1>
        <SearchBar 
        change={this.handleChange} 
        submit={this.handleSubmit}
        />
        <NewsList results={this.state.results}/>
      </div>
    );
  }
}

export default App;
