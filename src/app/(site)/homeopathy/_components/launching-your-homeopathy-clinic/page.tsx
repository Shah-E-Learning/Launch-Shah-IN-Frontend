// ** Custom Component Imports
import ListItems from '@/components/cards/list-items'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

const HomeopathicTreatmentCourseView = () => {
  const beHomeopathOne = {
    title: 'Low Investment Ideas using AI for Homeopathic Practice',
    items: [
      {
        name: `Starting a homeopathic practice with minimum investment requires 
a strategic approach, focusing on leveraging existing resources and 
digital platforms. Achieving success in homeopathic practice requires 
financial support and a steady flow of patients visiting your clinic 
daily.`,
        itemTopic: 'lg:text-4xl tracking-wider my-4'
      },
      {
        name: `By focusing low-investment and high-impact strategies, a 
homeopathic practitioner can establish a strong foundation for their 
practice and gradually expand as their patient base and resources 
grow. To address this, we will host a series of special lectures for 
homeopaths focused on raising community awareness about your 
homeopathic services. This initiative aims to quickly increase your 
clinic's popularity and attract more patients.`,
        itemTopic: 'lg:text-4xl tracking-wider my-4'
      }
    ],
    itemsOneTitle: 'Outlined below are the ideas developed with careful consideration for the homeopathic practice:',
    itemsOne: [
      {
        itemTopic: 'font-bold',
        title: '1. Startup Models for Homeopathic Practice (Low Cost):',
        subtopicbullets: true,
        subtopic: [
          {
            sub_name: `Home-Based Practice (Initially)`
          },
          {
            sub_name: `Online / Teleconsultation Practice`
          },
          {
            sub_name: `Part time at a same place`
          },
          {
            sub_name: `Visiting Practice / Collaborative Model`
          }
        ]
      },
      {
        itemTopic: 'font-bold',
        title: '2. Raising Community Awareness: Laying the Foundation',
        subtopicbullets: true,
        subtopic: [
          {
            sub_name: `Demystifying Homeopathy`
          },
          {
            sub_name: `Highlighting Your Expertise`
          },
          {
            sub_name: `Addressing Local Health Concerns`
          },
          {
            sub_name: `Creating a Personal Connection`
          }
        ]
      },
      {
        itemTopic: 'font-bold',
        title: '3. Attracting More Patients: Building the Pipeline',
        subtopicbullets: true,
        subtopic: [
          {
            sub_name: `Generating Leads in health camps and workshops`
          },
          {
            sub_name: `Word-of-Mouth Marketing`
          },
          {
            sub_name: `Establishing Yourself as a Local Resource`
          },
          {
            sub_name: `Building Trust and Confidence`
          }
        ]
      },
      {
        itemTopic: 'font-bold',
        title: '4. Translating to Financial Support: A Sustainable Model',
        subtopicbullets: true,
        subtopic: [
          {
            sub_name: `Increased Clinic Visits`
          },
          {
            sub_name: `Long-Term Patient Relationships`
          },
          {
            sub_name: `Potential for Referrals`
          },
          {
            sub_name: `Enhanced Reputation and Potential for Expansion`
          }
        ]
      },
      {
        itemTopic: 'font-bold',
        title: '5. Homeopathic Medicines (Low Cost):',
        subtopicbullets: true,
        subtopic: [
          {
            sub_name: `Medicine Procurement`
          },
          {
            sub_name: `Method to prepare any medicine in your own clinic to save money`
          },
          {
            sub_name: `Handling the medicines`
          },
          {
            sub_name: `Medicine dispensing pouches`
          }
        ]
      },
      {
        itemTopic: 'font-bold',
        title: '6. Stationary Expenses (Low Cost):',
        subtopicbullets: true,
        subtopic: [
          {
            sub_name: `Visiting Cards`
          },
          {
            sub_name: `Payment receipt book`
          },
          {
            sub_name: `Doctor-to-Doctor Referral Pad`
          },
          {
            sub_name: `Letter heads`
          }
        ]
      },
      {
        itemTopic: 'font-bold',
        title: '7. Homeopathic Desk Companions:',
        subtopicbullets: true,
        subtopic: [
          {
            sub_name: `Materia Medica Books`
          },
          {
            sub_name: `Organon of Medicine`
          },
          {
            sub_name: `Digital Repertoires`
          },
          {
            sub_name: `Homeopathic Therapeutics`
          }
        ]
      },
      {
        itemTopic: 'font-bold',
        title: '8. Ethical advertising and professional conduct:',
        subtopicbullets: true,
        subtopic: [
          {
            sub_name: `Strong Online Presence`
          },
          {
            sub_name: `Community Engagement`
          },
          {
            sub_name: `Print Material (Minimal)`
          },
          {
            sub_name: `Financial Management`
          }
        ]
      },
      {
        itemTopic: 'font-bold',
        title: '9. Homeopathic Practice Projections: A Journey of Growth & Purpose:',
        subtopicbullets: true,
        subtopic: [
          {
            sub_name: `At the End of the 1st Month`
          },
          {
            sub_name: `At the end of the 1st Year`
          },
          {
            sub_name: `At the end of the 2nd Year`
          },
          {
            sub_name: `At the end of the 3rd Year`
          }
        ]
      },
      {
        name: "By strategically implementing these community awareness ideas, a homeopath can cultivate a well-informed patient base, build a strong reputation, and ultimately achieve the financial stability and consistent patient flow necessary for a thriving homeopathic practice. It's a proactive and community-centered approach to building lasting success."
      }
    ]
  }

  return (
    <ScreenWrapper className='py-4 lg:py-8'>
      <div className=''>
        {/* <h1 className='!text-center main-description text-mainColor font-bold leading-tight '>
          {beHomeopathOne?.title}
        </h1> */}

        <ListItems listTitle={''} listArray={beHomeopathOne?.items || []} titleSize='tracking-wide break-word hidden' />
      </div>

      <div className='my-5 rounded-[32px] bg-secondaryColor/10 p-5'>
        <h1 className='main-title !text-center font-bold leading-tight text-mainColor'>
          {beHomeopathOne?.itemsOneTitle}
        </h1>
        <ListItems
          listTitle={''}
          listArray={beHomeopathOne?.itemsOne || []}
          variant='tertiary'
          titleSize='tracking-wide break-word hidden'
          mainGrid='py-5 lg:py-5'
        />
      </div>
    </ScreenWrapper>
  )
}

export default HomeopathicTreatmentCourseView
