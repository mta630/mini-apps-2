import React, { Component } from 'react';

export class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const historyNodes = this.props.results.map((entry, i) => {
      return (
        <div className="whole_entry" key={i}>
          <div className="entry_date">{entry.date}</div>
          <div className="entry_description">{entry.description}</div>
        </div>
      );
    });

    return (
      <div id="project-comments" className="commentList">
        <ul>{historyNodes}</ul>
      </div>
    );
  }
}

export default Display;