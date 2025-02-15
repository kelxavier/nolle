import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            <span className="bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text">Automação com IA</span>
            <span><br></br>o futuro do seu negócio</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Transforme sua empresa com uma atendente de IA inovadora e eficiente, que responde dúvidas, 
        auxilia clientes, agenda consultas e automatiza processos, oferecendo um atendimento ágil, 
        disponível 24/7 e elevando a experiência do usuário!
        </p>
        <div className="flex justify-center my-10">
          <a href="#" className="bg-gradient-to-r from-blue-500 to-purple-800 py-3 px-4 mx-3 rounded-md">
            Fale com IA no Whatsapp
          </a>
        </div>
        <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/3 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/3 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
    </div>
  )
}

export default HeroSection;

