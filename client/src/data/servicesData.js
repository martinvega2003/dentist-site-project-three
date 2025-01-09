import ImageOne from "../images/patient-&-dr-smiling.jpg"
import ImageTwo from "../images/dr-attending-patient.jpg"
import ImageThree from "../images/dr-&-patient.jpg"
import ImageFour from "../images/braces.jpg"

//Services Images:
import ServiceImageOne from "../images/dr-attending-patient-2.webp"
import ServiceImageTwo from "../images/teeth-cleaning.webp"
import ServiceImageThree from "../images/cavity-filling.webp"
import ServiceImageFour from "../images/tooth-extraction.webp"
import ServiceImageFive from "../images/wisdom-teeth-removal.webp"
import ServiceImageSix from "../images/teeth-whitening.webp"
import ServiceImageSeven from "../images/dental-veneers.jpg"
import ServiceImageEight from "../images/braces-3.jpg"
import ServiceImageNine from "../images/clear-aligners.jpg"

export const servicesData = [
  {
      image: ImageOne || 'https://via.placeholder.com/250x400',
      title: 'General Dentistry',
      heading: 'Comprehensive Care for Your Oral Health',
      subheading: 'Preventive and restorative treatments for all ages.',
      description: "General dentistry focuses on routine care like check-ups, cleanings, and cavity fillings to maintain healthy teeth and gums. It emphasizes prevention and early detection of issues like decay and gum disease to avoid invasive treatments later. Regular visits help ensure your oral health, contributing to your overall well-being.",
      services: [
        {
          name: 'Routine Check-ups',
          heading: 'Regular Check-ups for Lasting Health',
          subheading: 'Routine visits to ensure optimal oral health.',
          image: ServiceImageOne || 'https://via.placeholder.com/250x400',
          description: 'Routine check-ups are essential for detecting dental problems before they become serious. During your visit, your dentist will thoroughly examine your teeth, gums, and mouth, looking for early signs of cavities, gum disease, and other conditions. Regular check-ups can also help prevent future dental issues, ensuring your oral health remains strong over time. In addition to the examination, the visit may include a professional cleaning to remove plaque and tartar buildup, which can lead to cavities and gum disease if left untreated.',
          professionals: ['Dr. Emma Carter', 'Dr. John Smith'],
          faqs: [
            { question: 'How often should I have a routine check-up?', answer: 'It is recommended to have a routine check-up every six months.' },
            { question: 'What happens during a routine check-up?', answer: 'Your dentist will check for cavities, gum disease, and other dental issues, and clean your teeth.' },
            { question: 'Can I get a cleaning during my check-up?', answer: 'Yes, your dentist or hygienist will clean your teeth during most check-up visits.' },
            { question: 'Are check-ups painful?', answer: 'Routine check-ups are generally not painful. If any discomfort is felt, let your dentist know.' },
            { question: 'What if my dentist finds a cavity during the check-up?', answer: 'Your dentist will discuss treatment options and schedule a filling if necessary.' },
          ],
        },
        {
          name: 'Teeth Cleaning',
          heading: 'Maintaining a Healthy Smile',
          subheading: 'Deep cleaning to prevent plaque and tartar build-up.',
          image: ServiceImageTwo || 'https://via.placeholder.com/250x400',
          description: 'Teeth cleaning is a vital procedure to maintain your oral hygiene. Over time, plaque and tartar can build up on your teeth, leading to cavities and gum disease. A professional cleaning removes this buildup, keeping your teeth and gums healthy. During the cleaning, the dentist or hygienist will use specialized tools to remove plaque, tartar, and stains, followed by a thorough polish to make your teeth feel smooth and fresh. Regular teeth cleaning helps prevent serious dental issues like gingivitis and periodontal disease.',
          professionals: ['Dr. Emma Carter', 'Dr. John Smith'],
          faqs: [
            { question: 'How often should I get my teeth cleaned?', answer: 'Most people should have their teeth cleaned every six months.' },
            { question: 'Does teeth cleaning hurt?', answer: 'Teeth cleaning should not hurt, but if your gums are inflamed, you might feel slight discomfort.' },
            { question: 'Can I get my teeth cleaned during my check-up?', answer: 'Yes, teeth cleaning is usually done during a routine check-up.' },
            { question: 'Why is teeth cleaning important?', answer: 'It helps prevent plaque buildup, cavities, and gum disease.' },
            { question: 'Can cleaning whiten my teeth?', answer: 'Cleaning can remove surface stains, making your teeth appear brighter.' },
          ],
        },
        {
          name: 'Cavity Filling',
          heading: 'Restoring Your Tooth’s Health',
          subheading: 'Filling cavities to restore tooth function and prevent decay.',
          image: ServiceImageThree || 'https://via.placeholder.com/250x400',
          description: 'Cavity fillings are a common procedure used to restore teeth that have been damaged by decay. The process involves removing the decayed part of the tooth and filling the cavity with a material like amalgam or composite resin. This procedure helps prevent further decay and restores the tooth’s structure, allowing you to chew and speak normally. Fillings can also prevent the spread of bacteria and further damage to the tooth. It’s essential to treat cavities early to avoid more extensive treatments like crowns or root canals.',
          professionals: ['Dr. Emma Carter', 'Dr. John Smith'],
          faqs: [
            { question: 'What is a cavity filling?', answer: 'A cavity filling is a procedure to restore a tooth affected by decay.' },
            { question: 'Is getting a filling painful?', answer: 'Most people experience little to no pain thanks to local anesthesia.' },
            { question: 'How long does a cavity filling last?', answer: 'Depending on the material used, fillings can last several years.' },
            { question: 'What type of filling is best?', answer: 'Composite fillings are often preferred for visible areas, while amalgam is more durable for back teeth.' },
            { question: 'Can fillings get damaged?', answer: 'Yes, over time fillings can wear down or crack, so regular check-ups are important.' },
          ],
        },
      ],
      professionals: ['Dr. Emma Carter', 'Dr. John Smith'],
  },
  {
      image: ImageTwo || 'https://via.placeholder.com/250x400',
      title: 'Surgical Dentistry',
      heading: 'Advanced Surgical Solutions for Complex Dental Issues',
      subheading: 'Expert procedures for tooth extractions, removals, and more.',
      description: "Surgical dentistry handles complex issues needing surgery, like tooth extractions, wisdom teeth removal, and gum procedures. These treatments relieve pain, restore function, and protect oral health. Recovery depends on the procedure, but proper care ensures effective healing under your dentist's guidance.",
      services: [
        {
          name: 'Tooth Extraction',
          heading: 'Removing Problematic Teeth for Better Health',
          subheading: 'Safe and effective extraction of damaged or problematic teeth.',
          image: ServiceImageFour || 'https://via.placeholder.com/250x400',
          description: 'Tooth extraction is necessary when a tooth is beyond repair or causing health problems. Whether due to severe decay, injury, or crowding, an extraction may be the best option to prevent further complications. Your dentist will numb the area with local anesthesia to ensure you feel no pain during the procedure. Afterward, the area may feel sore for a few days, but this can be managed with over-the-counter pain relief. It’s important to follow your dentist’s aftercare instructions to minimize the risk of infection and ensure proper healing.',
          professionals: ['Dr. Emily Brown'],
          faqs: [
            { question: 'What happens during a tooth extraction?', answer: 'The dentist will numb the area, remove the tooth, and provide aftercare instructions for healing.' },
            { question: 'Does tooth extraction hurt?', answer: 'The procedure is painless thanks to anesthesia, though some soreness may follow.' },
            { question: 'How long does recovery take after a tooth extraction?', answer: 'Recovery typically takes a few days, but it can vary depending on the complexity of the extraction.' },
            { question: 'Can I eat after a tooth extraction?', answer: 'It’s best to stick to soft foods and avoid chewing on the extraction site for a few days.' },
            { question: 'What should I do if I have severe pain after a tooth extraction?', answer: 'Contact your dentist immediately if you experience severe pain or signs of infection after the procedure.' },
          ],
        },
        {
          name: 'Wisdom Teeth Removal',
          heading: 'Removing Impacted Wisdom Teeth for Comfort',
          subheading: 'Relieving pain and preventing future complications.',
          image: ServiceImageFive || 'https://via.placeholder.com/250x400',
          description: 'Wisdom teeth removal is a common procedure for those whose third molars are impacted, causing pain, infection, or misalignment. Impacted wisdom teeth can result in complications such as swelling, infection, and damage to surrounding teeth. Removal of these teeth can provide relief from these issues and prevent future dental problems. The procedure is typically performed under local anesthesia, and the recovery period may involve some discomfort, swelling, and the need to follow a soft-food diet for a few days.',
          professionals: ['Dr. Emily Brown'],
          faqs: [
            { question: 'How do I know if I need my wisdom teeth removed?', answer: 'Your dentist will monitor the development of your wisdom teeth and recommend removal if they are causing issues.' },
            { question: 'Is the wisdom teeth removal painful?', answer: 'The procedure itself is not painful thanks to anesthesia, but there may be some discomfort afterward.' },
            { question: 'How long does it take to recover from wisdom teeth removal?', answer: 'Most people recover within 3-7 days, depending on the complexity of the procedure.' },
            { question: 'Can wisdom teeth be removed at any age?', answer: 'Wisdom teeth are often removed in young adulthood, but it can be done at any age if necessary.' },
            { question: 'What should I avoid after wisdom teeth removal?', answer: 'Avoid hard foods, smoking, and using straws to prevent complications during recovery.' },
          ],
        },
      ],
      professionals: ['Dr. Emily Brown'],
  },
  {
      image: ImageThree || 'https://via.placeholder.com/250x400',
      title: 'Cosmetic Dentistry',
      heading: 'Enhancing Your Smile Aesthetics',
      subheading: 'Transform your smile with modern cosmetic solutions.',
      description: "Cosmetic dentistry improves your smile with treatments like whitening, veneers, and bonding. These address discoloration, chips, and gaps, enhancing both appearance and oral health. Advanced techniques provide quick, personalized solutions for a brighter, more confident smile.",
      services: [
          {
              name: 'Teeth Whitening',
              heading: 'Brighten Your Smile',
              subheading: 'Safe and effective teeth whitening solutions.',
              image: ServiceImageSix || 'https://via.placeholder.com/250x400',
              description: 'Teeth whitening is a popular cosmetic procedure that helps remove stains and discoloration from your teeth, leaving them brighter and more vibrant. The treatment is safe, quick, and non-invasive, making it a perfect option for anyone looking to enhance their smile. With professional teeth whitening, you can achieve noticeable results in just one session, giving you the confidence to show off your smile.',
              faqs: [
                  { question: 'Is teeth whitening safe?', answer: 'Yes, professional teeth whitening is safe when performed by a qualified dentist.' },
                  { question: 'How long do the results last?', answer: 'Results can last several months to years, depending on your habits and oral care routine.' },
                  { question: 'Does teeth whitening cause sensitivity?', answer: 'Some patients may experience temporary sensitivity, which usually resolves within a few days.' },
                  { question: 'Can all stains be removed?', answer: 'Teeth whitening works best on surface stains caused by food, drink, and aging.' },
                  { question: 'How often should I whiten my teeth?', answer: 'Most people whiten their teeth once or twice a year for maintenance.' },
              ],
          },
          {
              name: 'Dental Veneers',
              heading: 'A Perfect Smile with Veneers',
              subheading: 'Correct imperfections with custom veneers.',
              image: ServiceImageSeven || 'https://via.placeholder.com/250x400',
              description: 'Dental veneers are thin, custom-made shells designed to cover the front surface of your teeth. They are a versatile solution for correcting imperfections like chips, gaps, or discoloration. Made from durable materials like porcelain or composite resin, veneers provide a natural-looking enhancement to your smile. The process typically involves minimal preparation and can completely transform your teeth in just a few visits.',
              faqs: [
                  { question: 'What are dental veneers?', answer: 'Veneers are thin shells bonded to the front of your teeth to improve their appearance.' },
                  { question: 'Are veneers permanent?', answer: 'Veneers are a long-term solution, but they may need replacement after several years.' },
                  { question: 'How do I care for veneers?', answer: 'Maintain good oral hygiene and avoid biting hard objects to protect your veneers.' },
                  { question: 'Can veneers fix crooked teeth?', answer: 'Veneers can correct minor misalignments, but orthodontics may be needed for severe cases.' },
                  { question: 'Do veneers look natural?', answer: 'Yes, veneers are designed to match the color and shape of your natural teeth.' },
              ],
          },
      ],
      professionals: ['Dr. Sophia Miller', 'Dr. James Wilson'],
  },
  {
      image: ImageFour || 'https://via.placeholder.com/250x400',
      title: 'Orthodontics',
      heading: 'Straighten Your Smile',
      subheading: 'Specialized care for misaligned teeth and jaw issues.',
      description: "Orthodontics straightens teeth and corrects bite issues with braces, aligners, and retainers. These treatments improve oral health and aesthetics, preventing problems like decay and speech issues. Modern options are comfortable and discreet, offering solutions for patients of all ages.",
      services: [
          {
              name: 'Braces',
              heading: 'Straightening Teeth with Braces',
              subheading: 'Effective solutions for misaligned teeth.',
              image: ServiceImageEight || 'https://via.placeholder.com/250x400',
              description: 'Braces are a traditional orthodontic treatment that uses brackets and wires to gradually move teeth into their proper positions. Suitable for both children and adults, braces can address issues such as crowding, spacing, and bite problems. Advances in technology have made braces more comfortable and aesthetically pleasing, with options like ceramic or clear braces for a less noticeable appearance.',
              faqs: [
                  { question: 'How long do I need to wear braces?', answer: 'The duration varies, but most treatments last 1-3 years.' },
                  { question: 'Are braces painful?', answer: 'You may feel some discomfort initially, but it subsides as you adjust to wearing them.' },
                  { question: 'Can I eat normally with braces?', answer: 'You’ll need to avoid sticky and hard foods to prevent damaging the braces.' },
                  { question: 'How often are adjustment visits required?', answer: 'Adjustments are typically scheduled every 4-6 weeks.' },
                  { question: 'Do braces require special cleaning?', answer: 'Yes, maintaining proper oral hygiene with braces is essential to avoid issues like cavities.' },
              ],
          },
          {
              name: 'Clear Aligners',
              heading: 'Discreet Teeth Straightening',
              subheading: 'Invisible and removable orthodontic solutions.',
              image: ServiceImageNine || 'https://via.placeholder.com/250x400',
              description: 'Clear aligners are a modern alternative to traditional braces, offering a discreet way to straighten teeth. These removable trays are custom-made to fit your teeth and gradually shift them into alignment. Ideal for mild to moderate orthodontic cases, clear aligners allow you to maintain your appearance and enjoy your favorite foods without restrictions. Regular check-ups ensure your treatment stays on track.',
              faqs: [
                  { question: 'How do clear aligners work?', answer: 'Aligners apply gentle pressure to move your teeth into the desired position over time.' },
                  { question: 'Are clear aligners visible?', answer: 'No, clear aligners are nearly invisible, making them a discreet option.' },
                  { question: 'Can I remove aligners while eating?', answer: 'Yes, aligners are removable, so you can eat and drink without restrictions.' },
                  { question: 'Do I need to wear aligners all the time?', answer: 'Aligners should be worn for 20-22 hours a day for optimal results.' },
                  { question: 'How long does treatment with clear aligners take?', answer: 'Treatment duration varies but is typically 6-18 months.' },
              ],
          },
    ],
    professionals: ['Dr. Oliver Harris', 'Dr. Grace Johnson'],
  },
];
      
