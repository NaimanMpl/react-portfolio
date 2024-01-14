import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef } from 'react';
import evylBg from '../assets/evyl.png';
import evylBg1 from '../assets/evyl_bg_1.png';
import evylBg2 from '../assets/evyl_bg_2.png';
import Curve from "../components/Curve";
import Header from "../components/Header";
import MagneticButton from '../components/MagneticButton';
import WorkPageTag from '../components/WorkPageTag';
import AnimatedContainer from "../components/animations/AnimatedContainer";
import AnimatedTitle from "../components/animations/AnimatedTitle";
import '../styles/WorkPage.scss';

interface WorkPageProps {
  title: string,
  subtitle: string,
  description: string
  date: string,
  languages: string[],
  location: string
}

const WorkPage = (props: WorkPageProps) => {

  const { title, subtitle, description, date, languages, location } = props;
  const images = [evylBg, evylBg1, evylBg2];
  const titleArray = new Array(20).fill(title);
  const container = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const marqueeTextRef1 = useRef<HTMLDivElement>(null);
  const marqueeTextRef2 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
      
      tl.to(subtitleRef.current, { y: -100 }, 0);
      tl.to(imagesRef.current[1], { y: -150 }, 0);
      tl.to(imagesRef.current[2], { y: -250 }, 0);
      tl.to(marqueeTextRef1.current, { x: 500 }, 0);
      tl.to(marqueeTextRef2.current, { x: -500 }, 0);
    });

    return () => context.revert();
  }, []);

  return (
    <Curve>
      <Header />
      <section ref={container} className="work">
        <div className="link-container">
          <MagneticButton label='View Project' />
        </div>
        <AnimatedTitle className="work-title" label={title} />
        <AnimatedContainer>
          <p>{description}</p>
          <div className="work-tag-container">
            <WorkPageTag
              title='Date'
              value={date}
            />
            <WorkPageTag
              title='Languages'
              value={languages.join(', ')}
            />
            <WorkPageTag
              title='Location'
              value={location}
            />
          </div>
          <div className="work-images--wrapper">
            <h2 ref={subtitleRef}>{subtitle}</h2>
            <div className="work-images">
              {
                images.map((image, index) => {
                  return <img ref={ref => {if (ref) imagesRef.current[index] = ref }} className={`work-images work-image-${index + 1}`} style={{ zIndex: 3 - index }} key={index} src={image} alt={title} />
                })
              }
            </div>
          </div>
        </AnimatedContainer>
      </section>
      <section className="marquee">
        <div ref={marqueeTextRef1} className="marquee-container marquee-text-1">
          <p>{titleArray.join('')}</p>
        </div>
        <div ref={marqueeTextRef2} className="marquee-container marquee-text-2">
          <p>{titleArray.join('')}</p>
        </div>
      </section>
      <p style={{fontSize: '4rem'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem iure voluptatum sed aliquid dolores incidunt facilis soluta consequatur itaque dicta aperiam tenetur sapiente nostrum nemo necessitatibus fugiat vitae ullam quidem, voluptatem repudiandae? Ab corrupti illum, expedita similique necessitatibus tempore. Repudiandae pariatur quis doloribus magni. Non, illum. Rerum odit saepe quas, consequuntur nulla doloribus sequi deserunt adipisci voluptates dolorum animi minus pariatur. Quasi est tempore sunt qui. Aut corrupti veritatis autem sit ex veniam pariatur fugiat ab cum nemo? Earum placeat quasi maiores qui quis accusantium architecto culpa odit repellat unde, esse cupiditate velit, nam nesciunt itaque dolores recusandae, pariatur reiciendis!</p>
    </Curve>
  );
}

export default WorkPage;