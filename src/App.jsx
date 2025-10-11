import { useState } from 'react'
import './App.css'

function App() {

  const [Birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(0);



  const calculateAge = () => {
    const today = new Date();
    const BirthdateDate = new Date(Birthdate)
    let age = today.getFullYear() - BirthdateDate.getFullYear();
    let monthdiff = today.getMonth() - BirthdateDate.getMonth();
    if (monthdiff < 0 || (monthdiff === 0 && today.getData() < BirthdateDate)) {
      age--;
    }
    setAge(age);
  }

  const Reset = ()=>{
    setBirthdate('');
    setAge(0);
  }
 return (
    <>
      <div className="bg-gray-300 min-h-screen flex items-center justify-center">
        <div className="p-5 my-8 mx-auto min-h-screen rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
          <h1 className='font-bold text-2xl font-serif'> Age calculator</h1>
          <p className='font-serif'>The Age Calculator can determine the age of interval between two dress.Th e calculated age will be displaed in year . </p>
          <div className='flex p-4'>
            <div className='right mr-3.5 gap-3 border-2 border-black bg-amber-50 p-3 rounded-lg min-h-[40vh] w-[50vh]'>
              <h3 className='font-bold text-2xl font-serif text-black'>Date of Birth</h3>
              <input className='date border-black p-2.5 m-2.5 text-black' type='date' value={Birthdate} onChange={e => setBirthdate(e.target.value)} />
              <div className='flex gap-2.5'>
                <button className='bg-red-500 hover:bg-red-900 text-amber-50 m-2.5 p-2.5 rounded-xl  ' onClick={calculateAge}>Calculate Age</button>
                <button className='bg-green-400 hover:bg-green-900 text-amber-50 m-2.5 p-2.5 rounded-xl' onClick={Reset}>Reset</button>
              </div>
            </div>

            <div className='left  gap-3 border-2 border-black bg-amber-50 p-3 rounded-lg min-h-[40-vh] w-[50vh]'>
              <div>
                <h3 className='text-2xl font-medium font-serif text-black' >Your Age is</h3>
              </div>
              <h1 className='text-blue-800 text-4xl font-bold m-2.5 p-2.5'>{age > 0 ? `${age}` : ''}</h1>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
