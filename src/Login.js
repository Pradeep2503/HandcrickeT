import React, { useEffect, useState } from 'react'
import './Login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [Highscore,setHighscore] = useState([]);
  const [Highwins, setHighwins] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001")
      .then((result) => {
        setHighscore(result.data);
        setHighwins(result.data);
      })
      .catch((err) => console.log(err));
  },[])

  var hs=Highscore.map((hsplayer)=>{
    hsplayer.winners=hsplayer.winners;
    hsplayer.runs=Number(hsplayer.runs);
    return(hsplayer);
  })


  hs.sort((a,b)=>a.runs-b.runs);
  hs.reverse();

  var ct=0;
  const highscorelist=hs.map((hslist)=>{
    ct++;
    if(ct<=10)
    {
    return(
      <tr>
        <td className='border border-sky-800'>{ct}</td>
      <td className='border border-sky-800'>{hslist.winners}</td>
      <td className='border border-sky-800'>{hslist.runs}</td>
      </tr>
    )
    }
  })

  var winmaps=new Map();
  for(var i=0;i<Highwins.length;i++)
  {
      if(winmaps.has(Highwins[i].winners))
      {
        var val=winmaps.get(Highwins[i].winners);
        val=Number(val)+1;
        winmaps.set(Highwins[i].winners,val);
      }
      else
      {
        winmaps.set(Highwins[i].winners,1);
      }
  }

  const winarrays = Array.from(winmaps.entries());
  winarrays.sort((a,b)=>a[1]-b[1]);
  winarrays.reverse();
  
  var wct=0;
  const highwinslist=winarrays.map((wlist)=>{
    wct++;
    if(wct<=10)
    {
    return(
      <tr>
        <td className='border border-sky-800'>{wct}</td>
      <td className='border border-sky-800'>{wlist[0]}</td>
      <td className='border border-sky-800'>{wlist[1]}</td>
      </tr>
    )
    }
  })
  const navigate=useNavigate();

  function gototosspage()
  {
    var player1_id=document.getElementById("player1_name").value;
    var player2_id=document.getElementById("player2_name").value;
    navigate("/TOSS",{state:{player1_name:player1_id,player2_name:player2_id ,hs:hs, winarrays:winarrays}})
  }

  return (
    <div>


    <div className='flex flex-row h-lvh'>
      <div className=' basis-2/3 bg-gradient-to-l from-gray-800 to-black'>
      <header className='h-10 text-4xl p-2 font-serif underline text-white italic'>
             WELCOME ! LETS PLAY HANDCRICKET
      </header>
      <div className='pt-40'>
           
      </div>
      <br/>
      <div className='w-2/3 pl-40 '>
                  <input
                    id="player1_name"
                    placeholder="Enter player1_name"
                    required
                    class="pl-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <br></br>
                  <input
                    id="player2_name"
                    placeholder="Enter player2_name"
                    required
                    class="pl-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <br/>
                  <button
                  onClick={gototosspage}
                  class="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
                >
                  ITS TIME TO CHOOSE - ODD OR EVEN
                </button>
      </div>

      </div>


      <div className='grid grid-rows-2 basis-1/3'>
          <div className=''>
            <div className=' text-white bg-sky-950'>
            HIGHEST RUN SCORERS - TOP 10
            </div>
            Only winners will be shown in the leaderboard
            <div style={{overflow:"scroll", height:"90%"}} className='pt-5'>
            <table className='border-collapse uppercase border border-sky-500' style={{"width":"100%"}}>
            {highscorelist}
            </table>
            </div>
          </div>


          <div className=''>
            <div className=' text-white bg-sky-950'>
              HIGHEST WINS BY A INDIVIDUAL- TOP 10
            </div>
            <div style={{overflow:"scroll", height:"90%"}} className='pt-5'>
            <table className='border-collapse uppercase border border-sky-500' style={{"width":"100%"}}>
            {highwinslist}
            </table>
            </div>
          
            
          </div>
      </div>

    </div>

    </div>
)
}

export default Login;
