import React from 'react'

const CardInfo = (props) => {
    const {data, index} = props
    return(
        <div className="card">
            <section>
                <h1>{data[index].name.first} {data[index].name.last}</h1> 
                <p>{data[index].id}/25</p>
            </section>

           <section>From: {data[index].city}, {data[index].country}</section>
           <section>Job Title: {data[index].title}</section>
           <section>Employer: {data[index].employer}</section>
           <section>Favorite Movies:</section>
           <ol>{data[index].favoriteMovies.map(favoriteMovies=><li>{favoriteMovies}</li>)}</ol>


        </div>
    )
}
export default CardInfo