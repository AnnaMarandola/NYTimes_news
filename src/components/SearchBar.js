import React, {Component} from 'react'
import { Button, Form, Label, Input } from 'reactstrap'
import './SearchBar.css'
import Title from "../assets/NYT-title.png"


export default class SearchBar extends Component {
  render () {
    return (
      <nav className="header">
        <img  className="nyt-title" src={Title} alt="Nytimes Logo PNG" />
        <Form
          className="search-bar"
          onSubmit={e => {
            e.preventDefault ();
            this.props.submit ();
          }}
        >
        <Label className="form-label" for="exampleSeach">Get articles about :</Label>
          <div className="card-body">
            <div className="col-auto">
              <i className="searched-text" />
            </div>
            <div className="col">
              <Input
                className="form-control"
                type="search"
                placeholder="Search..."
                onChange={e => this.props.change (e)}
                value={this.props.input}
              />
            </div>
            <div className="btn-container">
              <Button className="search-btn">Search</Button>
            </div>
          </div>
        </Form>
      </nav>
    );
  }
}
