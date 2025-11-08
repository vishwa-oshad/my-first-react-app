import { useEffect, useState } from "react";

const hasLinked = true;

const Button1 = () => {
  return (
    <button>Close</button>
  )
}

const Card = ({ title }) => {
  const [count, setCount] = useState(0)
  const [hasLiked, setHasLinked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  useEffect(() => { 
    console.log('CARD RENDERED');
  }, []); 

  return (
    <div className="card" onClick={() => setCount((prevState) => count + 1)}>
      <h2>{title} <br /> {count} -</h2>
      <Button1 />
      <button onClick={() => setHasLinked(!hasLiked)}>
        {hasLiked ? '💖 ' : "💘"}
      </button>
    </div>
  )
}


const App = () => {

  return (
    <div className="card-container">
      {/* <Card title="Star Wars" rating={5} isCool={true}  actros={{name:"Actros"}}/> */}
      <Card title="Star Wars" hasLiked={hasLinked} />
      <Card title="Avatar" />
      <Card title="The Lion king" />

    </div>

  )
}

export default App
