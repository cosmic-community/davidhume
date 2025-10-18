import { cosmic, hasStatus } from './cosmic'
import { Service, TeamMember, Testimonial, CaseStudy } from '@/types'

export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'services'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0)
    
    return response.objects as Service[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch services')
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'team-members'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0)
    
    return response.objects as TeamMember[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'testimonials'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0)
    
    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch testimonials')
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'case-studies'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as CaseStudy[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch case studies')
  }
}