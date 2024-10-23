
import './App.css'
import Car from './components/Car.jsx'

function App() {
  const cars=[
    {
    image: './src/assets/images/forester.jpeg',
    make:'subaru',
    name:"forester",
    colour:"blue",
    year:"2022",
    },
    {
      image: './src/assets/images/outlander.jpeg',
      make:'mitsubishi',
      name:"outlander",
      colour:"white",
      year:"2010",
      },
      {
        image: './src/assets/images/cx5.jpeg',
        make:'mazda',
        name:"cx5",
        colour:"black",
        year:"2002",
        },
        {
          image: './src/assets/images/probox.jpeg',
          make:'toyota',
          name:"probox",
          colour:"grey",
          year:"2020",
          },
          {
            image: './src/assets/images/prado.jpeg',
            make:'toyota',
            name:"prado",
            colour:"green",
            year:"2012",
            },
            {
              image: './src/assets/images/demio.jpeg',
              make:'mazda',
              name:"demio",
              colour:"orange",
              year:"2011",
              },
              {
                image: './src/assets/images/tesla.jpeg',
                make:'tesla',
                name:"new",
                colour:"red",
                year:"2011",
                },
                {
                  image: './src/assets/images/honda.jpeg',
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
