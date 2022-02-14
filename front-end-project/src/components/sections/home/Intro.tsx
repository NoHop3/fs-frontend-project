import portraitImage from "../../../assets/stefan__georgiev1.png";

export default function Intro() {
  return (
    <section className="intro" id="home">
        <h1 className="section__title section__title--intro">Hi, I am
            <strong>Stefan Georgiev</strong></h1>
        <p className="section__subtitle section__subtitle--intro">Full-stack developer</p>
        <img src={portraitImage} alt="Portrait of Stefan Georgiev" className="intro__img"/>
    </section>
  )
}
