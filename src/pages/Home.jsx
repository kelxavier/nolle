import Navbar from './layout/Navbar';
import Hero from './components/Hero';
import Beneficios from './components/Beneficios';

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Beneficios />
    </div>
  );
}
