import ryliLogo from "../assets/ryliLogo.png"
import { FaLinkedin} from "react-icons/fa";
import { FaGithub} from "react-icons/fa";

const NavBar = () => {
    const linkedInClickHandler = () => {
        window.open("https://www.linkedin.com/in/ryli-davis-b48354130/", "_blank");
    }
    const githubClickHandler = () => {
        window.open("https://github.com/CodeRyliCode", "_blank");
    }
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={ryliLogo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin className="clickable-icon" onClick={linkedInClickHandler}/>
                <FaGithub className="clickable-icon" onClick={githubClickHandler}/>
            </div>
        </nav>
    )
}
export default NavBar
