import BestPracticeCard from './BestPracticeCard'
import '../../style/bestPractice.scss'
import Posture1 from '../../assets/posture1.png'
import Posture2 from '../../assets/posture2.png'
import Posture3 from '../../assets/posture3.png'
import Meditation1 from '../../assets/meditation1.jpg'
import Meditation2 from '../../assets/meditation2.jpg'
import Meditation3 from '../../assets/meditation3.jpg'

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
             {   image: Meditation1,
                 title: "Bring attention to your body",
                 text: "Start by sitting comfortably and closing your eyes. Relax your shoulders, and place your hands on your lap. Take a few deep breaths, and allow your body to relax with each exhale. Start rotating your awareness within your body starting with your toes, and begin to imagine a wave of relaxation moving slowly up your legs all the way to the hips. Then, bring your awareness to your fingers, and imagine a wave of relaxation moving up through your hands all the way to your shoulders. Allow your belly to relax, and feel your breath moving your chest and stomach. Relax your back muscles, your neck muscles, and your head. Finally, let go of any tension in your facial muscles and jaw. Observe your body, and move the wave of relaxation where it’s mostly needed. Continue for 5 to 10 minutes before resuming your tasks."
             },
             {  
                 image: Meditation2,
                 title: "Extend the exhale",
                 text: "Stuck in a boring meeting? Start following your breath and invite your body to unwind. Take your attention to your breath, and first just observe how it feels. Is it long and steady, or short and shallow? Start to take longer breaths, fully inhaling, and fully exhaling. Then, count to 4 as you inhale, and count to 6 as you exhale, making your exhale slightly longer than your inhale. After a time, this will calm the body by promoting the parasympathetic nervous system, which is responsible for slowing the heart rate and allowing the body to rest. Keep counting your inhale and exhale for 5 to 10 minutes before resuming normal breath again."
             },
             {  
                image: Meditation3,
                title: "Change the feeling of stress",
                text: "The next time you feel stressed or uncomfortable because you are too busy, stop and try to identify where in your body this stress is located. Do you feel it in your head, throat, chest, or belly? Close your eyes, and fully bring your awareness to this feeling. Does it have a movement, a distinct shape, a color? Does it feel hot or cold? Does it have a smell? Then, try to change these variables one by one. Try to change the shape into something nicer. Try to change the color, movement, or even location of the feeling. Once you identify the feeling as a separate entity within you, you can play with it more freely. This practice of control over how you feel stress will be beneficial."
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
    )
  }