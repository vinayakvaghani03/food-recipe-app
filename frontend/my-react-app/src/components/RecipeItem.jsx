import React from 'react'
import { useLoaderData } from 'react-router-dom'
import images2 from '../assets/images2.jpg'
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

function RecipeItem() {
    const allRecipes = useLoaderData()
    console.log(allRecipes)
    return (
        <>
            <div className='card-container'>
                {
                    allRecipes?.map((item, index) => {
                        return (
                            <div key={index} className='card'>
                                <img src={images2} width="120px" height="100px"></img>
                                <div className='card-body'>
                                    <div className='title'>{item.title}</div>
                                    <div className='icons'>
                                        <div className='time'><BsFillStopwatchFill />{item.time}</div>
                                        <FaHeart />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RecipeItem
