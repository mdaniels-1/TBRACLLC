import TeamMember from '@/components/TeamMember';
import './About.css';
import { motion, Variants } from 'framer-motion';


export default function About() {
  const members = [
    {
      name: 'Brandon (Chief Architect, RA)',
      description: 'Licensed Registered Architect responsible for architectural design, code compliance, and integrated layout planning.',
      img: '/images/alice.jpg'
    },
    { 
      name: 'Bob (Chief Mechanical Engineer, PE)',
      description: 'Licensed Professional Engineer leading mechanical system engineering, quality control, and technical oversight.',
      img: '/images/bob.jpg'
    },
    { 
      name: 'Cara (Senior MEP Design Engineer)',
      description: 'Oversees the integrated layout and coordination of mechanical, electrical, and plumbing systems within the 3D model environment.',
      img: '/images/cara.jpg'
    },
    { 
      name: 'Dan (Senior Engineer Designer - HVAC Systems)',
      description: 'Designs ductwork systems, coordinates airflow design, and integrates mechanical equipment per specifications.',
      img: '/images/dan.jpg'
    },
    { 
      name: 'Ella (Senior Engineer Designer - Hydronic Pipe Systems)',
      description: 'Specializes in chilled and hot water system layouts, riser diagrams, and equipment tie-ins.',
      img: '/images/ella.jpg'
    },
    { 
      name: 'Finn (Senior Engineer Designer - Electrical Systems)',
      description: 'Develops lighting, power, and low-voltage system layouts, ensures panel load distribution, and coordinates all conduit routing with other trades.',
      img: '/images/finn.jpg'
    },
  ]


  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    }
  };

  return (
    <div className='m-4 flex-col flex items-center space-y-20'>

      <motion.section
        className='flex-col space-y-4 w-200'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h3 className='text-2xl font-bold text-center'>About TBRAC LLC - Who We Are</h3>
        <p className='text-md'>TBRAC LLC is a certified Small Disadvantaged Business (SDB), Minority Business Enterprise (MBE), and Small Business Enterprise (SBE) based in New Jersey, offering full-service Architectural and Mechanical, Electrical, and Plumbing (MEP) design layout services. Established in 2019, our firm brings over 30 years of professional experience in architectural design, 3D/BIM modeling, and MEP coordination for both public and private sector projects.</p>
        <p className='text-md'>We are committed to delivering precise, code-compliant, and constructible design solutions that streamline the transition from engineering concepts to field installation. Every project is developed within a fully coordinated 3D virtual environment, allowing us to identify and resolve conflicts before construction begins—saving our clients time, resources, and rework.</p>
        <p className='text-md'>Our services support architects, engineers, general contractors, trade subcontractors, and developers by bridging the gap between design intent and field execution. From conceptual architecture and permit sets to HVAC, plumbing, electrical systems, and fabrication-level drawings, our work is tailored to meet project specifications, regulatory standards, and manufacturer installation guidelines.</p>
      </motion.section>

      <motion.section
        className='flex-col flex items-center space-y-4 approach_background w-screen p-2'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className='w-200'>
          <h3 className='text-2xl font-bold text-center'>Our Approach</h3>
          <p>At TBRAC LLC, our approach is built on collaboration, precision, and proactive coordination. As a company, we focus on forming long-term partnerships with clients, trade partners, and government agencies by consistently delivering dependable, code-compliant, and constructible design solutions. To maximize project efficiency and reduce approval delays, TBRAC LLC has developed a proprietary in-house workflow that integrates Architectural and Engineering (A&E) services with trade-specific Fabrication Shop Drawings. This innovative approach allows us to streamline coordination, eliminate redundancy, and deliver a single-source approval package—greatly improving turnaround time, reducing RFIs, and aligning design documentation with construction execution. Whether we&apos;re supporting federal infrastructure upgrades, high-rise developments, educational facilities, or historical restorations, TBRAC LLC remains committed to excellence, innovation, and delivering results that exceed expectations.</p>
        </div>
      </motion.section>



      <section className='flex-col space-y-4 w-200'>
        <h3 className='text-2xl font-bold text-center'>Meet Our Team</h3>
        <p>TBRAC LLC is led by a multidisciplinary team of licensed and experienced professionals, ensuring accurate coordination across all building systems:</p>
        <div className="space-y-16">
          {members.map((m, i) => (
            <TeamMember key={m.name} name={m.name} description={m.description} img={m.img} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

    </div>
  );
}