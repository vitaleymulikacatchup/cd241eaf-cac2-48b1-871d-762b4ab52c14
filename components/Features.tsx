export default function Features() {
  const features = [
    {
      title: 'Complete Anonymity',
      description: 'Get totally anonymous messages from your friends and family',
      image: '/images/feature-1.png',
      className: 'feature-card-1',
    },
    {
      title: 'Saved on the Cloud',
      description: 'Access your messages from anywhere in the world.',
      image: '/images/feature-2.png',
      className: 'feature-card-2',
    },
    {
      title: 'Build for Scalability',
      description: 'Built using the latest technologies for scalability.',
      image: '/images/feature-3.png',
      className: 'feature-card-3',
    },
    {
      title: 'Share on Social Media',
      description: 'You can share the link and messages on every social media 😊',
      image: '/images/feature-4.png',
      className: 'feature-card-4',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Features
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`${feature.className} rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}