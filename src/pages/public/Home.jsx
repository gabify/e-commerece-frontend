import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import Main from "../../components/Main.jsx";
import Loading from "../others/Loading.jsx";

const Home = () =>{
    return(
        <>
        <Header />
        
        <Main>
            <Loading />
        </Main>

        <Footer />
        </>
    )
}

export default Home;