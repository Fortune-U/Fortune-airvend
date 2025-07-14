import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/slices/authSlice';
import airGateLogo from '../assets/logo-air-gate.png';
import Card from '../components/Card';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

  return (
    <div className='bg-[url("./Bg.png")] h-screen'>
      <div>
        <img src={airGateLogo} alt="AirGate Logo" className="max-w-[211.11px] w-full h-[51.82px] top-[58px] left-[38px] absolute" />
      </div>


      <div className='absolute right-[61px] bottom-[60px] max-md:right-0 max-md:left-0 max-md:px-4 max-md:mx-auto'>
        <Card
          user={user} 
          onLogout={handleLogout} 
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
