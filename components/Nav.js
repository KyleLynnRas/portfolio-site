import Link from "next/link";

const Nav = (props) => {
	return (
		<nav className="navbar">
			<Link className="nav-link" href="/">
				<span>ABOUT</span>
			</Link>
			<Link className="nav-link" href="/projects">
				<span>PROJECTS</span>
			</Link>
			<Link className="nav-link" href="/contact">
				<span>CONTACT</span>
			</Link>
			<a
				className="nav-link"
				href="https://drive.google.com/file/d/1zWAeCyYkhwLIOP_sE51NgwlL2h6ZFKqw/view?usp=sharing"
				target="_blank"
				rel="noreferrer"
			>
				RESUME
			</a>
		</nav>
	);
};

export default Nav;
