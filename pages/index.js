//imports
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';


function HomePage() {
  const estiloHomePage = { backgroundColor: "white" };

  return (
    <>
      <CSSReset />
      <div style={estiloHomePage}>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists}>
          conteudo
        </TimeLine>
      </div>
    </>
  );
}

export default HomePage;

// Topo
// function Menu() {
//   return (
//     <div>
//       Menu
//     </div>
//   );
// }

const StyledHeader = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    padding-left: 18px;
    width: 100%;
    margin-top: 70px;
  }
  
  .user-info h2,
  p {
    margin: 0;
  }
  
  .text-name {
    padding-left: 12px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src='banner' /> */}
      <section className='user-info'>
        <img src={`http://www.github.com/${config.github}.png`} />
        <div className='text-name'>
          <h2>
            {config.nome}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  );
}

// TimeLine - Trabalhando com props - vem de config.json
function TimeLine(propriedades) {
  const playlistNames = Object.keys(propriedades.playlists);

  return (
    <StyledTimeline>
      <div>
        {playlistNames.map((playlistName) => {
          const videos = propriedades.playlists[playlistName];
          console.log(playlistName);
          console.log(videos);
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                {videos.map((video) => {
                  return (
                    <a href={video.url} key={video.title}>
                      <img src={video.thumb} alt={video.title} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </StyledTimeline>

  );
}

