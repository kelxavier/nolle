import { motion } from "framer-motion";
import { FaRobot, FaBolt, FaHeadset } from "react-icons/fa";

const beneficios = [
  { icon: FaRobot, title: "Automação Inteligente", desc: "Reduza custos e aumente a produtividade." },
  { icon: FaBolt, title: "Velocidade e Eficiência", desc: "Respostas instantâneas para seus clientes." },
  { icon: FaHeadset, title: "Suporte 24/7", desc: "Atendimento contínuo sem pausas." }
];

export default function Beneficios() {
  return (
    <section id="sobre" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {beneficios.map((item, index) => (
          <motion.div key={index} className="bg-white p-6 rounded-xl shadow-md" whileHover={{ scale: 1.05 }}>
            <item.icon className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
