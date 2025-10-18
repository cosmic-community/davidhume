import { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {caseStudy.metadata.featured_image && (
            <img
              src={`${caseStudy.metadata.featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={caseStudy.metadata.project_title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            {caseStudy.metadata.project_title}
          </h3>
          <p className="text-primary font-semibold mb-6">Client: {caseStudy.metadata.client}</p>
          
          <div className="mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Challenge</h4>
            <div 
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }}
            />
          </div>
          
          <div className="mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Solution</h4>
            <div 
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }}
            />
          </div>
          
          <div className="mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Results</h4>
            <div 
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }}
            />
          </div>
          
          {caseStudy.metadata.related_service && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Related Service:</p>
              <p className="font-semibold text-primary">
                {caseStudy.metadata.related_service.metadata.service_name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}