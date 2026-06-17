import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mariya Richardson",
    quote:
      "Holly at Proforma MVP Marketing was fantastic to work with. I ordered logo'd bags for a trade show, and they were a huge hit with everyone who stopped by our booth. Holly was communicative, professional, and made the entire process easy from start to finish.",
    timeAgo: "2 months ago",
  },
  {
    name: "Denise Copeland",
    quote:
      "Holly/Proforma MVP Marketing are incredible! I placed a last-minute order of monogrammed golf gloves, and they were able to process and get the gloves to me way ahead of schedule. They never cease to amaze me, and the quality is always first class!",
    timeAgo: "3 months ago",
  },
  {
    name: "Lexi Terrault",
    quote:
      "I can't say enough great things about this team! They're an absolute pleasure to work with — professional, responsive, and always deliver top-quality products. Even with rush jobs and tight deadlines, they consistently come through.",
    timeAgo: "7 months ago",
  },
  {
    name: "Julio Fuentes",
    quote:
      "Holly and her team are fantastic to work with. They are prompt, fast at communicating with you, and have a staff that works hard to make your vision become a reality.",
    timeAgo: "1 year ago",
  },
  {
    name: "Donna Struchen",
    quote:
      "I have been dealing with Proforma MVP Marketing for 3 years and have found their service and cooperation above and beyond my expectations. Their service representative is more than willing to go the extra mile to satisfy the customer.",
    timeAgo: "6 years ago",
  },
  {
    name: "Amanda Garza",
    quote:
      "Highly efficient group of people. This company is very reliable and all of their employees are super friendly as well. Above all, great prices! Highly recommend to everyone!",
    timeAgo: "6 years ago",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-secondary text-secondary" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-border">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" aria-label="Google">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-sm font-display font-semibold text-muted-foreground uppercase tracking-wider">Google Reviews</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">What our clients say</h2>
          <p className="text-lg text-muted-foreground">
            Marketers trust us to deliver. Here's what they say after working with us.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="bg-background border border-border rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <StarRating />
              <p className="text-foreground leading-relaxed flex-grow">
                "{t.quote}"
              </p>
              <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.timeAgo}</p>
                </div>
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-base font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
