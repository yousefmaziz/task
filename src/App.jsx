
import Header from "./component/header/Header"
import About from "./component/About/About"
import Portfolio from "./component/Portfolio/Portfolio"
import Contact from "./component/Contact/Contact"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Layout from "./component/Layout/Layout"
export default function App() {
  return (


    <>

    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Header/>}/>
        <Route path="/learn-react/src/component/About/About.jsx" element={<About/>}/>
        <Route path="/learn-react/src/component/Portfolio/Portfolio.jsx" element={<Portfolio/>}/>
        <Route path="/learn-react/src/component/Contact/Contact.jsx" element={<Contact/>}/>
      </Route>


    </Routes>
    
    </BrowserRouter>


    </>
  )
}

