import { useNavigate } from 'react-router-dom';
import { PagesRoutes } from '../../routes/pagesData';

export const SignIn = () => {
  let navigate = useNavigate();
  const handleClickSignUp = () => {
    navigate(PagesRoutes['Login/SignUp'].path);
  };

  return (
    <div className='form'>
      <span className=''>Welcome</span>
      <span className=''>
        <i className=''></i>
      </span>
      <div className='' data-validate='Valid email is: a@b.c'>
        <input className='' type='text' name='email' />
        <span className='' data-placeholder='Email'></span>
      </div>
      <div className='' data-validate='Enter password'>
        <span className=''>
          <i className=''></i>
        </span>
        <input className='' type='password' name='pass' />
        <span className='' data-placeholder='Password'></span>
      </div>
      <div className=''>
        <div className=''>
          <div className=''></div>
          <button className=''>Login</button>
        </div>
      </div>
      <div className=''>
        <span className=''>Não tem uma conta?</span>
        <input type='button' value='Cadastra-se' onClick={handleClickSignUp} />
      </div>
    </div>
  );
};
