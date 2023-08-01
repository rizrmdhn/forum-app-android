import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {asyncSetAuthUser} from '../states/authUser/action';
import useLocale from './useLocale';

function useLogin(defaultValue = '') {
  const {textLoginSuccess, textLoginFailed} = useLocale();
  const dispatch = useDispatch();

  const [email, setEmail] = useState(defaultValue);
  const [password, setPassword] = useState(defaultValue);

  const onChangeEmail: any = (text: string) => {
    setEmail(text);
  };

  const onChangePassword: any = (text: string) => {
    setPassword(text);
  };

  const onSubmit = ({navigation}: any) => {
    dispatch(
      asyncSetAuthUser({
        email,
        password,
        textLoginFailed,
        textLoginSuccess,
        navigateTo: navigation.navigate,
      }),
    );
  };

  return [email, onChangeEmail, password, onChangePassword, onSubmit];
}

export default useLogin;
