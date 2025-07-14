import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../store/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  // Clear error when component mounts
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      return;
    }

    try{
      const result =  dispatch(loginUser({
       email: formData.email,
       password: formData.password,
    }));

      if (loginUser.rejected.match(result)) {
        console.log(`Login failed: ${result.payload || 'Please check your username/password and try again.'}`);
      }
    } catch (error) {
      console.log('An unexpected error occurred. Please try again.');
    }

  };

  


  return (
    <div className='font-rubik w-full max-w-[544px] bg-white flex flex-col gap-2.5 items-center justify-center py-[78px] px-[95px] max-md:px-4 rounded-xl'>
      <h2 className='font-medium leading-[132%] text-2xl'>Welcome Back!</h2>
        <p className='text-[#444444] leading-[132%]'>Log into your account</p>
         {error && (
                <div className='text-red-500 text-sm mb-1'>
                {error}
                </div>
            )}
            <form className='w-full flex flex-col gap-[43px]' onSubmit={handleSubmit}>
                <section>
                <div className='w-full h-[98px] max-w-[354px]'>
                <label className='flex flex-col gap-2 text-[#9B9B9B] text-sm'>
                    Username
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Enter your email'
                    required
                    disabled={isLoading}
                    className='bg-[#9A9FBF]/10 outline-none rounded-lg pl-4 max-w-[354px] w-full h-12 text-[#161616]'
                    />
                </label>
                </div>
                
                <div sclassName='w-full h-[98px] max-w-[354px]'>
                <label className='flex flex-col gap-2 text-[#9B9B9B] text-sm'>
                    Password
                    <div className='relative'>
                        <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        placeholder='Enter your password'
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        className='bg-[#9A9FBF]/10 outline-none rounded-lg pl-4 pr-12 max-w-[354px] w-full h-12 text-[#161616]'
                        />
                        <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#9B9B9B] hover:text-[#161616] focus:outline-none'
                        disabled={isLoading}
                        >
                        {showPassword ? (
                            // Hide password icon (eye with slash)
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                            <line x1="1" y1="1" x2="23" y2="23"/>
                            </svg>
                        ) : (
                            // Show password icon (eye)
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                            </svg>
                        )}
                        </button>
                    </div>
                    </label>
                </div>
                <div className='flex justify-between items-center text-[#13113F] text-xs font-medium mt-4'>
                    <span className='flex items-center gap-3'>
                        <input 
                        type='checkbox' 
                        id='rememberMe'
                        className=' w-4 h-4 appearance-none rounded-sm bg-gray-200 checked:bg-[#4834D4] outline-none focus:ring-[#4834D4] cursor-pointer peer ' 
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg>%0A\")", backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                        />
                            <p className='leading-[132%]'>Remember Me</p>
                    </span>
                    <p className='leading-[150%]'>Forgot Password?</p>
                </div>
            </section>
                <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full max-w-[354px] h-12 rounded-lg py-4 px-8 border border-[#9B9B9B33]/20 font-medium text-white leading-[100%] cursor-pointer  ${isLoading ?  'bg-[#8c7fe3]' : 'bg-[#4834D4]'}`}
                >
                {isLoading ? 'Logging in...' : 'Login'}
                </button>
                
            </form>
    </div>
  );
};

export default Login;