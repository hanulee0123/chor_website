import React from 'react'

type EventCardProps = {
  title: string
  date: string
  location: string
  description: string
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{date} - {location}</p>
      <p>{description}</p>
    </div>
  )
}

export default EventCard