import React from 'react'
import { Col, Row, Statistic, Typography } from "antd"
import "./Homepage.css";
import { useGetCryptosQuery } from '../services/CryptoAPI';
import millify from 'millify';
import { Link } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const Homepage = () => {
    const { Title } = Typography;
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if (isFetching) return "Loading..."
    return (
        <>
            <div>
                <Title level={2} className='heading' style={{ paddingTop: "24px" }}>Global Crypto Exchange</Title>
                <Row>
                    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                    <Col span={12}><Statistic title="Total Exchange" value={millify(globalStats.totalExchanges)} /></Col>
                    <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                    <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                    <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
                </Row>
                <div className='home-heading-container' style={{marginBottom:"34px"}}>
                    <Title className='home-title' level={2}>Top 10 Cryptocurrencies</Title>
                    <Title level={5} className='home-title'><Link to='/cryptocurrencies' style={{ fontWeight:"400", color: "#A6ADB4", backgroundColor: "#001529", padding: "7px 14px", borderRadius: "5px" }}>Show All</Link></Title>
                </div>
                <Cryptocurrencies simplified/>
                <div className='home-heading-container'>
                    <Title className='home-title' level={2}>Latest Cryptonews</Title>
                    <Title level={5} className='home-title'><Link to='/news' style={{ fontWeight:"400", color: "#A6ADB4", backgroundColor: "#001529", padding: "7px 14px", borderRadius: "5px" }}>Show All</Link></Title>
                </div>
                <News/>
                
            </div>
        </>
    )
}

export default Homepage
