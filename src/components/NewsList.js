import React, {Component} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap'
import './NewsList.css'

export default class NewsList extends Component {
  render () {
    return (
      <div className="container">
        <Card className="card-container">
          {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
          <CardBody className="card-body">
              {this.props.results.map (result => {
                return (
                  <li key={result.id} className="li">
                  <CardSubtitle className="category">{result.category}</CardSubtitle>
                  <CardTitle className="title">{result.title}</CardTitle>
                  <CardText className="sum-up">{result.sumUp}</CardText>
                    <a href={result.url} target="_blank"rel="noopener noreferrer">
                    <Button className="read-btn">Read this article</Button>
                    </a>
                  <CardText className="author">{result.author}</CardText>
                  <CardText className="date">{result.date}</CardText>
                  </li>
                );
              })}
            </CardBody>
            </Card>
      </div>
    );
  }
}
