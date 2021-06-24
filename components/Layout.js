import Footer from "./Footer";
import HeadComp from "./HeadComp";

const Layout = ({ children }) => {
	return (
		<>
			<HeadComp />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
