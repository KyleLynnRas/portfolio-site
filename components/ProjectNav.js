//icons
import { HiExternalLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

const ProjNav = (props) => {
	return (
		<nav className="proj-nav">
			<a
				className="proj-link"
				href={props.live}
				target="_blank"
				rel="noreferrer"
			>
				<span className="link-icon">
					<HiExternalLink />
				</span>
			</a>
			<a
				className="proj-link"
				href={props.front}
				target="_blank"
				rel="noreferrer"
			>
				<span className="link-icon">
					<AiFillGithub />
				</span>
			</a>
			{props.back ? (
				<a
					className="proj-link"
					href={props.back}
					target="_blank"
					rel="noreferrer"
				>
					<span className="link-icon">
						<AiFillGithub aria-hidden="true" />
					</span>
				</a>
			) : (
				""
			)}
		</nav>
	);
};

export default ProjNav;
