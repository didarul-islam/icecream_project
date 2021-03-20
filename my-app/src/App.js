import React from 'react'
import '../src/App.css'
import Layout from './components/Layout/Layout'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


function App() {
  return (
    <Layout>
      <Header/>
      <Body/>
      <Footer/>
    </Layout>
  );
}

export default App;
