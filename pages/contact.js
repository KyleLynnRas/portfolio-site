import Nav from "../components/Nav";
import Image from "next/image";
//icons
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import ContactPic from "../public/RobKlug-portpic.jpg";

const Contact = (props) => {
	return (
		<div className="contact-container">
			<Nav />
			<section className="section proj-header">
				<h1 className="contact-title">Contact</h1>
			</section>
			<section className="section contact-info">
				<h1 className="contact-blurb">Let's connect and collaborate!</h1>
				<div className="photo-container">
					<Image
						layout="responsive"
						min-width={200}
						src={ContactPic}
						alt="Kyle with fire rope dart"
					/>
				</div>
				<div className="contact-link-container">
					<a
						href="https://github.com/KyleLynnRas"
						target="_blank"
						rel="noreferrer"
					>
						<GrGithub className="contact-icon" />
						<span>GitHub</span>
					</a>

					<a
						href="https://www.linkedin.com/in/kylelynn-ras/"
						target="_blank"
						rel="noreferrer"
					>
						<GrLinkedin className="contact-icon" />
						<span>LinkedIn</span>
					</a>

					<a
						href="mailto:kylelynn.ras@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<MdEmail className="contact-icon" />
						<span>kylelynn.ras@gmail.com</span>
					</a>
				</div>
			</section>
		</div>
	);
};

export default Contact;
