import { useParams, Link } from 'react-router-dom'
import { getBlogPostBySlug } from '../data/blogPosts'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-600 transition-colors"
          >
            Back to Resources
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 sm:py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${post.image})`,
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
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-white">{post.title}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="size-12 rounded-full"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold">{post.author.name}</p>
                  <p className="text-sm text-gray-300">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="max-w-none">
            {post.content ? (
              <div
                className="text-gray-700 leading-relaxed space-y-6 [&>p]:text-lg [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-6 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-4 [&_a]:text-primary-600 [&_a]:underline [&_a:hover]:text-primary-700 [&_sup]:text-primary-600 [&_sup]:font-semibold [&_sup]:cursor-pointer [&_sup]:hover:text-primary-700 [&_ol_li]:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="text-gray-600 leading-relaxed">
                <p className="text-xl mb-6">{post.excerpt}</p>
                <p className="text-gray-500 italic">
                  Full content coming soon. This blog post is currently being prepared.
                </p>
              </div>
            )}
          </div>

          {/* Back to Resources */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Resources
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

