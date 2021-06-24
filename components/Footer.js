//icons
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<footer class="footer">
			<div class="content has-text-centered">
				<p className="footer-icon-container">
					<a
						href="https://github.com/KyleLynnRas"
						target="_blank"
						rel="noreferrer"
					>
						<GrGithub className="footer-icon" />
					</a>
					<a
						href="https://www.linkedin.com/in/kylelynn-ras/"
						target="_blank"
						rel="noreferrer"
					>
						<GrLinkedin className="footer-icon" />
					</a>
					<a
						href="mailto:kylelynn.ras@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<MdEmail className="footer-icon" />
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
