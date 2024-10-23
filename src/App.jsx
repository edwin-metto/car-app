import forester from './assets/images/forester.jpeg'
import outlander from './assets/images/outlander.jpeg'
import cx5 from './assets/images/cx5.jpeg'
import probox from './assets/images/probox.jpeg'
import prado from './assets/images/prado.jpeg'
import demio from './assets/images/demio.jpeg'
import tesla from './assets/images/tesla.jpeg'
import honda from './assets/images/honda.jpeg'
import './App.css'
import Car from './components/Car.jsx'

function App() {
  const cars=[
    {
    image:forester,
    make:'subaru',
    name:"forester",
    colour:"blue",
    year:"2022",
    },
    {
      image:outlander,
      make:'mitsubishi',
      name:"outlander",
      colour:"white",
      year:"2010",
      },
      {
        image:cx5,
        make:'mazda',
        name:"cx5",
        colour:"black",
        year:"2002",
        },
        {
          image: probox,
          make:'toyota',
          name:"probox",
          colour:"grey",
          year:"2020",
          },
          {
            image:prado ,
            make:'toyota',
            name:"prado",
            colour:"green",
            year:"2012",
            },
            {
              image:demio,
              make:'mazda',
              name:"demio",
              colour:"orange",
              year:"2011",
              },
              {
                image:tesla,
                make:'tesla',
                name:"new",
                colour:"red",
                year:"2011",
                },
                {
                  image: honda,
                  make:'honda',
                  name:"fit",
                  colour:"blue",
                  year:"2020",
                  },
  ]

  return (
    <>
      <div className='flex flex-wrap bg-black'>
        {cars.map((car,index) => (
          <div key={index}>
            <Car data ={car}/>

          </div>
        ))}
        

      </div>
      
      

    </>
  )
}

export default App
