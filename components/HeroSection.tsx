export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expert Solutions for Your Business
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            "A beleza das coisas existe no espírito de quem as contempla"
          </p>
          <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
            We transform businesses through innovative strategies, exceptional design, and measurable results.
          </p>
          <a 
            href="#services" 
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  )
}