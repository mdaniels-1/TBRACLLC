import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string,
  image: string,
  isSelected: boolean,
  onSelect: () => void,
  className: string
}

export default function ServiceCard({
  title,
  image,
  isSelected,
  onSelect,
  className = "",
}: ServiceCardProps) {
  return (
    <motion.div
      onClick={() => {
        console.log(`clicked ${title}`);
        onSelect();
      }}
      className={`cursor-pointer rounded-xl overflow-hidden shadow-md border-2 transition-all ${className} ${
        isSelected
          ? "border-blue-500 shadow-xl scale-105"
          : "border-transparent hover:scale-105 hover:shadow-lg"
      }`}
      whileTap={{ scale: 0.97 }}
    >
      <div className="w-full h-40 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
        <div className="text-2xl opacity-50">🏗️</div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
    </motion.div>
  );
}
