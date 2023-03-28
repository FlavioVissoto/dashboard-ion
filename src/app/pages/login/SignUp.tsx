import { useNavigate } from 'react-router-dom';
import { PagesRoutes } from '../../routes/pagesData';

export const SignUp = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(PagesRoutes.Login.path);
  };
  return (
    <div>
      <div>
        <p>Cadastrar</p>
      </div>
      <div>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};
