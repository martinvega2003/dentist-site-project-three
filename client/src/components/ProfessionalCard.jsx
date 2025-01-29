import React from 'react'

export const ProfessionalCard = ({key, image, name, role, bio}) => {
  return (
    <div key={key} className="w-full bg-white shadow-2xl rounded-3xl md:p-6 flex flex-col md:flex-row justify-start items-center md:items-start">
        <img
            src={image}
            alt={name}
            className="w-full md:w-[25%] max-h-[40%] md:h-[80%] rounded-t-lg md:rounded-lg mb-10 md:mb-0"
        />
        <div className="md:w-[75%] h-fit flex flex-col justify-start items-center md:items-start md:ml-8">
            <h4 className="text-xl font-semibold text-gray-800">
                {name}
            </h4>
            <p className="text-blue-500 font-medium">{role}</p>
             <p className="text-gray-600 md:mt-4 text-sm text-center md:text-left p-6 md:p-0">{bio}</p>
        </div>
    </div>
  )
}
