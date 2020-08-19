import React from 'react'
import { IEpisode } from './interface.app';

export default function EpisodesList(props: any): Array<JSX.Element> {
    const { episodes, toggelFavAction, favourites, store} = props;
    const {state, dispatch} = store;
    return episodes.map((episode: IEpisode) => {
        if (episode.image === null) return;
        return (
            <section key={episode.id} className="episode-box">
                <img
                    src={episode.image.medium}
                    alt={`Rick and Mort ${episode.name}`}
                />
                <div>{episode.name}</div>
                <section style={{display:'flex', justifyContent: 'space-between'}}>
                    <div>
                        Seasion: {episode.season} Number: {episode.number}
                    </div>
                    <button type="button" onClick={() => toggelFavAction(state, dispatch, episode)} className="toggel-btn">
                        {favourites.find(
                            (fav: IEpisode) => fav.id === episode.id
                        )
                            ? "Unfav"
                            : "Fav"}
                    </button>
                </section>
            </section>
        );
    })
}
