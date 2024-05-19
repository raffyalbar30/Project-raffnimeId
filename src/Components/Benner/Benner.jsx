
import Footer from '../Footer/footer';

const Benner = ({children}) => {
    return (
        <div className='w-full absolute top-0  -z-10'>
         <video className="w-full -z-10" loop>
              <source src="Img/landing-video.mp4" type="video/mp4"  className='h-12'/>
         </video>
          {children}
       <Footer></Footer>
        </div>
    );
}

export default Benner;
