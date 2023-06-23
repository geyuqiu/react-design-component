import "./styles.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import allBreeds from "./data/breeds";

const selectedBreed = "basenji";
const breedImage = "https://images.dog.ceo/breeds/basenji/n02110806_4012.jpg";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Sidebar
          allBreeds={Object.keys(allBreeds.message).slice(0, 10)}
          selectedBreed={selectedBreed}
        />
        <Main selectedBreed={selectedBreed} breedImage={breedImage} />
      </div>
      <Footer />
    </div>
  );
}
