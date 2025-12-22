// ** Custom Component Imports
import ListItems from '@/components/cards/list-items'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

const PrefacePage = () => {
  const beHomeopathOne = {
    title: 'The Story Behind SHAH: From Challenge to Change',
    items: [
      {
        title: 'THE NEED:',
        itemTopic: 'text-xl lg:text-5xl'
      },

      {
        name: 'The World Health Organization (WHO) has declared that homeopathy is the second most popular system of medicine globally. The Honourable Prime Minister of Bharat, Shri Narendra Modi, is a strong proponent of Ayush medicines. Consequently, India is the only country in the world with a Ministry of Ayush and robust government support for these traditional healing systems.'
      },
      {
        name: 'The Indian homeopathy market is growing faster than the global market. India has the highest number of homeopathic colleges, students, practitioners, patients, journals, associations, private academies, and the most freedom to practice homeopathy worldwide.',
        name1:
          'However, Dr. Krutik Shah confidently predicts that the situation will be questioned soon as the increasing number of homeopathic graduates who are leaving the profession and as a result, we see an increase in the quantity of homeopaths with decreasing quality with the passage of time!'
      },
      {
        name: `This often stems from a loss of faith in homeopathy or from various responsibilities and significant life challenges that may be beyond individuals' control they encounter in the early stage of their careers. Consequently, the homeopathic field is missing out on valuable
contributions that could positively impact both the profession and the
wider community. This trend results in significant losses and hinders the
development of homeopathy as a field.`
      },

      // {
      //   name: `A significant issue that needs attention is the increasing number of homeopathic graduates who are leaving the profession. This often stems from a loss of faith in homeopathy or from various responsibilities and significant life changes that may be beyond individuals' control. Consequently, the homeopathic field is missing out on valuable contributions that could positively impact both the profession and the wider community.`
      // },

      {
        title: 'THE SURVEY:',
        itemTopic: ' text-xl lg:text-5xl !mt-8'
      },
      {
        name: `Dr. Krutik Shah has been working extensively over a decade to find a genuine way for homeopaths who have been neglected / overlooked / left-out to easily re-enter the profession. Finding the best approach to reduce dropouts among homeopathic students during their graduation studies became an additional focus while working extensively towards this mission.`
      },

      // {
      //   name: `Dr. Krutik Shah was among the homeopaths in the country who openly opposed the inclusion of the “Bridge Course” during the years 2018-2019. This course would have enabled homeopaths to learn about allopathic medicines and pharmacology, thereby allowing them to administer allopathic drugs to their patients indirectly. Samuel Hahnemann’s Applied Homeopathy course offers a practical solution for homeopaths who are practicing allopathic medicine illegally as general practitioners. The course enhances their ability to treat common and uncomplicated diseases using homeopathy which they were previously treating with allopathic medicines illegally.`
      // },
      // {
      //   name: `Many homeopathic students and aspiring homeopaths in India abandon their profession due to the challenges and responsibilities they encounter in the early stage of their careers. This trend results in significant losses and hinders the development of homeopathy as a field.`
      // },
      {
        name: `Over the past decade, Dr. Shah conducted one-on-one 
meetings with hundreds of professionally qualified homeopaths who are either no longer practicing. His goal was to gain insight into their concerns and 
perspectives, aiming to address their clinical issues. By doing this, He hopes not 
only  to prevent  further  damage  to homeopathy but  also  to help  these 
practitioners regain their independence in the field.`
      },

      {
        name: `They have been largely separated in three specific group of homeopathic 
professionals, and his real-time observations for them are as follows:
`
      },
      {
        no: 1,
        ListTitleText: `After conducting one-on-one meetings with nearly 100 qualified homeopaths
who had been engaged in unauthorized allopathic general practice, Dr. Shah
uncovered a striking pattern — nearly 90% were men, while only 10% were
women. This gender imbalance appears to stem primarily from the financial
pressures many male homeopaths face soon after graduation, pressures that are
generally less immediate for their female counterparts.
`,
        ListTitleText1: `“In real-life observation, many homeopaths who later began unauthorized allopathic practice were
first exposed to modern-medicine experts during their graduation years. Over time, as students and
faculty developed a professional connection, these homeopaths learned to prescribe allopathic
medicines under their teachers’ supervision. With this growing familiarity, confidence, and hands-on
experience, they eventually started practising allopathy on their own without formal authorization.”`,
        ListTitleText2: `Over time, many of these male practitioners have grown disillusioned with the
monotonous, stressful, and legally risky nature of their unlicensed allopathic
work. Several have even faced legal scrutiny or penalties. In response, a
significant number have begun to display homeopathic medicines in their
clinics, partly as a protective measure to appear compliant and legitimate.`,
        ListTitleText3: `Only a small fraction of those interviewed continue to maintain a dual practice,
offering both homeopathic and unauthorized allopathic treatments side by side
— a reflection of the complex ethical and practical struggles faced by this
overlooked group of practitioners.`
      },
      {
        no: 2,
        ListTitleText: `After conducting one-on-one meetings with nearly 50 married female 
homeopaths who are managing their life responsibilities, Dr. Shah realized that 
this group exhibits the highest level of enthusiasm but also faces 
significant challenges in practicing homeopathy. Many of these women 
have struggled to balance their careers and personal lives after marriage. 
As a result, several scholar female graduates have left homeopathy to 
become full-time homemakers or have sought employment in allopathic hospitals for better survival and recognition. A few have pursued 
academic roles in homeopathy but find themselves unable to practice 
due to their academic commitments and family responsibilities. Almost 
all the females expressed their deep concerns about their inability to care 
for their parents in the way they wish, especially through homeopathic 
care. “If we had been doing that, the situation would have been quite 
different," they said. A surprising comment from the female homeopaths 
we spoke with was regarding their colleagues who have married and 
settled abroad. They expressed that these women carry a sense of grief, 
feeling unable to care for their families both in India and in their new 
countries while also being disconnected from their careers.
`
      },
      {
        no: 3,
        ListTitleText: `After engaging in nearly 50 one-on-one conversations with non-practicing
homeopathic academicians, Dr. Shah observed a striking pattern: over the years,
many of them have shouldered the responsibility of teaching subjects far outside
their primary domain of expertise. This
gradual drift from their original specialization has led to a steady decline in
clinical proficiency and a diminishing connection with real-world homeopathic
practice. As a result, a considerable number of these academicians have gradually
redirected their focus—choosing to prioritize family life, pursue non-
homeopathic interests, or join family businesses that offer greater stability,
fulfilment, and financial security compared to their academic roles.`,
        ListTitleText1: `A noteworthy observation is the gender composition within homeopathic
colleges, where the ratio of full-time female to male teaching staff is
approximately 75:25. This trend may be attributed to the relatively secure and
convenient nature of academic positions, which allow women to balance
professional commitments with family responsibilities while ensuring a steady
return with limited investment. However, this comfort zone has, in many cases,
restrained their growth in independent clinical practice, limiting their exposure
to the practical and entrepreneurial aspects of homeopathy.`
      },

      {
        title: 'THE OBSERVATIONS:',
        itemTopic: ' text-xl lg:text-5xl !mt-8'
      },
      {
        //         no: 4,
        //         ListTitleText: `Dr. Krutik Shah received feedback from my one-on-one meeting with nearly 50
        // qualified homeopaths working at various government levels. They
        // indicated that "administrative issues hinder the overall development and
        // effectiveness of homeopathy in serving the suffering community, both in
        // quality and quantity, through government channels. The ongoing
        // enhancement of clinical skills and technological support for homeopaths
        // serving the wider population at various government levels is need to be
        // addressed.”
        // `,

        // itemTopic: 'lg:ml-8 ml-7',
        name: `Their real-time situation and the reasons preventing independent 
practice of homeopathy were identified and examined based on 
information received from the mentioned group of people and the observation is that,
 `,
        subtopicalpha: true,
        subtopic: [
          {
            sub_name: `Dr. Shah was deeply moved by what he discovered while reaching out to
homeopaths across the country. Beneath years of silence and distance from their
profession, he found hearts still beating with an unspoken love for homeopathy
— a love mixed with longing, regret, and the quiet hope of returning one day.`,
            listStyle: 'roman',
            insideSubtopic: [
              {
                sub_name: ` Many shared how life had taken unexpected turns. They had stepped into
  teaching roles outside their expertise, shouldered family responsibilities, or
  pursued other careers — slowly drifting away from the art they once lived for. Over time, their clinical confidence faded, replaced by self-doubt and a quiet
  sense of loss. Yet deep within, the homeopathic healer in them never died.`
              },
              {
                sub_name: `They didn’t leave homeopathy out of disinterest — they did so out of necessity.
  Circumstances demanded it. But now, their world has changed. They see
  homeopathy rising — embraced by the public, recognized by the
  government, and respected by modern science. Their hearts are ready to return,
  yet they hesitate — unsure of where to begin, and afraid of failing once more.`
              },
              {
                sub_name: `What they seek is not just a course, but a path back home — one that offers
  step-by-step clinical guidance, mentorship, and renewed confidence. They want
  to rebuild not only their practice, but their identity as healers — to serve with
  skill, to live with dignity, and to rediscover the joy that first drew them to
  homeopathy.`
              }
            ]
          },
          {
            sub_name: `Qualified homeopaths involved in illegal allopathic GP practices seek to start their homeopathic practice due to the risks associated with unlawful allopathic GP work. They have expressed three specific observations.`,
            listStyle: 'roman',
            insideSubtopic: [
              {
                sub_name: `They aimed to minimize the waiting time before launching their
            homeopathic clinic and wanted to develop their skills for fast and
            effective prescribing of homeopathic medicines. This approach
            mirrored their previous, albeit illegal, practices of prescribing
            allopathic medicines, which has become ingrained in their
            mindset.`
              },
              {
                sub_name: `They feel both "enthusiastic and fearful" about starting their
            homeopathic practice. Consequently, they will continue to
            operate their ongoing illegal allopathic general practice, as it is
            their primary means of survival for the time being. Eventually,
            they plan to transition to a full-time homeopathic practice. To
            achieve their goal of an independent homeopathic practice, they
            seek continuous clinical guidance and support. `
              },
              {
                sub_name: `On the other hand, a group of homeopaths focused on financial
              gain has been hesitant to start their own practices, as they are
              content with their current lives and livelihoods.`
              }
            ]
          }

          // {
          //   sub_name: `Dr. Shah was surprised to find a strong willingness among most of the homeopaths Dr. Shah contacted to establish their independent homeopathic practice as they have living with deep love and regret for homeopathy. They recognize the public and government support for homeopathy especially in India, but they feel their voices are not being heard sincerely. However, they often lack motivation, clinical guidance, and ongoing support in their homeopathic journey. Many of them struggle with low self-esteem and express dissatisfaction with their professional lives overall. While they are eager to return to homeopathy, they are unaware of any courses that could address their core concerns and provide a clear, step-by-step guide for safely transitioning back into practice. They want to ensure that they do not make decisions that could jeopardize their well-being and livelihood.`
          // }
        ]
      },
      {
        title: 'THE HIDDEN TRUTH WE CAN NO LONGER IGNORE:',
        itemTopic: ' text-xl lg:text-5xl !mt-8'
      },

      {
        name: `Dr. Krutik Shah personally conducted one-to-one interactions with more than 200
homeopathic students across various colleges over the past decade. Through these
real-time conversations and close observations, several clear patterns emerged:`,
        subtopicbullets: true,
        subtopic: [
          {
            sub_name: `Too Many Books, Too Little Clarity: `,
            bold_title: true,
            sub_name1: `Since the inception of our science, we
have faced a fundamental challenge — the absence of standardized literature.
We have multiple Materia Medicas, several types of Repertories for different
kinds of cases, and countless books published under the title “Textbook of
Organon of Medicine.”`,
            sub_name2: `This naturally raises a critical question: `,
            sub_name_inside_subtopic1: `Which author is truly authentic, and to what extent?`,
            sub_name_inside_subtopic2: `Which set of books should they study?`,
            sub_name_inside_subtopic3: `Which references should they rely on throughout their career?`,
            sub_name_inside_subtopic4: `And how do they know that what they are learning aligns with the core principles
laid down by Hahnemann?`,
            sub_name3: `For a sincere student or a young practitioner, this creates immense confusion. This long-standing
lack of uniformity across homeopathic literature has been a major contributor to inconsistent
learning, varied interpretations, and uneven clinical application—issues that have persisted across
generations of homeopaths.`
          },

          {
            sub_name: `A steady decline in enthusiasm: `,
            bold_title: true,
            sub_name1: `Most students enter the first year with enthusiasm, but their motivation begins
to decline from the second year onward. By the fourth year, a significant
number have already started looking for alternative career options, eventually
distancing themselves from homeopathy altogether. By the time they reach
internship, many have already formed the belief—based on their
experiences—that homeopathic practice does not offer a sustainable or
promising future.`
          },
          {
            sub_name: `Challenges without guidance:`,
            bold_title: true,
            sub_name1: `The small group of students who choose to stay in
homeopathy often encounter unforeseen hurdles—academic, clinical, financial,
and emotional. With little structured mentorship or clinical support, many feel
lost. Consequently, some abandon the profession, while others drift into
unauthorized allopathic practice simply to survive.`
          },
          {
            bold_title: true,
            sub_name: `Failed attempts to seek help from seminars and workshops:`,
            sub_name_inside_subtopic1: `It is an undeniable reality that most participants attending homeopathic
seminars and workshops in India are students—either pursuing their
graduation or post-graduation. These events are typically themed having
glaring topics showing “The Strength of Homeopathy in Difficult or
Challenging Cases”. However, the question that genuinely concerned these students was, “How
many of them will actually encounter such cases in their day-to-day practice?”`,

            sub_name_inside_subtopic2: `What they truly needed were seminars that taught them how to build a
safe, risk-free, independent clinical practice with minimal investment and
a stable flow of patients in the early stages of their careers. They were
looking for guidance on managing the common acute and chronic
conditions they face daily—fevers, allergic disorders, skin problems,
chronic coryza, allergic rhinitis, constipation, URTIs, migraines, and
similar routine ailments. Yet, such everyday clinical scenarios rarely find space in these grand
presentations.`,

            sub_name_inside_subtopic3: `Compounding this issue, many students who sincerely attended multiple
seminars and advanced workshops in the hope of resolving their personal
and clinical challenges ended up feeling even more confused. The
remedies demonstrated in these sessions were often
unfamiliar—medicines they had never encountered during their
graduation. This created a deep sense of chaos and self-doubt. They found themselves torn between two worlds: Should they rely on the
fundamental, well-established homeopathic medicines taught in college as the
backbone of classical practice? OR should they follow the rare, lesser-known
remedies showcased by renowned homeopaths—presented in ways that
impressed the audience but often left beginners feeling inadequate,
overwhelmed, and lost?`,

            sub_name_inside_subtopic4: `This internal conflict widened the gap between their academic knowledge
and clinical expectations, pushing many students away from clarity and
confidence. The needs of the participants and the content delivered remain
misaligned—leaving young homeopaths dazzled by rare cases yet
underprepared for the real-world practice that awaits them.`
          },
          {
            sub_name: `Passion Without Support - The Story of Homeopathy’s Lost Clinicians:`,
            bold_title: true,
            sub_name1: `Many
of them even enrolled in courses offered by reputed homeopathic academies and
did benefit to some extent. However, their biggest concern remained unaddressed
— the need for continuous, real-time clinical support during the crucial initial
weeks and months of practice. They longed for someone to guide them case-by-case until they gained the confidence to independently manage patients in daily
practice. Unfortunately, this vital support system was missing. Despite their
sincere efforts to stay connected with the profession, they found no practical or
sustainable solutions. Their departure from homeopathy was never due to a lack of
love for the science; rather, it was life’s pressures overpowering their unfulfilled
desire to continue practicing the healing art they truly believed in.`
          },
          {
            sub_name: `A rare exception: `,
            bold_title: true,
            sub_name1: `Only a handful of students who were fortunate to be closely
associated with sincere, experienced homeopathic clinicians managed to remain in
the profession. Supported by authentic mentorship and real clinical exposure,
these few continued their healing journey with confidence and commitment.`
          }
        ]
      },

      {
        title: 'THE CONCLUSION:',
        itemTopic: ' text-xl lg:text-5xl !mt-8'
      },
      {
        name: `“From one-on-one meetings with almost all qualified non-practicing homeopaths
and all the students during their graduation, one thing became very clear — they
needed step-by-step guidance to start and grow their clinical practice, along with
steady financial stability through a regular flow of patients each day. They were not looking for more theory; they needed a strong, practical training
program that helps them face real-world challenges — from treating their very first
patient to becoming fully independent in practice.
In short, they wanted more than just a course. They wanted a complete roadmap to
gain confidence, clarity, and long-term success in homeopathic practice.`
      },

      {
        name: `This understanding led us to include a fourth target group: “A roadmap from beginner
to confident homeopath — a clinical program that addresses real-world challenges
from the first patient to the third year of independent practice.”`
      },
      {
        title: `THE MAKING OF THE SHAH COURSE:\nLIGHTING THE PATH BACK TO TRUE HOMEOPATHY:`,
        itemTopic: ' text-xl lg:text-5xl !mt-8'
      },
      {
        name: `Samuel Hahnemann’s Applied Homeopathy (SHAH) is a clinically driven program created
by seasoned practitioners who have spent years working closely with real patients and
mentoring young homeopaths. Designed especially for aspiring clinicians, SHAH brings
together the clarity of essential diagnostic principles with the depth and precision of
authentic homeopathic treatment, exactly the way a modern homeopathic physician must
function in real practice.`,
        name1: `In real time, this course is delivered through a unique dual-teaching model:`,
        subtopicbullets: true,
        subtopic: [
          {
            sub_name: `Essential Clinical Diagnosis: is taught exclusively by qualified allopathic specialists,
ensuring students gain accurate diagnostic understanding without crossing ethical
boundaries.`,
            bold_title: true
          },
          {
            sub_name: `Homeopathic Treatment: are taught by experienced homeopaths who demonstrate
how to convert diagnostic clarity into effective remedy selection and long-term
patient management.`,
            bold_title: true
          }
        ],
        name2: `Importantly, at no point are allopathic medicines, procedures, or surgeries taught in the course. The
        purpose of inviting allopathic faculty is not to dilute homeopathy, but to strengthen
        homeopathic practice—to prevent unethical or illegal allopathic practice and to empower
        students to remain confidently rooted in homeopathy.`,
        name3: `Through real clinical exposure, SHAH also addresses the essential but often ignored
dimensions of becoming a successful clinician. Students receive practical training in:`,
        subtopic2bullets: true,
        subtopic2: [
          {
            sub_name: `Stress and time management`
          },
          {
            sub_name: `Navigating mental–emotional challenges`
          },
          {
            sub_name: `Financial planning for young doctors`
          },
          {
            sub_name: `Developing winning personal and professional habits`
          },
          {
            sub_name: `Medico-legal responsibilities and safe practice laws`
          },
          {
            sub_name: `Indemnity insurance`
          }
        ],
        name4: `These are the real-life skills every clinician needs but are rarely taught in academic settings.`,
        name5: `In addition, SHAH integrates Clinical Naturopathy for faster recovery and Dietology to
enhance lifestyle, immunity, and overall health—echoing the universal principle that
prevention is better than cure. These modules empower future clinicians to guide patients not
only toward healing, but toward healthier, more conscious living.`,
        name6: `SHAH is not just a course; it is a real-time clinical experience crafted to rebuild confidence,
deepen practical understanding, and shape competent, ethical, and successful homeopathic
physicians.`
      },

      {
        name: `The Samuel Hahnemann’s Applied Homeopathy (SHAH) Course stands
as a transformative roadmap — guiding homeopaths from beginners to
confident, self-reliant practitioners. It is a clinically grounded program
that addresses the real-world challenges every homeopath encounters —
from their very first patient to the third year of independent practice
offering live clinical support.`,
        name1: `SHAH is not merely a course; it is a comprehensive vocational training program
meticulously designed to rebuild the foundation of practical homeopathy. It
nurtures clinical clarity, confidence, and long-term sustainability in practice —
empowering homeopaths to stand tall in their professional identity.`
      },
      {
        name: `Conceived and led by Dr. Krutik Shah, SHAH is a heartfelt initiative
created especially for homeopaths who have been forgotten, overlooked,
or left behind by circumstance. It recognizes the unspoken struggle of
those who stepped away from practice not by choice, but by necessity —
those who once carried the spark of healing but were never given the
right support to sustain it.`,
        name1: `By equipping participants with the ability to confidently manage common and
uncomplicated diseases through homeopathy — conditions many once treated
with allopathic medicines out of compulsion or uncertainty — SHAH provides
a practical, ethical, and empowering alternative.`
      },

      //       {
      //         name: `Dr. Krutik Shah is pleased to announce that "Samuel Hahnemann's Applied Homeopathy (SHAH)" is a clinical course specifically designed for homeopaths who have
      // been overlooked or neglected. Homeopathy especially in India has long needed a
      // comprehensive clinical course that addresses the concerns of this group and
      // provides long-term clinical support.`
      //       },
      {
        name: `In addition to selecting carefully chosen topics for the "Clinical Course 
Curriculum" tailored to the needs of our targeted group of homeopaths, Dr. Shah is 
excited to introduce four innovative clinical concepts that Dr. Shah believes will be 
ground-breaking in the field of homeopathy. They are:`,
        subtopic: [
          {
            sub_name: 'The Samuel Hahnemann Communities'
          },
          {
            sub_name: 'Low-Investment Ideas using AI for Homeopathic Practices'
          },

          // {
          //   sub_name: `Applied Ayurveda for self-healing`
          // },
          {
            sub_name: `Healing The Healers for Humanity`
          },
          {
            sub_name: 'Post-Course Completion Clinical Support through the “Organon with SHAH” Software'
          }
        ]
      },
      {
        name: `For years, homeopathy in India has awaited a program that truly listens
— one that doesn’t merely teach remedies, but revives confidence,
clinical skills, and a sense of purpose. The SHAH Course answers that
need through structured clinical guidance, mentorship, and continuous
support — addressing the very obstacles that distanced so many from
their calling.`,
        name1: `Ultimately, SHAH is far more than an educational endeavour. It is a journey of
rediscovery — helping every homeopath return to where they truly belong: the
heart of healing.`
      },
      {
        title: `THE EDUCATORS:`,
        itemTopic: ' text-xl lg:text-5xl !mt-8'
      },
      {
        name: `The saying "Stars come to the earth to make you a star" is particularly fitting for modern medicine experts. Dr. Shah would like to 
express heartfelt gratitude to all the professionals in modern medicine for 
their generous support and for stepping forward to share their invaluable 
knowledge for the benefit of humanity and the advancement of homeopathy. `,
        name1: `Dr. Shah feel truly blessed to witness international homeopathic clinicians agreeing to 
teach in this course and to engage in a noble initiative aimed at preventing 
harm to homeopaths and the practice of homeopathy. Both homeopathy and 
humanity will forever be grateful for the contributions made by experts in 
modern medicine and homeopathy.`,
        name2: `Dr. Shah is thankful to the Educators of Naturopathy, Dietology, Legal Awareness, Mindfulness, Finance, and 
        Insurance for their vital contributions to the often-overlooked areas of homeopathic practice. Their clinical insights will 
        empower a healthier, more balanced way of living for both doctors and patients.`
      },
      {
        name: `Learning is only valuable when it translates into tangible rewards. These 
concepts are designed to provide robust clinical support, establishing a strong 
foundation for practitioners to develop independent homeopathic practices. 
They enable practitioners to monitor their patients in a digital, individualized, 
and qualitative manner, facilitating quick and effective success.`
      },
      {
        title: 'EMPOWERING HOMEOPATHS TO SERVE THE NATION:',
        itemTopic: ' text-xl lg:text-5xl !mt-8'
      },

      {
        subtopiccheck: true,
        subtopic: [
          {
            sub_name: `Discount for Rural Practice Homeopaths: Indian homeopaths serving in rural and Gram Panchayat areas will be offered this course at a
specially subsidized fee. The purpose is clear and unwavering: to ensure that even the poorest and
most underserved patients receive the benefits of high-quality homeopathic clinical care delivered
by doctors empowered with advanced, practice-oriented training. Applicants must
attach their current Shop Act Registration License as proof while signing
up.`,
            bold_title: true
          },

          {
            sub_name: `Concession for Government-Sector Homeopaths: Indian homeopaths dedicated to patient care across government and semi-
government healthcare platforms will also be granted this special
concession, in recognition of their unwavering service to the masses.
Applicants must attach their valid official government ID card for
verification while signing up.`,
            bold_title: true
          },
          {
            sub_name: `Complimentary Foundation Course for All Participants: The Foundation Course in Samuel Hahnemann’s Applied Homeopathy
(SHAH) will be offered free of charge to every participant upon signing
up and joining the Samuel Hahnemann’s Applied Homeopathy
community, ensuring that everyone begins their learning journey with a
strong and unified foundation.`,
            bold_title: true
          },
          {
            sub_name: `Six Months of Live Clinical Support and Complimentary Access to
“The Organon Software”: Upon completing the Expert Course in Samuel Hahnemann’s Applied
Homeopathy, students will receive six months of dedicated live clinical
guidance, ensuring they remain supported, confident, and never alone in
their professional journey. In addition, they will enjoy complimentary six-month access to The Organon Software, enabling them to resolve
day-to-day clinical queries with clarity, precision, and ease.`,
            bold_title: true
          }
        ]
      }
    ]
  }

  const aboutShah1 = {
    title: 'The Story Behind SHAH: From Challenge to Change',
    itemTopic: 'text-center',
    items: [
      {
        name1: `Exploring the responses from the “Be a Homeopath” courses offered by Organon with SHAH - namely, "Reasons why Homeopaths should avoid practicing Allopathic Medicine (General Practice)" and "Female and Homeopathic Career: Responsibilities, Opportunities, and Management" have inspired us to develop the second part of our mission: the “Samuel Hahnemann’s Applied Homeopathy” online education program. This program aims to address and resolve the deeper concerns that homeopaths face in their practice.`,
        itemTopic: 'text-center'
      }
    ]
  }

  return (
    <>
      <ScreenWrapper className='py-4 lg:py-8'>
        <div className='my-5'>
          <ListItems
            listTitle={aboutShah1?.title}
            listArray={aboutShah1?.items || []}
            titleSize='tracking-wide break-word text-center'
          />
        </div>
        <div className='my-5'>
          <ListItems
            listTitle={''}
            listArray={beHomeopathOne?.items || []}
            variant='secondary'
            titleSize='tracking-wide break-word '
          />
        </div>
      </ScreenWrapper>
      <ScreenWrapper className='py-4 lg:py-8'>
        <div className='group/target relative !items-center rounded-3xl border border-mainColor/20 bg-gradient-to-br from-secondaryColor/10 via-secondaryColor/5 to-completedColor/10 p-14 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-buttonColor/50 hover:shadow-xl'>
          {/* Subtle glow on hover */}
          <div className='absolute inset-0 rounded-3xl bg-secondaryColor/10 opacity-0 transition-opacity duration-300 group-hover/target:opacity-100'></div>

          <div className='relative flex gap-3'>
            {/* <span className='text-3xl font-black text-buttonColor tracking-tighter'>{group.id}.</span> */}
            <p className='text-lg font-semibold text-mainColor md:text-3xl lg:leading-[50px]'>{`“United we win; divided we fall! This course is designed to provide individuals with a chance to start or restart their independent homeopathic practices at any stage of their careers. It offers an opportunity to live a life without regret and pursue their passion. Homeopathy is ready to welcome them back home.”`}</p>
          </div>

          <p className='mt-5 text-end text-2xl font-bold'>
            - Dr. Krutik Shah
            <br />
            <span className='font-normal'>Proud Child of Dr. Samuel Hahnemann</span>
          </p>
        </div>
      </ScreenWrapper>
    </>
  )
}

export default PrefacePage
