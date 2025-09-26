import MainRespionse from "../components/Home/MainResponse";
import SearchBar from "../components/Home/SearchBar";
import HomeNB from "../components/NavBar/HomeNB";
const Home = () => {
  return (
    <div className=" p-5 flex-1 ml-80 h-screen overflow-x-hidden">
      <HomeNB />
      <div>
        <MainRespionse />
        <SearchBar />
      </div>
    </div>
  );
};
export default Home;
