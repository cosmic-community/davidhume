import { TeamMember } from '@/types'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {member.metadata.photo && (
        <img
          src={`${member.metadata.photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress&crop=faces`}
          alt={member.metadata.full_name}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.metadata.full_name}</h3>
        <p className="text-primary font-semibold mb-4">{member.metadata.role}</p>
        <p className="text-gray-700 mb-4">{member.metadata.bio}</p>
        <div className="flex space-x-4">
          {member.metadata.linkedin_url && (
            <a
              href={member.metadata.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          )}
          {member.metadata.twitter_handle && (
            <a
              href={`https://twitter.com/${member.metadata.twitter_handle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}