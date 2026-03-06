import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

const posts = blogPosts

export default function LatestPosts() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Latest Posts</h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-0">
                {/* Image */}
                <div className="sm:col-span-1 relative aspect-[4/3] sm:aspect-auto sm:h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="sm:col-span-3 p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category) => (
                        <span
                          key={category}
                          className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 border-l border-gray-200 pl-3">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    <Link
                      to={`/resources/${post.slug}`}
                      className="absolute inset-0 z-10"
                      aria-label={`Read ${post.title}`}
                    />
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="size-12 rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-lg border border-primary-500 bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-200">
            Show More
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

