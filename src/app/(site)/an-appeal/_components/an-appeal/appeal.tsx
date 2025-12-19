// ** Custom Component Imports
import ListItems from '@/components/cards/list-items'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

const AppealPage = () => {
  const beHomeopathOne = {
    title: 'An Appeal To Indian Homeopaths:',
    items: [
      {
        itemTopic: 'font-bold',
        title: `From the heart of one homeopath to the other for Homeopathy:`
      },
      {
        name: `You can recall many of your homeopathic classmates or colleagues who were brilliant, top performers, or scholars in their academic studies but were unable to pursue a career as professional homeopaths due to the challenges they faced in life. As a result, homeopathy lost exceptionally talented individuals who could have made a significant impact on the suffering of humanity.`,
        name1: `It's well known that a large percentage of homeopathic graduates leave the field, while only a few choose to build their careers in homeopathy. This is one of the major reasons we see the current state of "broken homeopathy" today.`
      },

      {
        name: `On the other hand, there is significant government support and a strong public interest in choosing homeopathic treatments for chronic diseases. However, the scarcity of qualified homeopaths in the local area often leads to disappointment for those seeking these options.`
      },
      {
        name: `For homeopaths interested in starting or restarting their practice, the courses offered by Samuel Hahnemann's Applied Homeopathy will provide a blend of nurturing support, protective guidance, and clinical expertise from contemporary masters. These courses will enhance their knowledge, clarify their uncertainties, and dispel myths and doubts. This course will also boost their confidence in practising homeopathy and help them achieve financial independence.`
      },

      {
        name: `SHAH urges each of you to share information about this invaluable course with anyone who might benefit. By participating, individuals can establish their own independent homeopathic practice, allowing them to fully leverage the time and effort they dedicated to their graduation or post-graduation in homeopathy. Help them to start their professional journey!`
      },
      {
        name: `In order to address such a mammoth task - we seek suggestions and support from the Central Government, the Ministry of Ayush, the National Commission of Homeopathy (NCH), State Governments, universities, and homeopathic colleges.`
      }
    ]
  }

  return (
    <ScreenWrapper className='py-4 lg:py-8'>
      <div className='my-5'>
        <ListItems
          listTitle={beHomeopathOne?.title}
          listArray={beHomeopathOne?.items || []}
          variant='secondary'
          titleSize='tracking-wide break-word '
        />
      </div>
    </ScreenWrapper>
  )
}

export default AppealPage
