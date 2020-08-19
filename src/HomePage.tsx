import React from 'react';
import { Store } from "./Store";
import { IEpisodeProps } from "./interface.app";
import { fetchDataAction, toggelFavAction} from './Actions'

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function HomePage() {
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch);
    })

    


    const props: IEpisodeProps = {
      episodes: state.episodes,
      store: { state, dispatch },
      toggelFavAction,
      favourites: state.favourites
    };
    return (
       <React.Fragment>
            <React.Suspense fallback={<div>Loading....</div>}>
                <section className="episode-layout">
                    <EpisodeList {...props} />
                </section>
            </React.Suspense>
       </React.Fragment>
    )
}