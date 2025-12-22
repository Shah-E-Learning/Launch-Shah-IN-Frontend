// ** Custom Component Imports
import ScreenWrapper from '@components/wrapper/screen-wrapper'

const BoxDesign = () => {
  const BoxDesignData = {
    mainHighlights: [
      {
        id: 1,
        courseId: 'course-1',
        text: 'Preventing homeopathic practitioners and students from engaging in unauthorized allopathic practice, while offering a credible pathway to return to independent homeopathic practice.',
        targetGroups: [
          {
            id: 1,
            label:
              'Indian Homeopaths who are either facing legal challenges or living under the threat of prosecution for engaging in unauthorized allopathic practice'
          },
          {
            id: 2,
            label:
              'Homeopaths began their homeopathic practice but couldn’t sustain it for want of structured approach to build their practice'
          },
          {
            id: 3,
            label:
              'Qualified Homeopaths engaged in unauthorized or illegal allopathic (GP) practice, particularly in villages and rural areas'
          },
          {
            id: 4,
            label:
              'Homeopathic students pursuing BHMS degree are considering starting allopathic (GP) practices in the near future'
          },
          { id: 5, label: 'Female Homeopaths practicing illegal allopathic (GP) practice part-time from their homes' },
          {
            id: 6,
            label:
              'Homeopathic practitioners who are also working in allopathic hospitals or practicing allopathy simultaneously'
          },

          {
            id: 7,
            label:
              'Homeopaths fluent in English aiming to create a global, high-value practice and attain financial freedom.'
          },
          {
            id: 8,
            label:
              'Allopathic (GP) Practicing homeopaths who are ready to give their profession another chance instead of leaving it behind permanently.'
          },
          {
            id: 9,
            label:
              'Allopathic (GP) Practicing homeopaths ready to return to their dream practice after fulfilling life’s responsibilities and commitments.'
          },
          {
            id: 10,
            label:
              'Allopathic (GP) Practicing homeopaths who hold deep love for homeopathy yet carry the regret of not practicing it.'
          }
        ]
      },
      {
        id: 2,
        courseId: 'course-2',
        text: 'Empowering female homeopaths to start or restart their homeopathic practice, and supporting those who lost their shining homeopathic careers due to marriage and other life changes.',
        targetGroups: [
          {
            id: 1,
            label: 'Scholar female homeopathic graduates who had to leave homeopathy during marriage and life journeys'
          },
          {
            id: 2,
            label:
              'Female Homeopaths practicing unauthorized or illegal allopathic (GP) practice part-time from their homes'
          },
          {
            id: 3,
            label:
              'Female homeopathic graduates facing challenges in balancing their career and personal life after marriage'
          },
          {
            id: 3,
            label: 'Married female non-practicing homeopaths working as teachers in homeopathic colleges'
          },
          {
            id: 4,
            label:
              'Female homeopaths willing to serve humanity, value their professional qualifications, and have well-settled families'
          },
          {
            id: 5,
            label:
              'Homeopaths fluent in English aiming to create a global, high-value practice and attain financial freedom.'
          },
          {
            id: 6,
            label:
              'Allopathic (GP) Practicing homeopaths who are ready to give their profession another chance instead of leaving it behind permanently.'
          },
          {
            id: 7,
            label:
              'Allopathic (GP) Practicing homeopaths ready to return to their dream practice after fulfilling life’s responsibilities and commitments.'
          },
          {
            id: 8,
            label:
              'Allopathic (GP) Practicing homeopaths who hold deep love for homeopathy yet carry the regret of not practicing it.'
          },
          {
            id: 9,
            label:
              'Married women wishing to ease the grief of not being able to care for their parents, especially while living abroad to build their practice'
          },
          {
            id: 10,
            label: 'Female homeopaths began their practice but couldn’t sustain it for want of structured approach'
          },
          {
            id: 11,
            label:
              'Married women aspiring to build a successful online homeopathic practice from wherever they are in the world.'
          }
        ]
      },
      {
        id: 3,
        courseId: 'course-3',
        text: 'A thoughtfully designed clinical refresher course for homeopathic academicians and teachers who wish to rediscover the healer within and start or restart their independent practice at any stage of their careers.',
        targetGroups: [
          { id: 1, label: 'Married female non-practicing homeopaths working as teachers in homeopathic colleges' },

          // { id: 2, label: 'Homeopathic instructors handling theoretical or allopathic subjects in the homeopathic colleges' },

          {
            id: 2,
            label:
              'Senior homeopathic teachers who are not practicing and do not receive a Non-Practicing Allowance (NPA)'
          },
          {
            id: 3,
            label:
              'Academicians seeking to create an additional source of income with minimal investment and high returns.'
          },
          {
            id: 4,
            label:
              'Academicians wishing to utilize their teaching skills to achieve the higher purpose of their professional knowledge.'
          },
          {
            id: 5,
            label:
              'Teachers who value their time and, with well-settled families, aspire to serve humanity on a larger scale.'
          },
          {
            id: 6,
            label:
              'Non-practicing teachers of theoretical and allopathic subjects, do not receive the Non-Practicing Allowance (NPA)'
          },
          {
            id: 7,
            label:
              'Many homeopaths began their homeopathic practice but couldn’t sustain it for want of structured approach to build their practice'
          },
          {
            id: 8,
            label:
              'Homeopaths fluent in English aiming to create a global, high-value practice and attain financial freedom.'
          },
          {
            id: 9,
            label:
              'Allopathic (GP) Practicing homeopaths who are ready to give their profession another chance instead of leaving it behind permanently.'
          },
          {
            id: 10,
            label:
              'Allopathic (GP) Practicing homeopaths ready to return to their dream practice after fulfilling life’s responsibilities and commitments.'
          },
          {
            id: 11,
            label:
              'Allopathic (GP) Practicing homeopaths who hold deep love for homeopathy yet carry the regret of not practicing it.'
          }
        ]
      },
      {
        id: 4,
        courseId: 'course-4',
        text: 'A roadmap from beginner to confident homeopath — a clinical course that addresses real-world challenges every homeopath faces from their very first patient to the third year of independent practice.',
        targetGroups: [
          {
            id: 1,
            label: 'Beginners who are unsure where to start or how to excel in independent homeopathic practice.'
          },
          { id: 2, label: 'Government homeopaths serving the public through various government healthcare platforms.' },
          {
            id: 3,
            label:
              'Homeopaths currently working in allopathic hospitals or practicing allopathy who wish to begin homeopathic practice.'
          },
          {
            id: 3,
            label: 'Homeopaths eager to enhance their skills for faster and more effective prescribing.'
          },
          {
            id: 4,
            label:
              'Homeopaths fluent in English aiming to create a global, high-value practice and attain financial freedom.'
          },
          {
            id: 5,
            label:
              'Beginner Homeopaths wanting to have constant live clinical support due to their fear and insecurity.'
          }
        ]
      }
    ]
  }

  const { mainHighlights } = BoxDesignData

  return (
    <ScreenWrapper className='f bg-gradient-to-b pb-10'>
      <div
        className={`container my-5 flex w-full flex-col items-center rounded-xl bg-mainColor to-transparent py-8 tracking-wide text-white md:leading-[2rem] lg:rounded-[50px] lg:leading-[3.1rem]`}
      >
        <p className='main-description w-full !text-center font-bold text-white md:leading-[2rem] lg:leading-[3.1rem]'>
          The Samuel Hahnemann’s Applied Homeopathy (SHAH) course is rooted in a singular mission:
        </p>
        <p className='main-description w-full !text-center text-white md:leading-[2rem] lg:leading-[3.1rem]'>
          To safeguard the future of homeopathy by addressing the growing trend of practitioners leaving the profession.
          Thoughtfully crafted, the SHAH program aims to reignite the passion of homeopathic graduates who, for various
          reasons, could not fully engage in clinical practice. By rebuilding confidence, refining core skills, and
          resolving foundational challenges through time-tested, clinically proven methodologies, this initiative
          aspires to restore both competence and conviction in every practitioner.
        </p>
      </div>
      <div className='mx-auto space-y-16 px-4 sm:px-6 lg:px-8'>
        {mainHighlights.map((highlight, idx) => (
          <div key={idx} className='group' data-aos='fade-up' data-aos-delay={idx * 100}>
            {/* Highlight Card */}
            <div
              id={highlight?.courseId}
              className='relative transform scroll-mt-32 overflow-hidden rounded-3xl border border-mainColor/10 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-lg md:p-10'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-secondaryColor/5 to-completedColor/5 opacity-0 transition-opacity duration-500 group-hover:bg-secondaryColor/10 group-hover:opacity-100'></div>

              <div className='relative flex items-start gap-5'>
                {/* Icon */}
                <div className='relative'>
                  <div className='absolute inset-0 scale-150 bg-completedColor/20 blur-xl'></div>
                  <h6 className='relative rounded-2xl bg-completedColor px-4 pb-2 pt-1 text-2xl font-bold text-white shadow-lg'>
                    {highlight?.id}.
                  </h6>
                </div>

                {/* Text */}
                <p className='text-xl font-bold leading-snug tracking-tight text-mainColor md:text-2xl lg:text-3xl'>
                  {highlight.text}
                </p>
              </div>
            </div>

            {/* Target Groups Grid */}
            <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {highlight?.targetGroups?.map((group, index) => (
                <div
                  key={index}
                  className='group/target relative rounded-3xl border border-mainColor/20 bg-gradient-to-br from-secondaryColor/10 via-secondaryColor/5 to-completedColor/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-buttonColor/50 hover:shadow-xl'
                >
                  {/* Subtle glow on hover */}
                  <div className='absolute inset-0 rounded-3xl bg-secondaryColor/10 opacity-0 transition-opacity duration-300 group-hover/target:opacity-100'></div>

                  <div className='relative flex items-start gap-3'>
                    {/* <span className='text-3xl font-black text-buttonColor tracking-tighter'>{group.id}.</span> */}
                    <p className='text-base font-semibold leading-snug text-mainColor md:text-2xl'>{group.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScreenWrapper>
  )
}

export default BoxDesign
