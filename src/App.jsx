import { useEffect, useState } from 'react'
import './App.css'
import Nav from './component/Nav'
import Banner from './component/Banner'
import Contact from './component/Contact'
import Card from './component/Card'

function App() {
  let [data, setData] = useState([])

  useEffect(() => {
    fetch('/List.json')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
 
  return (
    <>
      <Nav />
      <Banner />
      <Contact />
    
      <div className='flex '>
        <div className='w-[60%] flex flex-wrap gap-3'>
          {data.map((pd)=>(<Card pd={pd}/>))}
        </div>
        <div className='w-[40%]'>
        <div>
                <div className="content flex flex-col items-center w-full mb-4">
                    <p className="text-2xl font-bold ">Want to cook: 01</p>
                    <hr className="w-[60%] text-center" />
                </div>
                <div className="fast">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Ganderton</td>
                                    <td>Quality </td>
                                    <td>Blue</td>
                                    <td><button className="btn btn-sm btn-accent">Preparing</button></td>
                                </tr>                             
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div className="content flex flex-col items-center w-full mb-4">
                    <p className="text-2xl font-bold ">Currently cooking: 02</p>
                    <hr className="w-[60%] text-center" />
                </div>
                <div className="fast">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Ganderton</td>
                                    <td>Quality </td>
                                    <td>Blue</td>                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
