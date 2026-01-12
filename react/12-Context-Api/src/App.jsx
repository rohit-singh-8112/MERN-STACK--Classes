
import Welcome from "./component/welcome";
import ThemeChange from "./component/themeChange";
import {ThemeProvider} from "./storage/ThemeContext";
import Dark from "./component/dark";

function App() {



  return (
    <ThemeProvider  >
      <Dark>
        <Welcome />
        <ThemeChange />
     
      </Dark>
    </ThemeProvider>
  )
}

export default App
