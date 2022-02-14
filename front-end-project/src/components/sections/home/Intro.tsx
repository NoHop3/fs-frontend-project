import portraitImage from "../../../assets/stefan__georgiev1.png";
import wave from "../../../assets/Wave.gif";

export default function Intro() {
  return (
    <section className='intro' id='home'>
      <h1 className='section__title section__title--intro'>
        Hi
        <span>
          <img
            src={wave}
            alt='Gif of hand waving'
            className='section__title--img'
          />
        </span>
        , I am
        <strong>Stefan Georgiev</strong>
      </h1>
      <p className='section__subtitle section__subtitle--intro'>
        Full-stack developer
      </p>
      <img
        src={portraitImage}
        alt='Portrait of Stefan Georgiev'
        className='intro__img'
      />
    </section>
  );
}
