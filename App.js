import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
    return (
    <div>
      <Header />
        
      <input type="checkbox" />
      <p>Cook</p>
      
      <input type="checkbox" />
      <p>Sing</p>
      
      <input type="checkbox" />
      <p>Dance</p>
      
      <input type="checkbox" />
      <p>Eat</p>
        
      <MainContent />
      <Footer />
   </div>
    )
}

export default App
