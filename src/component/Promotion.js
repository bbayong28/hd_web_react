import { useRef } from 'react';
import YouTube from 'react-youtube';

const Promotion = () => { 

    const MOVIE = useRef();
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
          loop: 1,          
          controls: 0,
          showinfo: 0,
          //autohide: 1,
          //playsinline: 1,
          mute: 1,
          playlist: 'raw3Nu0_mBQ',

      },
    };
    return (
        <section className="Promotion csc">
            <h2>홍보영상</h2>
            <p>건물 특성에 맞는 다양한 제품으로 고객의 요구를 충족시켜드립니다.</p>
            <div className="container">
                <div className="movie" ref={MOVIE}>
                    <YouTube videoId="raw3Nu0_mBQ" opts={opts}  className='u' />
                </div>
                <div className="des">
                    {/* {console.log(MOVIE.current)}
                    <button onClick={()=>MOVIE.current.playVideo()}>play</button> */}
                </div>
            </div>

        </section>
    )
}

export default Promotion;