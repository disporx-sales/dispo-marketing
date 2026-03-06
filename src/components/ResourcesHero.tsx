import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

const featuredPost = blogPosts[0] // "Reducing ER Wait Times with AI-Powered Solutions"

const recentPosts = blogPosts.slice(1) // The other two posts

export default function ResourcesHero() {
  return (
    <section data-hero-section className="relative bg-gray-900 py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${featuredPost.image})`,
        }}
      />
      <div className="absolute inset-0 bg-gray-900/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="py-4 mb-8" aria-label="breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-white">Resources</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 flex items-center gap-2 text-lg text-white">
              <svg className="size-6 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Hot Topic</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              {featuredPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-6 text-white">
              <div className="flex flex-wrap gap-2">
                {featuredPost.categories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-300">{featuredPost.date}</span>
            </div>
            <Link
              to={`/resources/${featuredPost.slug}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200"
            >
              Read article
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          {/* Recent Posts Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 max-h-[500px] overflow-y-auto pr-4"
          >
            {recentPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-200 border border-white/10"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="inline-flex items-center rounded-full bg-white/20 px-2 py-1 text-xs font-medium text-white"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-300 whitespace-nowrap">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-0">
                  <Link
                    to={`/resources/${post.slug}`}
                    className="hover:text-primary-300 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

