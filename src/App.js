import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import ModalAddNew from "./components/ModalAddNew";
import { useState } from "react";

function App() {
  const [isModalAddNew, setIsModalAddNew] = useState(false);
  const handleClose = () => {
    setIsModalAddNew(false);
  };

  return (
    <div className="app-container">
      <Header />

      <Container>
        <div className="my-3 d-flex justify-content-between align-items-center  ">
          <b>ListUser:</b>
          <button
            className="btn btn-success"
            onClick={() => setIsModalAddNew(true)}
          >
            Add new user
          </button>
        </div>
        <TableUsers />
      </Container>

      <ModalAddNew show={isModalAddNew} handleClose={handleClose} />
    </div>
  );
}

export default App;
