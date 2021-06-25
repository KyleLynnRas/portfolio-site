import { FaGraduationCap } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";
import { MdPhoneAndroid } from "react-icons/md";
import Highlight from "./Highlight";

const HighlightSection = (props) => {
	return (
		<section className="section highlight-section-container">
			<Highlight icon={<FaGraduationCap />} par="General Assembly Fellow" />
			<Highlight icon={<MdPhoneAndroid />} par="Responsive applications" />
			<Highlight icon={<GiPaintBrush />} par="Visually capitivating designs" />
		</section>
	);
};

export default HighlightSection;
