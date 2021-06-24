//components
import About from "../components/About";
import Skills from "../components/Skills";
import Nav from "../components/Nav";

export default function Home() {
	console.log(
		"~*~*~*~*~*~*~*~*~~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~"
	);
	console.log(
		"~*~*~*~*~*~*~*~*~ Thanks for taking a look at my portfolio. Lets collaborate! ~*~*~*~*~*~*~*~*~"
	);
	console.log(
		"~*~*~*~*~*~*~*~*~~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~"
	);
	return (
		<div>
			<section className="header">
				<Nav />
				<h1 className="home-title">Kyle Rasmussen</h1>
				<h3 className="home-sub">Full Stack Engineer</h3>
			</section>
			<About />
			<Skills />
		</div>
	);
}
