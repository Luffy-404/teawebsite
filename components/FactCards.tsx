"use client";

import { motion, useReducedMotion } from "framer-motion";

const facts = [
  ["01", "DIBRUGARH, ASSAM", "Rooted in one of India’s most storied tea-growing regions."],
  ["02", "SMALL GROWERS", "Built around close relationships with growers who know the leaf."],
  ["03", "ESTABLISHED 2019", "Commercial production with a focus on distinctive Assam teas."],
];

export function FactCards() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="aft-facts" aria-label="AFT at a glance">
      <div className="th-container aft-facts-grid">
        {facts.map(([number, title, copy], index) => (
          <motion.article
            className="aft-fact-card"
            key={title}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.48, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduceMotion ? undefined : { y: -6 }}
          >
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <i aria-hidden>↗</i>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
