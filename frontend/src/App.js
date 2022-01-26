import logo from './logo.svg';
import DotRing from "./components/dotRing/dotRing";
import MouseProvider from "./context/mouseContext"


function App() {
  return (
    <MouseProvider>
      <div>123</div>
       <div>
           <DotRing/>
       </div>
    </MouseProvider>
  );
}

export default App;
