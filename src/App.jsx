import "./App.css";
import HeroPage from "./components/HeroPage.jsx";
import WorkManagement from "./components/WorkManagemnt.jsx";
import Extension from "./components/Extension.jsx";
import Customise from "./components/Customise.jsx";
import Pricing from "./components/Pricing.jsx";
import DataSponsor from "./components/DataSponsor.jsx";
import Applications from "./components/Applications.jsx";
import FreeTrial from "./components/FreeTrial.jsx";
import Testimonial from "./components/Testimonial.jsx";
import NavBar from "./Mobileviews/MobileHero.jsx";

function App() {
	return (
		<>
			<HeroPage />
			<WorkManagement />
			<Extension />
			<Customise />
			<Pricing />
			<DataSponsor />
			<Applications />
			<FreeTrial />
			<Testimonial />
		</>
	);
}

export default App;
