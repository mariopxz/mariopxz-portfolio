const About = () => {
  return (
    <section id="about" className="flex flex-col px-4">
      <div className="screen-line-after">
        <h2 className="text-3xl font-medium flex items-center">
          About
        </h2>
      </div>
      <div className="flex flex-col py-4 font-mono gap-4 text-balance text-foreground text-sm leading-6">
        <p>
          Hola, Mundo! Soy Mario López, Software Developer & UI/UX Designer
          apasionado por crear soluciones de software de alto rendimiento,
          centradas en el usuario con diseños intuitivos y atractivos.
        </p>
        <p>
          Con 1+ años de experiencia, me especializo en construir aplicaciones
          web de alta calidad usando React, TypeScript, y tecnologías modernas
          de front-end. Mas allá del trabajo, me gusta explorar nuevas
          tecnologías y convertir ideas en realidad a través de proyectos
          personales.
        </p>
        <p>Conectemos y colaboremos!</p>
      </div>
    </section>
  );
};

export default About;
