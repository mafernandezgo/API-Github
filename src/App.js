import "./App.css"
import Form from "./components/Form"
import { useState } from "react"
import Header from "./components/Header"
import Table from "./components/Table"

function App() {
  const [aspirantData, setAspirantData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    dateBirth: "",
    email: "",
    githubUser: "",
  })
  const [displayHeader, setDisplayHeader] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleChange(e) {
    setAspirantData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      }
    })
  }

  function submitValues() {
    if (
      aspirantData.firstName === "" ||
      aspirantData.lastName === "" ||
      aspirantData.idNumber === "" ||
      aspirantData.dateBirth === "" ||
      aspirantData.email === "" ||
      aspirantData.githubUser === ""
    ) {
      setShowModal(!showModal)
    } else {
      setDisplayHeader(true)
    }
  }

  return (
    <div className="App">
      {!displayHeader ? (
        <Form
          handleChange={handleChange}
          aspirantData={aspirantData}
          submitValues={submitValues}
        />
      ) : (
        <div>
          <Header aspirantData={aspirantData} />
          <Table aspirantData={aspirantData} />
        </div>
      )}
      {showModal && <div>Completar los campos</div>}
    </div>
  )
}

export default App
