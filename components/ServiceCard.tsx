import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const features = service.metadata.key_features
    ? service.metadata.key_features.split('\n').filter(f => f.trim())
    : []

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {service.metadata.featured_image && (
        <img
          src={`${service.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.metadata.service_name}</h3>
        <div 
          className="prose-content mb-4"
          dangerouslySetInnerHTML={{ __html: service.metadata.description }}
        />
        {service.metadata.pricing && (
          <p className="text-primary font-semibold mb-4">{service.metadata.pricing}</p>
        )}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <span className="text-primary mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}