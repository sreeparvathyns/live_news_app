import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const ViewAllProducts = () => {
    const [news, changenews] = useState(
        { "status": "ok", "totalResults": 34, "articles": [] })
    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then(
            (response) => {
                changenews(response.data)
            }
        ).catch()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {news.articles.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <div class="card-header">
                                                    Featured
                                                </div>
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.author}</h5>
                                                    <p class="card-text">{value.title}</p>
                                                    <p class="card-text">{value.description}</p>
                                                
                                                    <img src={value.urlToImage} class="card-img-top" alt="..."></img>
                                                    <a href="#" class="bn btn-primary">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ViewAllProducts