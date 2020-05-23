import React, {Component} from 'react';

export default class NewsList extends Component {
  render () {
    return (
      <div className="container">
        <div className="r">
          <div className="c">
            <ul>
              {this.props.results.map (result => {
                return (
                  <li key={result.id}>
                    <p>{result.category}</p>
                    <a href={result.url} target="_blank"rel="noopener noreferrer">
                      {result.title}
                    </a>
                    <p>{result.sumUp}</p>
                    <p>{result.author}</p>
                    <p>{result.date}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
