import NavBar from "../components/NavBar"
import JumboTron from "../components/JumboTron"
import {CardList} from "../components/CardList"
import {Footer} from "../components/Footer"
import "../styles/pages/Home.css"

const Home = () => {

	return(
		<>
			
			<NavBar />
			
			<div class="container">
			<JumboTron />
			<CardList / >
			
			</div>

			<Footer / >




		</>
	)


}

export default Home;