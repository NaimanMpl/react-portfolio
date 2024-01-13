import evylBg from '../assets/evyl.png';
import mcCloneBg from '../assets/minecraft_clone_bg.png';
import ogggBg from '../assets/og-gg_bg.png';
import tournamentggBg from '../assets/tournamentgg_bg.png';
import tvcyuBg from '../assets/tvcyu_bg.png';
import AnimatedParagraph from '../components/AnimatedParagraph';
import AnimatedTitle from '../components/AnimatedTitle';
import WorkCard from '../components/WorkCard';
import '../styles/Works.scss';

const Works = () => {

  return (
    <section id="works">
      <AnimatedTitle label='If you have time to worry, then you have time to run.' />
      <AnimatedParagraph
        delay={.2}
        label='- Sonic The Hedgehog' 
      />
      <AnimatedParagraph
        delay={.4}
        className='works-description'
        label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a arcu quis nulla sodales gravida ut et diam.' 
      />
      <h2>Selected Works</h2>
      <div className="works-container">
        <WorkCard
          index={1}
          title='Minecraft Clone'
          description='A Minecraft Clone made with love.'
          annotation='C++, OpenGL'
          background={mcCloneBg}
        />
        <WorkCard
          index={2}
          title='Evyl'
          description='A Java 2D Adventure game.'
          annotation='Java, School Project'
          background={evylBg}
        />
        <WorkCard
          index={3}
          title='OG.GG'
          description="League of Legends player's statistic web app."
          annotation='PHP, API Rest, MySQL, School Project'
          background={ogggBg}
        />
        <WorkCard
          index={4}
          title='TV Cyu'
          description="React web app displaying CY Cergy Paris Universite's news."
          annotation='React, NodeJS, API Rest, Stage'
          background={tvcyuBg}
        />
        <WorkCard
          index={5}
          title='Tournament GG'
          description='React web app displaying online tournaments stored on a database.'
          annotation='React, NodeJS, Typescript, PostgreSQL, School Project'
          background={tournamentggBg}
        />
      </div>
    </section>
  );
}

export default Works;