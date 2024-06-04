
import './top.css';
import loggo from './media/img/logo.png'
import { WytBoard } from './wytboard';

export const Top =()=>{
    return(<>
        <header className='top__heade____r_'>
            <img 
                src={loggo}
                alt='PDF logo'
                className='logoo'
                onClick={e=> window.location.reload()}
                style={{cursor:'pointer'}}
            />
        </header>

        <WytBoard />
    </>)
};