import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

const posts = blogPosts.slice(0, 3).map((post) => ({
  id: post.id,
  title: post.title,
  category: post.categories[0],
  image: post.image,
  slug: post.slug,
}))

export default function NewsInsights() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            News & Insights
          </h2>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-200 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-0 group-hover:text-primary-500 transition-colors">
                    <Link to={`/resources/${post.slug}`} className="absolute inset-0" />
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


