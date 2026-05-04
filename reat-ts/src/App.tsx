import './App.css'
import { Card } from './components/Card'
import { Counter } from './components/Counter'
import type { Chai } from './types'
import { List } from './components/List'
import { OrderForm } from './components/OrderForm'
import { Dummy } from './components/Dummy'

// Static data for menu
const menu: Chai[] = [
  {id: 1, name: "Masala", price: 45},
  {id: 2, name: "Ginger", price: 60},
  {id: 3, name: "Lemon", price: 20},
  {id: 4, name: "Chai Latte", price: 100},

]

function App() {

  return (
    <>
      <h2>Vite + React</h2>
      <Card name='Apple' price={250}/>
      <Card name='Apple' price={250}/>

      <div>
        <Counter/>
      </div>

      <div>
        <List
        items={menu}
        />
      </div>

      <div>
        <OrderForm onSubmit={(order) => {
          console.log("Placed", order.name, order.cups)
        }}/>
      </div>

      <div>
        <Dummy title='Typescript' footer={<button>Order now</button>}/>
      </div>
    </>
  )
}

export default App
