import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='srujan.jpeg' alt='P.Srujan' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm P. Srujan, a student and aspiring developer from India. I enjoy building websites and applications using HTML, CSS, JavaScript and React. I also have experience with Python, C, Arduino and basic data structures. I like solving programming problems, experimenting with new technologies and turning ideas into practical projects. I'm currently improving my React and full-stack development skills and working towards becoming a skilled software developer.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
