//src/components/images.tsx

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Pioneering secure digital democracy through cutting-edge blockchain research and innovation in collaboration with leading academic institutions.",
      name: "IIT Bhilai",
      designation: "Indian Institute of Technology, Bhilai : Chhattisgarh",
      src: "/iitbhilai.png",
    },
    {
      quote:
        "Driving technological advancement and fostering innovation ecosystems through transformative research projects in blockchain, AI, and emerging technologies.",
      name: "IBITF",
      designation: "IIT Bhilai Innovation and Technology Foundation",
      src: "/ibitf.png",
    },
    {
      quote:
        "A revolutionary voting system leveraging LSAG ring signatures for complete voter anonymity, zero-knowledge proofs for privacy-preserving verification, and immutable smart contracts ensuring transparent, tamper-proof elections on the blockchain.",
      name: "E-Voting System",
      designation: "Using Blockchain Technology & Cryptographic Protocols",
      src: "/blockchain.jpg",
    },
    // {
    //   quote:
    //     "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    //   name: "Ankit Jakhar",
    //   designation: "Junior Developers , IIT bhilai",
    //   src: "/jb.png",
    // },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
