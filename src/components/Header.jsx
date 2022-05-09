import {
  HiOutlineIdentification,
  HiOutlineCalendar,
  HiOutlineMail,
} from "react-icons/hi"
import { AiFillGithub } from "react-icons/ai"
import "./header.css"

export default function Header({ aspirantData }) {
  return (
    <header>
      <h2>
        {aspirantData.firstName} {aspirantData.lastName}
      </h2>
      <ul>
        <li>
          <HiOutlineIdentification /> {aspirantData.idNumber}
        </li>
        <li>
          <HiOutlineCalendar /> {aspirantData.dateBirth}
        </li>
        <li>
          <HiOutlineMail /> {aspirantData.email}
        </li>
        <li>
          <AiFillGithub /> {aspirantData.githubUser}
        </li>
      </ul>
    </header>
  )
}
