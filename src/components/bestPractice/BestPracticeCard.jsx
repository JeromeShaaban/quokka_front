import '../../style/bestPracticeCards.scss'


export default function Card ({image, title, text}) {

    return(
        <>
        <div class="flex">
            <img class="img" src={image} alt="Posture"/>
            <div id="blur">
                <h2 id="titleBest">{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    </>
    )
  }