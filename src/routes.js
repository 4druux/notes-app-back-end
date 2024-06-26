const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require("./handler");

const routes = [
  // POST
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  // GET ALL
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  // GET BY ID
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  // PUT
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },
  // DELETE
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
