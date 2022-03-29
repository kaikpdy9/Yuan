import DotRing from "./components/dotRing/dotRing";
import MouseProvider from "./context/mouseContext"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./components/layout";
import Account from "./pages/account";
import DesignSystem from "./pages/designSystem";
import SignUp from "./pages/sign/signUp";
import Register from "./pages/sign/signUp/register";
import Reviews from "./pages/reviews";
import SignIn from "./pages/sign/signIn";
import AuthContextProvider from "./context/authContext";
import Preload from "./pages/preload";
import AnimationSvg from "./pages/animationSvg";


function App() {
  return (
      <MouseProvider>
      <DotRing/>
      <Router basename="/">
          <Switch>
          <Route exact path={'/animation'} component={AnimationSvg} />
          <Route exact path={'/preload'} component={Preload} />
          <AuthContextProvider>
          <Layout>
              <Route exact path={'/'} component={HomePage} />
              <Route exact path={'/account'} component={Account} />
              <Route exact path={'/design'} component={DesignSystem} />
              <Route exact path={'/sign-up'} component={SignUp} />
              <Route exact path={'/sign-in'} component={SignIn} />
              <Route exact path={'/register'} component={Register} />
              <Route exact path={'/reviews'} component={Reviews} />
          </Layout>
          </AuthContextProvider>
          </Switch>
      </Router>
      </MouseProvider>
  );
}

export default App;
