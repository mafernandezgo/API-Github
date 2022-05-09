import { useEffect, useState } from "react"
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr"
import { AiFillCaretDown } from "react-icons/ai"
import "./table.css"
import "./searched.css"
import axios from "axios"

export default function Table({ aspirantData }) {
  const [repos, setRepos] = useState([])
  const [displayRepos, setDisplayRepos] = useState(repos)
  const [prevValue, setPrevValue] = useState(0)
  const [secValue, setSecValue] = useState(5)
  const [sortedFeature, setSortedFeature] = useState("name")
  const [sortingStyle, setSortingStyle] = useState(false)
  const [showNextBtn, setShowNextBtn] = useState(true)
  const [showPrevBtn, setShowPrevBtn] = useState(false)

  const [searchedValue, setSeachedValue] = useState("")

  useEffect(() => {
    // fetch(`https://api.github.com/users/${aspirantData.githubUser}/repos`)
    axios
      .get(`https://api.github.com/users/${aspirantData.githubUser}/repos`)
      .then((response) => {
        setRepos(
          response.data.sort((a, b) => {
            let valueA
            let valueB

            valueA = a[sortedFeature]
            valueB = b[sortedFeature]

            if (sortingStyle) {
              if (valueA < valueB) {
                return -1
              }
              if (valueA > valueB) {
                return 1
              }
              return 0
            }
            if (valueA < valueB) {
              return 1
            }
            if (valueA > valueB) {
              return -1
            }
            return 0
          })
        )
        setDisplayRepos(response.data.slice(prevValue, secValue))
      })
  }, [secValue, sortedFeature, sortingStyle])

  function handleNext() {
    setPrevValue(prevValue + 5)
    setSecValue(secValue + 5)
    setShowPrevBtn(true)
    if (secValue + 5 >= repos.length) {
      setShowNextBtn(false)
    }
  }

  function handlePrev() {
    setPrevValue(prevValue - 5)
    setSecValue(secValue - 5)
    setShowNextBtn(true)
    if (prevValue - 5 <= 0) {
      setShowPrevBtn(false)
    }
  }

  function handleSort(event) {
    setSortedFeature(event.target.dataset.name)
    setPrevValue(0)
    setSecValue(5)
    if (prevValue - 5 <= 0) {
      setShowPrevBtn(false)
    }
    setSortingStyle(!sortingStyle)
  }

  function handleChange(e) {
    setSeachedValue(e.target.value)
  }

  const a = repos.map((x) => {
    if (x.name.includes(searchedValue)) {
      return <li key={x.id}>{x.name}</li>
    }
  })

  const b = a.filter((name) => name !== undefined).splice(0, 5)

  console.log(repos)

  return (
    <section className="table">
      <div className="searched">
        <input
          className="searched-input"
          onChange={handleChange}
          placeholder="Buscar Repositorio"
          type="text"
        />
        <ul>{searchedValue.length >= 3 && b}</ul>
      </div>

      <table>
        <thead>
          <tr>
            <th data-name="name" onClick={handleSort}>
              Nombre
              <button
                className={`sortedButton ${
                  sortedFeature === "name" && sortingStyle ? "rotate" : ""
                }`}
              >
                <AiFillCaretDown />
              </button>
            </th>
            <th data-name="description" onClick={handleSort}>
              Descripción
              <button
                className={`sortedButton ${
                  sortedFeature === "description" && sortingStyle
                    ? "rotate"
                    : ""
                }`}
              >
                <AiFillCaretDown />
              </button>
            </th>
            <th data-name="language" onClick={handleSort}>
              Lenguaje
              <button
                className={`sortedButton ${
                  sortedFeature === "language" && sortingStyle ? "rotate" : ""
                }`}
              >
                <AiFillCaretDown />
              </button>
            </th>
            <th data-name="default_branch" onClick={handleSort}>
              Rama por Defecto
              <button
                className={`sortedButton ${
                  sortedFeature === "default_branch" && sortingStyle
                    ? "rotate"
                    : ""
                }`}
              >
                <AiFillCaretDown />
              </button>
            </th>
            <th data-name="html_url" onClick={handleSort}>
              Url git
              <button
                className={`sortedButton ${
                  sortedFeature === "" && sortingStyle ? "rotate" : ""
                }`}
              >
                <AiFillCaretDown />
              </button>
            </th>
          </tr>
        </thead>
        {displayRepos.map((x) => (
          <tr key={x.id}>
            <td>{x.name}</td>
            <td>{x.description}</td>
            <td>{x.language}</td>
            <td>{x.default_branch}</td>
            <td>
              <a href={x.html_url} target="_blank">
                {x.html_url}
              </a>
            </td>
          </tr>
        ))}
      </table>
      <footer className="footer-buttons">
        <button className={`${!showPrevBtn && "hidden"}`} onClick={handlePrev}>
          <GrLinkPrevious />{" "}
        </button>
        <button className={`${!showNextBtn && "hidden"}`} onClick={handleNext}>
          <GrLinkNext />
        </button>
      </footer>
    </section>
  )
}
