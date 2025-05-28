import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-3xl font-bold gradient-text">Abhishek Mishra</span>
          </motion.div>
          
          <p className="text-slate-400 mb-6">
            Backend Java Developer • Team Lead • Problem Solver
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://www.linkedin.com/in/abhishek-mishra-ba559b181"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transform transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin text-2xl" />
            </motion.a>
            <motion.a
              href="mailto:abhishekmsr2000@gmail.com"
              className="text-slate-400 hover:text-primary transform transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-envelope text-2xl" />
            </motion.a>
            <motion.a
              href="tel:+917063330674"
              className="text-slate-400 hover:text-primary transform transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-phone text-2xl" />
            </motion.a>
          </div>
          
          <div className="border-t border-slate-800 pt-6">
            <p className="text-slate-500">
              © 2025 Abhishek Mishra. Built with passion and precision.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
