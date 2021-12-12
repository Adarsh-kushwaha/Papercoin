import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/CryptoAPI'
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
    const [crypto, setCrypto] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        setCrypto(filteredData);
    }, [searchTerm, cryptoList])

    if (isFetching) {
        return <Loader/>
    }

    return (
        <>
            {!simplified && (
                <div className='search-crypto '>
                    <Input placeholder='serach by cryptoname' onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            )}

            <Row gutter={[28, 28]} className='crypto-card-container'>
                {crypto?.map((currency) => (

                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card hoverable title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl} alt={currency.name} />}>
                                <p>Price: ${millify(currency.price)}</p>
                                <p>Market Cap: ${millify(currency.marketCap)}</p>
                                <p>Fluctuation: <strong style={{ color: currency.change > 0 ? "green" : "red" }}>{millify(currency.change)}%</strong></p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default Cryptocurrencies
