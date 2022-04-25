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
import SvgWork from "./pages/svgWork";
import PixelWork from "./pages/pixelWork";
import PreloadContextProvider from "./context/preloadContext";

function App() {
  return (
      <MouseProvider>
      <DotRing/>
      <AuthContextProvider>
       <PreloadContextProvider>
      <Router basename="/">
          <Switch>
          <Route exact path={'/'} component={AnimationSvg} />
          <Route exact path={'/preload'} component={Preload} />
          <Route exact path={'/svg-work'} component={SvgWork}/>
          <Route exact path={'/pixel-work'} component={PixelWork}/>
          <Layout>
              <Route exact path={'/account'} component={Account} />
              <Route exact path={'/design'} component={DesignSystem} />
              <Route exact path={'/sign-up'} component={SignUp} />
              <Route exact path={'/sign-in'} component={SignIn} />
              <Route exact path={'/register'} component={Register} />
              <Route exact path={'/reviews'} component={Reviews} />
          </Layout>
          </Switch>
      </Router>
       </PreloadContextProvider>
      </AuthContextProvider>
      </MouseProvider>
  );
}

export default App;
