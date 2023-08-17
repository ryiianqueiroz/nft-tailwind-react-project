import Clock from './images/icon-clock.svg'
import Ethereum from './images/icon-ethereum.svg'
import Avatar from './images/image-avatar.png'
import Equilibrium from './images/image-equilibrium.jpg'

function App() {
  return (
    <div className="App bg-[rgb(13,25,43)] min-h-screen flex justify-center items-center">
      
      <div className="container max-w-[25rem] bg-[#14253D] max-h-[40rem] shadow-2xl rounded-xl md:max-w-[20rem] sm:max-w-[18rem]">
      
        <div className="content p-6">
      
          <div className="image">
            <img src={Equilibrium} alt="#" className='w-full h-full'/>
          </div>

          <div className="text">
            <h2 className='text-white text-2xl mt-4 font-bold md:text-xl'>Equilibrium #3429</h2>
            <p className='text-md mt-2 text-indigo-300 md:text-sm'>Our Equilibrium collection promotes balance and calm.</p>
      
            <div className="text-eth flex justify-between mt-2 mb-2">
              <div className="eth flex">
                <img src={Ethereum} alt="#" />
                <p className='text-[#3dc2cc] font-bold ml-2 md:text-md sm:text-sm'>0.041 ETH</p>
              </div>
              <div className="clock flex">
                <img src={Clock} alt="#" />
                <p className='text-[#91b1cf] font-bold ml-2 md:text-md sm:text-sm'>3 days left</p>
              </div>
            </div>
      
            <hr />
      
            <div className="avatar flex align-center mt-3 items-center">
              <img src={Avatar} alt="#" className='w-10 border-red-100 border-2 rounded-full'/>
              <p className='text-[#91b1cf] ml-2 sm:text-sm'>Creation of <span className='text-white'>Jules Wyvern</span></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
