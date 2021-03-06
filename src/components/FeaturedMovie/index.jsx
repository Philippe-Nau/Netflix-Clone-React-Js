import React from "react";
import { IMG_FEATURED } from "../../utils/network_address";
import "./FeaturedMovie.css"

const FeaturedMovie = ({ item }) => {
    const firstDate = new Date(item.first_air_date);
    const genres = [];
    for (const i in item.genres) {
        genres.push(item.genres[i].name);
    }
    return (
        <section className="featured" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${IMG_FEATURED}${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/wath/${item.id}`} className="featured--watchButton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--myListButton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;