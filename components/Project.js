import ProjNav from "./ProjectNav";

const Project = (props) => {
	return (
		<section key={props.index} class="block">
			<video controls>
				<source type="video/mp4" src={props.video} alt={props.title} />
			</video>
			<div class="content">
				<h2>{props.title}</h2>
				<p>{props.summary}</p>
                <h6>Technologies used:</h6>
				<p>{props.tech}</p>
			</div>
			<ProjNav back={props.back} front={props.front} live={props.live} />
		</section>
	);
};

export default Project;
