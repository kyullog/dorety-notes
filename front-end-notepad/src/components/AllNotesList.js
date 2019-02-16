import React, { Component } from "react";

import { connect } from "react-redux";
import { getList } from "../actions";

import NoteThumb from "./NoteThumb";

import "../styles/AllNotesList.css";

class AllNotesList extends Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <div className="main-view">
        <h2 className="section-header">Your Notes:</h2>
        <div className="list-wrapper">
          {this.props.notes.map(note => {
            return <NoteThumb {...note} key={note._id} {...this.props} />;
          })}
        </div>
      </div>
    );
  }
}

const mst3k = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mst3k,
  { getList }
)(AllNotesList);
