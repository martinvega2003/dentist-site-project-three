import DentistOneimg from "../images/dr-w-1.jpg"
import DentistTwoimg from "../images/dr-m-2.jpg"
import DentistThreeimg from "../images/dr-w-2.jpg"

export const professionalsData = [
    {
      name: 'Dr. Jane Smith',
      role: 'Lead Dentist',
      bio: 'Dr. Smith has over 15 years of experience specializing in cosmetic and restorative dentistry.',
      image: DentistOneimg || 'https://via.placeholder.com/150', // Placeholder for team member image
    },
    {
      name: 'Dr. John Doe',
      role: 'Orthodontist',
      bio: 'Dr. Doe is an expert in orthodontics and has been helping patients achieve perfect smiles for 10 years.',
      image: DentistTwoimg || 'https://via.placeholder.com/150',
    },
    {
      name: 'Sara Johnson',
      role: 'Dental Hygienist',
      bio: 'Sara is passionate about preventive care and educating patients on oral health best practices.',
      image: DentistThreeimg || 'https://via.placeholder.com/150',
    },
  ];