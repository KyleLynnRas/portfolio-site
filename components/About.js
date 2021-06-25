import HighlightSection from "./HighlightSection";

const About = () => {
	return (
		<section className="section about-container">
			<div className="about-top-section">
				<img className="about-img" src="/kyle-bw.jpg" alt="headshot of Kyle" />
				<div className="about-text-container">
					<h2 className="about-title">About</h2>
					<p className="about-text">
						Full stack engineer with a creative background and passion for
						building visually captivating applications using technologies such
						as React, Node.js, JavaScript, Ruby, Ruby on Rails, HTML, CSS,
						Express, MongoDB/Mongoose, PostgreSQL and Next.js. With years of
						experience in client relations, I have developed excellent
						communication and creative problem solving skills. I excel at
						working with clients to understand their needs, the logistics needed
						to meet them and how to bring their vision to life.
					</p>
				</div>
			</div>
			<HighlightSection />
		</section>
	);
};

export default About;
