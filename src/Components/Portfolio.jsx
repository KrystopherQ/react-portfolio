import React from "react";
import KQSWA from '../assets/KQSWA.png'
import note from '../assets/note.png'
import pethub from '../assets/pethub.png'
import adven from '../assets/adven.png'

function Portfolio(){
  return(
    <div>
<div class="divider self-center lg:divider-horizontal">  </div> 

<div class="grid place-items-center bg-no-repeat " >
  <div class="card w-96 glass">
  <figure><img src={pethub} alt="pethub page landing page"/></figure>
    <div class="card-body">
      <h2 class="card-title text-base-100">PETHUB</h2>
      <p class="text-base-100">PetHub was created out of passion for our pets. It was a project in collaboration with three other contributors.</p>
      <div class="card-actions justify-end">
        <a href='https://krystopherq.github.io/pethub/' ><button class="btn">VISIT</button></a>
      </div>
    </div>
  </div>
</div>


    <div class="divider self-center lg:divider-horizontal" >  </div> 
    <div class="grid place-items-center bg-no-repeat" >
    <div class="card w-96 glass">
    <figure><img src={adven} alt="adventure quest landing page"/></figure>
      <div class="card-body">
        <h2 class="card-title text-base-100">ADVENTURE QUEST</h2>
        <p class="text-base-100">A group collaboration to create a D&D game.</p>
        <div class="card-actions justify-end">
          <a href="https://warm-falls-71074.herokuapp.com/" ><button class="btn">VISIT</button></a>
        </div>
      </div>
    </div>
  </div>
  

  <div class="divider self-center lg:divider-horizontal">  </div> 
  <div class="grid place-items-center bg-no-repeat" >
  <div class="card w-96 glass">
  <figure><img src={KQSWA} alt="weather app landing page"/></figure>
    <div class="card-body">
      <h2 class="card-title text-base-100">KQSWA</h2>
      <p class="text-base-100">This application was created so that you can view live time and weather forecast from any location in the world.</p>
      <div class="card-actions justify-end">
        <a href="https://krystopherq.github.io/KQSWA/" ><button class="btn">VISIT</button></a>
      </div>
    </div>
  </div>
</div>


<div class="divider self-center lg:divider-horizontal">  </div> 
<div class="grid place-items-center bg-no-repeat"  >
<div class="card w-96 glass">
<figure><img src={note} alt="note taker landing page"/></figure>
  <div class="card-body">
    <h2 class="card-title text-base-100">NOTE TAKER MACHINE</h2>
    <p class="text-base-100">Application created to take notes and save/delete them.</p>
    <div class="card-actions justify-end">
      <a href="https://young-depths-13855.herokuapp.com/" ><button class="btn">VISIT</button></a>
    </div>
  </div>
</div>
</div>


</div>

  )
}

export default Portfolio;