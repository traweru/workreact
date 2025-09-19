import Header from './components/Header'
import {ways, differences} from './data'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { useState } from 'react'
export default function App() {

  const [contentType,setContentType] = useState(null)
  
  // let content = "Нажми на кнопку"
  console.log('App Component Render')
  function handleClick(type){
    // console.log('button clicked', type)
    setContentType(type)
    // content = type
  }
  return (
  <div>
<Header/>
    <main>
    <section>
      <h3>Наш подход решение </h3>
      <ul>
      <WayToTeach title={ways[0].title} description={ways[0].description}/>
      <WayToTeach {...ways [1]}/>
      <WayToTeach {...ways [2]}/>
      <WayToTeach {...ways [3]}/>
      </ul>
    </section>
    <section>
      <h3>Чем мы отличаемся от других</h3>
          <Button isActive={contentType == 'way'} onClick={() => handleClick('way')}>Подход</Button>
          <Button isActive={contentType == 'easy'}onClick={() => handleClick('easy')}>Доступность</Button>
          <Button isActive={contentType == 'program'}onClick={() => handleClick('program')}>Концентрация</Button>
          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ):(
          <div>Нажми</div> 
          )} */}
          {!contentType&&<p>Нажми</p>}
          {contentType&&<p>{differences[contentType]}</p>}
      </section>
    </main>
  </div>
  )
}

