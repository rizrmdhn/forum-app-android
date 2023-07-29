import {useSelector} from 'react-redux';
import {RootState} from '../states';
import {OpenModalState} from '../states/openModal/reducer';

function useSelectState(state: string) {
  const openModal = useSelector<RootState, OpenModalState>((state: RootState) => state.openModal);

  switch (state) {
    case 'openModal':
      return openModal;
  }
}

export default useSelectState;
