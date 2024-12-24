import React from 'react'
import images from '../assets/images.jpg'
import RecipeItem from '../components/RecipeItem'

function Home() {
    return (
        <>
            <section className='home'>
                <div className='left'>
                    <h1>Food Recipe</h1>
                    <h5>It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is that
                        it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English. Many desktop publishing packages and
                        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                        ipsum' will uncover many web sites still in their infancy.</h5>
                    <button>Share your recipe</button>
                </div>
                <div className='right'>
                    <img src={images} width="320px" height="300px"></img>
                </div>
            </section>
            <div className='bg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,192L30,197.3C60,203,120,213,180,224C240,235,300,245,360,245.3C420,245,480,235,540,208C600,181,660,139,720,106.7C780,75,840,53,900,53.3C960,53,1020,75,1080,96C1140,117,1200,139,1260,128C1320,117,1380,75,1410,53.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,
            // 320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>

            <div className='recipe'>
            <RecipeItem/>
            </div>
        </>
    )
}

export default Home
