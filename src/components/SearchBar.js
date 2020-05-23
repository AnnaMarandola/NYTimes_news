import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <nav>
            <form
              className="search-bar"
              onSubmit={e => {e.preventDefault() ; this.props.submit()}} >
              <div className="card-body">
                <div className="col-auto">
                  <i className="searched-text" />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search..."
                    onChange={(e) => this.props.change(e)}
                    value={this.props.input}
                  />
                </div>
                <div className="col-auto">
                  <button className="search-btn">Search</button>
                </div>
              </div>
            </form>
          </nav>
        )
    }
}

