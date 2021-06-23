import Head from "next/head";

const HeadComp = () => {
	return (
		<Head>
			<title>Kyle Rasmussen</title>
			<meta name="description" content="Full Stack Engineer portfolio" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			></meta>
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
			></link>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default HeadComp;
