import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import useLocale from './useLocale';
import {asyncRegisterUser} from '../states/user/action';

function useRegister(defaultValue = '') {
  const {textRegisterSuccess, textRegisterFailed, textPleaseInputCorrectly} =
    useLocale();
  const dispatch = useDispatch();

  const [name, setName] = useState(defaultValue);
  const [email, setEmail] = useState(defaultValue);
  const [password, setPassword] = useState(defaultValue);

  const onChangeName: any = (text: string) => {
    setName(text);
  };

  const onChangeEmail: any = (text: string) => {
    setEmail(text);
  };

  const onChangePassword: any = (text: string) => {
    setPassword(text);
  };

  const onSubmit = ({navigation}: any) => {
    if (!name || !email || !password) {
      Alert.alert('Error', textPleaseInputCorrectly);
      return;
    } else {
      dispatch(
        asyncRegisterUser({
          name,
          email,
          password,
          textRegisterFailed,
          textRegisterSuccess,
          routeToLogin: navigation.navigate,
        }),
      );
    }
  };

  return [
    name,
    onChangeName,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onSubmit,
  ];
}

export default useRegister;
