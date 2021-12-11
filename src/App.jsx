import React from 'react';
import { Routes, Route,} from "react-router-dom";
import { Layout} from 'antd';
import Navbar from './components/Navbar';
import Homepage from "./components/Homepage";
import Cryptodetail from "./components/Cryptodetail"
import Exchanges from "./components/Exchanges";
import News from "./components/News"
import "./App.css";
import Cryptocurrencies from './components/Cryptocurrencies';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout >
                    <div className="homepage">

                        <Routes>
                            <Route path="/" element={<Homepage />} />


                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />


                            <Route path="/crypto/:coinId" element={<Cryptodetail />} />


                            <Route path="/exchanges" element={<Exchanges />} />


                            <Route path="/news" element={<News />} />


                        </Routes>

                    </div>
                </Layout>
                <div className="footer" style={{textAlign:"center", color:"white"}}>
                    Made by Adarsh Kushwaha 🤑
            </div>
            </div>
            
        </div>
    )
}

export default App
