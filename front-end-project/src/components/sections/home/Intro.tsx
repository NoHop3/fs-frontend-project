export default function Intro() {
  return (
    <section className='intro'>
      <h1 className='section__title section__title--intro'>
        Hi
        <span>
          <img
            src={"/images/Wave.gif"}
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
        src={"/images/stefan__georgiev1.png"}
        alt='Portrait of Stefan Georgiev'
        className='intro__img'
      />
    </section>
  );
}
