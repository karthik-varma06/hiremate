import { motion } from "framer-motion";

export default function ParallaxSkyline() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-orange-500/10 to-transparent"
      />
    </div>
  );
}
