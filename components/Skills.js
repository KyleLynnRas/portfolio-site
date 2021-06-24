import Tech from "./Tech";
import { FaReact } from "react-icons/fa";
import {
	DiRuby,
	DiSass,
	DiNodejsSmall,
	DiPostgresql,
	DiHtml5,
	DiGitBranch,
} from "react-icons/di";
import {
	SiRails,
	SiJavascript,
	SiJquery,
	SiMongodb,
	SiCss3,
	SiNextDotJs,
	SiBootstrap,
	SiBulma,
} from "react-icons/si";

const Skills = (props) => {
	return (
		<section className="section skills-container">
			<h2 className="skills-title">Skills</h2>
			<div className="tech-comp-container">
				<Tech icon={FaReact} label="React" />
				<Tech icon={DiRuby} label="Ruby" />
				<Tech icon={SiRails} label="Rails" />
				<Tech icon={DiSass} label="Sass" />
				<Tech icon={SiJavascript} label="JavaScript" />
				<Tech icon={SiJquery} label="jQuery" />
				<Tech icon={SiMongodb} label="MongoDB" />
				<Tech icon={DiNodejsSmall} label="Node.js" />
				<Tech icon={DiPostgresql} label="PostgreSQL" />
				<Tech icon={DiHtml5} label="HTML5" />
				<Tech icon={SiCss3} label="CSS3" />
				<Tech icon={DiGitBranch} label="Git" />
				<Tech icon={SiNextDotJs} label="Next.js" />
				<Tech icon={SiBootstrap} label="Bootstrap" />
				<Tech icon={SiBulma} label="Bulma" />
			</div>
		</section>
	);
};

export default Skills;
