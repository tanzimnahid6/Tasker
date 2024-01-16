import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskSection from "./components/TaskSection";


const App = () => {
  return (
    <div>
      <Header></Header>
     <div className="flex flex-col justify-center items-center">
     <Hero></Hero>
      <TaskSection></TaskSection>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default App;