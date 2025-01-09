import ImageOne from "../images/testimonial-m-1.webp"
import ImageTwo from "../images/testimonial-1.webp"
import ImageThree from "../images/testimonial-m-2.jpeg"

export const testimonialsData = [
    {
      image: ImageOne || "https://via.placeholder.com/150",
      name: "John Doe",
      text: "The clinic provided exceptional service! I felt cared for and understood throughout the process.",
      rating: 5,
      styleClass: "bg-white rounded-br-[100px]", // Style 1
    },
    {
      image: ImageTwo || "https://via.placeholder.com/150",
      name: "Jane Smith",
      text: "Highly professional and friendly staff. My teeth have never looked better!",
      rating: 4,
      styleClass: "bg-blue-400 text-white rounded-br-[100px]", // Style 2
    },
    {
      image: ImageThree || "https://via.placeholder.com/150",
      name: "Robert Brown",
      text: "Great experience, they resolved my issue quickly and painlessly. Highly recommend!",
      rating: 5,
      styleClass: "bg-transparent border-2 border-blue-500 rounded-br-[100px]", // Style 3
    },
  ];