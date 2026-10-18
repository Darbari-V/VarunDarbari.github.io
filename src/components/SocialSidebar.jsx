import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialSidebar(){
    return(
        <div className="social-sidebar">
            <a href="https://github.com/Darbari-V" target="_blank" rel = "noreferrer" aria-label="GitHub">
                <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/varun-darbari" target="_blank" rel = "noreferrer" aria-label="LinkedIn">
                <FaLinkedin/>
            </a>
            <a href="mailto:work.varundarbari@gmail.com" aria-label="Email">
                <FaEnvelope />
            </a>
        </div>
    )
}

export default SocialSidebar