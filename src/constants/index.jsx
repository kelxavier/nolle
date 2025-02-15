import { Clock } from "lucide-react";
import { Send } from "lucide-react";
import { Calendar } from "lucide-react";
import { Grid } from "lucide-react";
import { Target } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Clock />,
    text: "Disponibilidade 24/7",
    description:
      "Como um funcionário dedicado, está disponível a qualquer momento para atender seus clientes, sem limitações de horário. Isso garante um atendimento contínuo e sem falhas, melhorando a experiência do cliente e aumentando as chances de conversão.",
  },
  {
    icon: <Send />,
    text: "Respostas instantâneas e personalizadas",
    description:
      "Responde de forma rápida e personalizada com base nas interações e preferências dos clientes. A consistência nas respostas garante um atendimento sem erros ou variações, melhorando o engajamento e a fidelidade dos clientes.",
  },
  {
    icon: <Grid />,
    text: "Catálogo dinâmico de produtos e serviços",
    description:
      "Apresenta um catálogo interativo de produtos e serviços, facilitando a visualização e escolha por parte dos clientes. Ele sugere opções personalizadas com base nas preferências do cliente, aumentando as chances de vendas adicionais e oferecendo uma experiência de compra mais fluida e intuitiva.",
  },
  {
    icon: <Calendar />,
    text: "Agendamento automático de compromissos",
    description:
      "Permite que os clientes agendem consultas, serviços ou entregas diretamente pelo WhatsApp, com lembretes automáticos. A gestão de horários é eficiente e livre de erros humanos, mantendo tudo organizado e sempre disponível.",
  },
  {
    icon: <Target />,
    text: "Campanhas segmentadas e precisas",
    description:
      "Segmenta automaticamente os clientes com base em seu comportamento e interesses, enviando mensagens direcionadas e relevantes. Isso aumenta o engajamento com campanhas e promoções personalizadas, sem depender de intervenções manuais.",
  },
  {
    icon: <GlobeLock />,
    text: "Relatórios detalhados e insights estratégicos",
    description:
      "Coleta e analisa dados das interações para gerar relatórios detalhados sobre o comportamento do cliente. Isso ajuda a tomar decisões informadas e a otimizar estratégias de vendas, com precisão e consistência.",
  }
    
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
