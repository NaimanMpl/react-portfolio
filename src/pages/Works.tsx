import evylBg from '../assets/evyl.png';
import mcCloneBg from '../assets/minecraft_clone_bg.png';
import ogggBg from '../assets/og-gg_bg.png';
import tournamentggBg from '../assets/tournamentgg_bg.png';
import tvcyuBg from '../assets/tvcyu_bg.png';
import Curve from '../components/Curve';
import Header from '../components/Header';
import WorkCard from '../components/WorkCard';
import AnimatedContainer from '../components/animations/AnimatedContainer';
import AnimatedTitle from '../components/animations/AnimatedTitle';
import '../styles/Works.scss';

const Works = () => {

  return (
    <Curve>
      <Header />
      <section id="works">
        <AnimatedTitle label='If you have time to worry, then you have time to run.' />
        <AnimatedContainer>
          <p>- Sonic The Hedgehog</p>
          <p className='works-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a arcu quis nulla sodales gravida ut et diam.</p>
          <h2>Selected Works</h2>
          <div className="works-container">
            <WorkCard
              index={1}
              title='Minecraft Clone'
              description='A Minecraft Clone made with love.'
              annotation='C++, OpenGL'
              background={mcCloneBg}
              href='/works/minecraft-clone'
            />
            <WorkCard
              index={2}
              title='Evyl'
              description='A Java 2D Adventure game.'
              annotation='Java, School Project'
              background={evylBg}
              href='/works/evyl'
            />
            <WorkCard
              index={3}
              title='OG.GG'
              description="League of Legends player's statistic web app."
              annotation='PHP, API Rest, MySQL, School Project'
              background={ogggBg}
              href='/works/og-gg'
            />
            <WorkCard
              index={4}
              title='TV Cyu'
              description="React web app displaying CY Cergy Paris Universite's news."
              annotation='React, NodeJS, API Rest, Stage'
              background={tvcyuBg}
              href='/works/tv-cyu'
            />
            <WorkCard
              index={5}
              title='Tournament GG'
              description='React web app displaying online tournaments stored on a database.'
              annotation='React, NodeJS, Typescript, PostgreSQL, School Project'
              background={tournamentggBg}
              href='/works/tournament-gg'
            />
          </div>
        </AnimatedContainer>
      </section>
    </Curve>
  );
}

export default Works;