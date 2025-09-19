import logo from '/logo-name.svg'


export  default function Header (){
  const now = new Date()
  return (
    <header>
      <img src={logo} alt={'Result'} />
      {/* <h3>Result university</h3> */}

      <span>Time: {now.toLocaleTimeString()}</span>
    </header>
  )
}