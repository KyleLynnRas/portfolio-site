import { data } from "../data";
import Project from "../components/Project";
import HeadComp from "../components/HeadComp";

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
            <HeadComp />
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
		</div>
	);
};

export default Projects;
