export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Professional Services</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#team" className="text-gray-700 hover:text-primary transition-colors">
              Team
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#case-studies" className="text-gray-700 hover:text-primary transition-colors">
              Case Studies
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}