import { useHistory } from "react-router-dom";
import { Route } from "react-router";
import LandingPages from "./Pages/HomePage/LandingPages";
import StoryPages from "./Pages/StoryPage/StoryPages";
import LoginPages from "./Pages/LoginPage/LoginPages";
import ProtectedRoutes from "./Configs/ProtectedRoutes";
import SignUp from "./Pages/LoginPage/SignUpPage";
import AddStoriesPage from "./Pages/AddStories/AddStoriesPage";
import StoryPageView from "./Components/StoryPageComponents/StoryPageView";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Route exact path="/SignUp" history={history} component={SignUp} />
      <ProtectedRoutes path={"/Welcome"}>
        <LandingPages history={history}></LandingPages>
      </ProtectedRoutes>
      <ProtectedRoutes path={"/Storys"}>
        <StoryPages history={history}></StoryPages>
      </ProtectedRoutes>
      <ProtectedRoutes path={"/AddStories"}>
        <AddStoriesPage history={history}></AddStoriesPage>
      </ProtectedRoutes>
      <ProtectedRoutes path={"/view"}>
        <StoryPageView history={history}></StoryPageView>
      </ProtectedRoutes>
      <Route exact path="/" history={history} component={LoginPages} />
    </div>
  );
}

export default App;
