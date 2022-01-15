import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../common/breadcrumb";
import axios from 'axios'
import {StickyNote,AddNewNote} from '../../constant'

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/sticky.json`).then(res => setNotes(res.data))
  }, []);


  //Add new sticky note
  const addStickyNote = () => {
    setNotes([...notes, { id: notes.length + 1, isDeleted: false }]);
  };

  //Delete a particulr sticky note
  const deleteNote = (note) => {
    note.isDeleted = true;
  };

  return (
    <Fragment>
      <Breadcrumb title="Sticky Notes" parent="Advance" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>
                  {StickyNote}
                  <a
                    href="# "
                    onClick={addStickyNote}
                    className="btn btn-primary pull-right m-l-10"
                  >
                    {AddNewNote}
                  </a>
                </h5>
              </div>
              <div className="card-body">
                <div className="sticky-note" id="board">
                  {notes.map((data, index) => (
                    <div
                      className={`note ui-draggable ui-draggable-handle ${
                        data.isDeleted ? "d-none" : ""
                      }`}
                      key={index}
                    >
                      <a
                        href="# "
                        onClick={() => deleteNote(data)}
                        className="button remove"
                      >
                        X
                      </a>
                      <div className="note_cnt">
                        <textarea
                          className="title"
                          placeholder="Enter note title"
                          style={{ height: "64px" }}
                        ></textarea>
                        <textarea
                          className="cnt"
                          placeholder="Enter note description here"
                          style={{ height: "200px" }}
                        ></textarea>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StickyNotes;
