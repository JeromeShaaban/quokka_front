import BackgroundStars from '../BackgroundStars'
import BestPracticeCard from './BestPracticeCard'
import '../../style/bestPractice.scss'
import Posture1 from '../../assets/posture1.png'
import Posture2 from '../../assets/posture2.png'
import Posture3 from '../../assets/posture3.png'

export default function BestPractice () {

    const Straigthen = 
        [
             {   image: Posture1,
                 title: "Wrong sitting position",
                 text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
             },
             {  
                 image: Posture2,
                 title: "Correct sitting position",
                 text: "The first aspect to address is the workstation. Make sure the seat height is correct-it should allow elbows and wrists to be at 90 degrees, feet should be flat on the ground or a footstool. You should be looking directly at your screen with your eyes hitting the top third of your screen. When using your mouse keep your elbow as close to your body as you can."
             },
             {  
                image: Posture3,
                title: "Correct standing position",
                text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum comes from a line in section 1.10.32."
            }    
        ]
    
        const Breathe = 
        [
             {   image: Posture1,
                 title: "Wrong sitting position",
                 text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
             },
             {  
                 image: Posture2,
                 title: "Correct sitting position",
                 text: "The first aspect to address is the workstation. Make sure the seat height is correct-it should allow elbows and wrists to be at 90 degrees, feet should be flat on the ground or a footstool. You should be looking directly at your screen with your eyes hitting the top third of your screen. When using your mouse keep your elbow as close to your body as you can."
             },
             {  
                image: Posture3,
                title: "Correct standing position",
                text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum comes from a line in section 1.10.32."
            }    
        ]

        const Stretch = 
        [
             {   image: Posture1,
                 title: "Wrong sitting position",
                 text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
             },
             {  
                 image: Posture2,
                 title: "Correct sitting position",
                 text: "The first aspect to address is the workstation. Make sure the seat height is correct-it should allow elbows and wrists to be at 90 degrees, feet should be flat on the ground or a footstool. You should be looking directly at your screen with your eyes hitting the top third of your screen. When using your mouse keep your elbow as close to your body as you can."
             },
             {  
                image: Posture3,
                title: "Correct standing position",
                text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum comes from a line in section 1.10.32."
            }    
        ]

    return(
        <div>
           <BackgroundStars />
        <div>
        <h1 class="white">Straigthen up</h1>
        <div class="flexBest">
        {
            Straigthen.map((straight, index) => {
                return (
                <BestPracticeCard 
                    index={index}
                    image={straight.image}
                    title={straight.title}
                    text={straight.text}/>)
            })
        }
       </div>
        <h1 class="white">Breathe</h1>
        <div class="flexBest">
        {
            Breathe.map((breath, index) => {
                return (
                <BestPracticeCard 
                    index={index}
                    image={breath.image}
                    title={breath.title}
                    text={breath.text}/>)
            })
        }
        </div>
        <h1 class="white">Stretch</h1>
        <div class="flexBest">
        {
            Stretch.map((stretch, index) => {
                return (
                <BestPracticeCard 
                    index={index}
                    image={stretch.image}
                    title={stretch.title}
                    text={stretch.text}/>)
            })
        }
        </div>
        </div>
    </div>
    )
  }