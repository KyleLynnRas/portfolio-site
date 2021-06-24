import { data } from "../data";
import Project from "../components/Project";
import Nav from "../components/Nav";

export const getStaticProps = async () => {
	return {
		props: {
			data,
		},
	};
};

const Projects = ({ data }) => {
	return (
		<div className="project-main-container">
			<Nav />
			<section className="proj-header">
				<h1 className="proj-title">Projects</h1>
			</section>
			<section className="section proj-comp-container">
				{data.map((ele, index) => (
					<Project
						key={index}
						title={ele.title}
						summary={ele.summary}
						tech={ele.tech}
						video={ele.video}
						live={ele.liveUrl}
						front={ele.frontendUrl}
						back={ele.backendUrl}
					/>
				))}
			</section>
			<section className="proj-blurb">
				<p>
					These are a few featured projects. Check out what else I've been up to
					on my
					<a
						href="https://github.com/KyleLynnRas"
						target="_blank"
						rel="noreferrer"
					>
						GitHub page
					</a>
				</p>
			</section>
		</div>
	);
};

export default Projects;
