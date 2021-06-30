import BestPracticeCard from './BestPracticeCard'
import '../../style/bestPractice.scss'
import Posture1 from '../../assets/posture1.png'
import Posture2 from '../../assets/posture2.png'
import Posture3 from '../../assets/posture3.png'
import Meditation1 from '../../assets/meditation1.jpg'
import Meditation2 from '../../assets/meditation2.jpg'
import Meditation3 from '../../assets/meditation3.jpg'
import Hamstring from '../../assets/hamstring.gif'
import Shoulder from '../../assets/shoulder.gif'
import Lower from '../../assets/lower.gif'


export default function BestPractice () {


    const Straigthen = 
        [
             {   image: Posture1,
                 title: "Wrong sitting position",
                 text: "Don't poke or jut your chin forward, nor hunch your shoulders. Avoid sitting with your spine in a 'C' shape (this puts your back under strain). Avoid sitting with your knees higher than your hips (spine becomes 'C' shaped, knees can easily fall to one side leading to a twisted pelvis), or lower than your hips (bottom slips forward on the seat and knees knock together)."

             },
             {  
                 image: Posture2,
                 title: "Correct sitting position",
                 text: "The first aspect to address is the workstation. Make sure the seat height is correct-it should allow elbows and wrists to be at 90 degrees, feet should be flat on the ground or a footstool. You should be looking directly at your screen with your eyes hitting the top third of your screen. When using your mouse keep your elbow as close to your body as you can."
             },
             {  
                image: Posture3,
                title: "Correct standing position",
                text: "When using a standing workstation, keep your head, neck, torso and legs approximately in line and vertical. Choose a desk deep enough to allow your monitor to fit directly in front of you and at least 20 inches (51 centimeters) away. The desk should allow you to keep your wrists straight and your hands at or slightly below the level of your elbows. The top of the screen should be at or slightly below eye level."
            }    
        ]
    
        const Breathe = 
        [
             {   image: Meditation1,
                 title: "Bring attention to your body",
                 text: "Start by sitting comfortably and closing your eyes. Relax your shoulders, and place your hands on your lap. Take a few deep breaths, and allow your body to relax with each exhale. Start rotating your awareness within your body starting with your toes, and begin to imagine a wave of relaxation moving slowly up your legs all the way to the hips. Then, bring your awareness to your fingers, and imagine a wave of relaxation moving up through your hands all the way to your shoulders. Allow your belly to relax, and feel your breath moving your chest and stomach. Relax your back muscles, your neck muscles, and your head."
             },
             {  
                 image: Meditation2,
                 title: "Extend the exhale",
                 text: "Stuck in a boring meeting? Start following your breath and invite your body to unwind. Take your attention to your breath, and first just observe how it feels. Is it long and steady, or short and shallow? Start to take longer breaths, fully inhaling, and fully exhaling. Then, count to 4 as you inhale, and count to 6 as you exhale, making your exhale slightly longer than your inhale. After a time, this will calm the body by promoting the parasympathetic nervous system, which is responsible for slowing the heart rate and allowing the body to rest. Keep counting your inhale and exhale for 5 to 10 minutes before resuming normal breath again."
             },
             {  
                image: Meditation3,
                title: "Change the feeling of stress",
                text: "The next time you feel stressed or uncomfortable because you are too busy, stop and try to identify where in your body this stress is located. Do you feel it in your head, throat, chest, or belly? Close your eyes, and fully bring your awareness to this feeling. Does it have a movement, a distinct shape, a color? Does it feel hot or cold? Does it have a smell? Then, try to change these variables one by one. Try to change the shape into something nicer. Try to change the color, movement, or even location of the feeling. Once you identify the feeling as a separate entity within you, you can play with it more freely."
            }    
        ]

        const Stretch = 
        [
             {   image: Hamstring,
                 title: "Hamstring stretches",
                 text: "Raise your arm and bend it so that your hand reaches toward the opposite side. Use your other hand and pull the elbow toward your head. Hold for 10 to 30 seconds. Repeat on the other side."
             },
             {  
                 image: Shoulder,
                 title: "Shoulder stretch",
                 text: "Done standing or sitting. Stretch one arm across your body, holding with your opposite hand, and pulling toward your chest until you feel a nice stretch in your shoulder."
             },
             {  
                image: Lower,
                title: "Lower back stretch",
                text: "While sitting and keeping your back straight, bring one of your knees toward your chest. Using both hands, gently pull your thigh toward you. You should feel tension in your lower back and upper buttock."
            }    
        ]

    return(
        <div>  
           <div>
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
    </div>
    )
  }