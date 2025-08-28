import Image from 'next/image';
// components/TeamMember.tsx
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface TeamMemberProps {
  name: string
  img: string
  description: string
  reverse?: boolean
}

export default function TeamMember({
  name,
  description,
  img,
  reverse = false,
}: TeamMemberProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 })
    } else {
      controls.start({ opacity: 0, x: reverse ? 50 : -50 })
    }
  }, [inView, controls, reverse])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`team-member flex ${
        reverse ? 'flex-row-reverse' : 'flex-row'
      } items-center max-w-5xl mx-auto px-6 py-4`}
    >
      <Image
        src={img}
        alt={name}
        width={128}
        height={128}
        className="w-32 h-32 rounded-full object-cover shadow-md"
      />
      <div className="mx-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}
