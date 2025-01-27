import imageOne from "../images/bright-smile-2.jpg"
import imageTwo from "../images/dental-emergency.webp"
import imageThree from "../images/checkups.webp"
import imageFour from "../images/teeth-brushing.webp"

export const articlesData = [
    {
      title: "5 Tips for a Brighter Smile",
      excerpt: "Discover simple ways to improve your dental hygiene and achieve a brighter smile with these easy-to-follow tips.",
      image: imageOne || "https://via.placeholder.com/400x300",
      date: "15/09/2023",
      author: "Jane Doe",
      comments: "12",
      isMain: true,
    },
    {
      title: "Emergency Dental Care 101",
      excerpt: "Learn what steps to take during a dental emergency and how to handle unexpected issues effectively.",
      image: imageTwo || "https://via.placeholder.com/400x300",
      date: "07/04/2024",
      author: "Jhon Doe",
      comments: "4",
      isMain: false,
    },
    {
      title: "The Importance of Regular Checkups",
      excerpt: "Regular dental checkups are key to maintaining oral health. Find out why they matter.",
      image: imageThree || "https://via.placeholder.com/400x300",
      date: "17/11/2024",
      author: "Jane Doe",
      comments: "6",
      isMain: false,
    },
    {
      title: "Dental Myths Busted",
      excerpt: "Are you falling for these common dental myths? Let's set the record straight!",
      image: imageFour || "https://via.placeholder.com/400x300",
      date: "09/07/2024",
      author: "Peter Williams",
      comments: "2",
      isMain: false,
    },
  ];