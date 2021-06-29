import '../../style/home.scss'
import homeImg from '../../assets/workers.png'
import Module from './Module'


const modules = [
  { title : "🖥️ Work ",
  desc :"Help yourself being focused at work and studies. We provide a timer according to the pomodoro method, that allows you to take breaks every 25min to be focused all the day! And bonus : some chill music to be relaxed!",
  path:"/pomodoro_music"},
  { title : "🧘🏽 Relax ",
  desc :"Learn how to be relaxed! Deep breath, sitting correctly, stretch regularly : take care of yourself before anything else!",
  path:"/best_practice"},
  { title : "🥗 Fuel ",
  desc :"Lunch break ? Time for a snack ? We provide you some cool recipies to fuel you with good energy! Don't forget to tag your favorites",
  path:"/recipe"}
  ];

export default function Home () {
  
  return(
    <div>   
      
      <div id="home" className="homeContainer">
        <img src={homeImg} alt="Home"/>
        <div >
        <h3>You've been working for hours? <br/> Your back hurts, your eyes burn, <br/> you can't think straight?</h3>
        <h3>Take a break!</h3>
        <h3>This app will teach you how to relax,  <br/> set up properly, fuel yourself  <br/> and then use a timer <br/> to work as efficiently as possible.</h3>
        </div>
        </div>
        <div className="homeContainer">
             <h2>Discover the App : </h2>
           <div className="modules">
             {modules.map((module)=>(
               <Module title={module.title} desc={module.desc} path={module.path}/>
             ))}
           </div>
           </div>
           
  </div>

  )
}