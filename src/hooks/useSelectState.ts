import {useSelector} from 'react-redux';
import {RootState} from '../states';
import {OpenModalState} from '../states/openModal/types/types';
import {ShowMenuState} from '../states/showMenu/types/type';
import {ShowCategoryState} from '../states/showCategory/types/type';
import {AuthUserState} from '../states/authUser/types/type';
import {ILeaderboard, INewLeaderboard, IThread, IUser} from '../types/interface';
import {FilterThreadByCategoryState} from '../states/filterThreadByCategory/types/type';
import {FilterThreadByTitleState} from '../states/filterThreadByTitle/types/type';
import {DetailThreadState} from '../states/detailThread/types/type';
import {IsLoadingState} from '../states/isLoading/types/type';
import {IsPreloadState} from '../states/isPreload/types/type';
import {LocaleState} from '../states/locale/types/type';
import {ThemeState} from '../states/theme/types/type';

function useSelectState(state: string) {
  const showMenu = useSelector<RootState, ShowMenuState>(state => state.showMenu);
  const showCategory = useSelector<RootState, ShowCategoryState>(state => state.showCategory);
  const authUser = useSelector<RootState, AuthUserState>(state => state.authUser);
  const thread = useSelector<RootState, IThread[]>(state => state.thread);
  const user = useSelector<RootState, IUser[]>(state => state.user);
  const category = useSelector<RootState, FilterThreadByCategoryState>(state => state.category);
  const threadTitle = useSelector<RootState, FilterThreadByTitleState>(
    state => state.filterThreadByTitle,
  );
  const detailThread = useSelector<RootState, DetailThreadState>(state => state.detailThread);
  const leaderboard = useSelector<RootState, ILeaderboard[]>(state => state.leaderboard);
  const newLeaderboard = useSelector<RootState, INewLeaderboard[]>(state => state.newLeaderboard);
  const isLoading = useSelector<RootState, IsLoadingState>(state => state.isLoading);
  const isPreload = useSelector<RootState, IsPreloadState>(state => state.isPreload);
  const openModal = useSelector<RootState, OpenModalState>(state => state.openModal);
  const locale = useSelector<RootState, LocaleState>(state => state.locale);
  const theme = useSelector<RootState, ThemeState>(state => state.theme);

  switch (state) {
    case 'showMenu':
      return showMenu;
    case 'showCategory':
      return showCategory;
    case 'authUser':
      return authUser;
    case 'thread':
      return thread;
    case 'user':
      return user;
    case 'category':
      return category;
    case 'threadTitle':
      return threadTitle;
    case 'detailThread':
      return detailThread;
    case 'newLeaderboard':
      return newLeaderboard;
    case 'leaderboard':
      return leaderboard;
    case 'isLoading':
      return isLoading;
    case 'isPreload':
      return isPreload;
    case 'openModal':
      return openModal;
    case 'locale':
      return locale;
    case 'theme':
      return theme;
  }
}

export type SelectStateHooks = ReturnType<typeof useSelectState>;

export default useSelectState;
