import React from 'react'
import data from '../../Data.json'
import { Container } from 'react-bootstrap'
import styles from './Home.module.css'

function Home(){
    let bikesData = data
    console.log(bikesData)

    return(
        <div>
            <div>
                <h1>Enjoy Riding</h1>
            </div>
            {
                bikesData.map((data)=> {
                    return <div class={styles.display}>
                                <div class={styles.inner}>
                                    <img src={data.img} alt=""/>
                                    <p>Model: {data.bike}</p>
                                    <p>Location: {data.location}</p>
                                    <p>Price/hour: {data.pricePerHour}</p>
                                    <button>Start Ride</button>
                                </div>
                                
                            </div>
                })
            }
            
        </div>
    )
}
export default  Home