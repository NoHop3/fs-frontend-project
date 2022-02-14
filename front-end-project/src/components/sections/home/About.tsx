import portraitImage from "../../../assets/stefan__georgiev2.png";

export default function About() {
  return (
    <section className='about-me' id='about'>
      <h2 className='section__title section__title--about'>More about me</h2>
      <p className='section__subtitle section__subtitle--about'>
        Student at VIA University College
      </p>
      <div className='about-me__body'>
        <p>
          I am 21 years old and I love working out, listening to
          music, eating healthy and everything else that makes me laugh.
        </p>
        <p>
          I was born Bulgaria and I spent most of my childhood years there. I
          was a quiet and apathetic kid, however, I discovered that life is more
          fun when you express your feelings and be happy about everything. (Yes
          I laugh a lot!)
        </p>
        <p>
          Since I got in university I decided to study abroad. Reasons? Well,
          maybe too broad of a subject to describe here on my portoflio page so
          I would keep it short - I saw potential in studying abroad. So far, so
          good.
        </p>
      </div>
      <img src={portraitImage} alt='Portrait of Stefan Georgiev' className="about-me__img" />
    </section>
  );
}
