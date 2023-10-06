import { useParams } from 'react-router-dom'
import Footer from '../component/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'

function StudentDetail() {

  const { StudentID } = useParams()
  const [StudentDetail, setStudentDetail] = useState("");

  const ToSearchStudent = () => {
    window.location.href = "/"
}

  const fetchData = () => {
    axios.get(process.env.REACT_APP_API_URL + '/search', { params: { studentID: StudentID } })
      .then(res => {
        if (res.data.error === true) {
          console.log("ERROR FOUND");
          return;
        }
        setStudentDetail(res.data.data);
      })
      .catch(error => {
        console.log(error.res);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  // console.log(StudentDetail);

  return (
    <>
      <div className='  space-y-4 min-h-screen bg-white border border-white'>
        <div>
          <h1 className=' text-center text-4xl mt-4  font-bold text-black'>คะแนนนิสิต</h1>
        </div>
        <div>
          <div className=' text-black space-y-6 space-x-4'>
            <div className=' place-content-center  justify-center flex flex-row'>
              <div className='text-center font-bold text-2xl flex space-x-4 text-black'>
                <p>{StudentDetail.studentID}</p>
                <p>{StudentDetail.name}</p>
              </div>
            </div>
            <div className=' text-black space-y-6 bg-slate-300 rounded-lg '>
              <div className=' bg- gap-5 place-content-center flex justify-center '>
                <div className=" text-black mt-6  stats stats-vertical lg:stats-horizontal shadow">

                  <div className="stat  bg-white">
                    <div className="text-black stat-title">Quizzes 1</div>
                    <div className="stat-value">{StudentDetail.quiz1}/20</div>

                  </div>

                  <div className="stat bg-white">
                    <div className="text-black stat-title">Quizzes 2</div>
                    <div className="stat-value">{StudentDetail.quiz2}/20</div>

                  </div>
                  <div className="stat bg-white">
                    <div className="text-black stat-title">Quizzes 3</div>
                    <div className="stat-value">{StudentDetail.quiz3}/20</div>

                  </div>
                </div>
              </div>
              <div className='   flex place-content-center  justify-center'>
                <div className=' space-x-4 w-full place-content-center  justify-center flex mb-6'>
                  <div className=" border card w-96 bg-white">
                    <div className="card-body ">
                      <h2 className="card-title">Quizzes Total</h2>
                      <p className='text-4xl  '>{StudentDetail.quiztotal}/60</p>
                    </div>
                  </div>
                  <div className=" border card w-96 bg-white ">
                    <div className="card-body">
                      <h2 className="card-title">Quizzes Percent</h2>
                      <p className='text-4xl' >{StudentDetail.quizpercent}/10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='space-y-6 bg-slate-300 rounded-lg'>
              <div className=' gap-5 place-content-center flex justify-center '>
                <div className=" text-black  mt-6  stats stats-vertical lg:stats-horizontal shadow">

                  <div className="stat bg-white">
                    <div className="text-black stat-title">Assigments 1</div>
                    <div className="stat-value">{StudentDetail.assign1}/1</div>

                  </div>

                  <div className="stat bg-white">
                    <div className="text-black stat-title">Assigments 2</div>
                    <div className="stat-value">{StudentDetail.assign2}/1</div>

                  </div>
                  <div className="stat bg-white">
                    <div className="text-black stat-title">Assigments 3</div>
                    <div className="stat-value">{StudentDetail.assign3}/1</div>

                  </div>
                </div>
              </div>
              <div className=' space-x-4 flex place-content-center  justify-center'>
                <div className='space-x-4 place-content-center  justify-center w-full flex mb-6'>
                  <div className="  border bg-white  card w-96 ">
                    <div className="  card-body">
                      <h2 className="card-title">Assignments Total</h2>
                      <p className='text-4xl'>{StudentDetail.assigntotal}/3</p>
                    </div>
                  </div>
                  <div className="card border w-96 bg-white ">
                    <div className="card-body">
                      <h2 className="card-title">Assignments Percent</h2>
                      <p className='text-4xl'>{StudentDetail.assignpercent}/10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='place-content-center flex justify-center'>
              <div className="card  bor w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-white">Grand Total</h2>
                  <p className='text-4xl text-white'>{StudentDetail.grandtotal}/20</p>
                </div>
              </div>
            </div>
            <div className='place-content-center flex justify-center' >
              <button onClick={ToSearchStudent} class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute left-3 flex items-center justify-start w-10 h-10 duration-300 transform  group-hover:translate-x-3 ease">
                  <svg class="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="relative">ค้นหาคะแนนเพิ่มเติม</span>
              </button>

            </div>
            <div className='place-content-center flex justify-center' >
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default StudentDetail