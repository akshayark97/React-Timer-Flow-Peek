import CustomPieChart from "./components/Chart/Chart";
import Header from "./components/Header/Header";
import { MainContainer } from "./main";

export default function App() {
  return (
    <MainContainer>
      <Header />
      <CustomPieChart />
    </MainContainer>
  );
}
