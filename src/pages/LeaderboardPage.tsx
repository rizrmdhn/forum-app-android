import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Appearance,
} from 'react-native';
import {useEffect} from 'react';
import Leaderboardheader from '../components/Leaderboardheader';
import tw from '../lib/tailwind';
import useSelectState from '../hooks/useSelectState';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../states';
import {asyncGetLeaderboard} from '../states/leaderboards/action';
import UserCard from '../components/UserCard';
import {ILeaderboard} from '../types/interface';
import useLocale from '../hooks/useLocale';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  leaderboardUserCardContainer: {
    height: windowHeight - 180,
  },
});

export default function LeaderboardPage() {
  const leaderboard = useSelectState('leaderboard') as ILeaderboard[];

  const {textUser, textScore} = useLocale();

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(asyncGetLeaderboard({}));
  }, []);

  const mappingLeaderboard = (leaderboard: ILeaderboard[]) => {
    return leaderboard.map(leaderboards => {
      return (
        <UserCard
          key={leaderboards.user.id}
          name={leaderboards.user.name}
          avatar={leaderboards.user.avatar}
          isSvg={leaderboards.isSvg}
          score={leaderboards.score}
        />
      );
    });
  };

  return (
    <View>
      <Leaderboardheader />
      <View
        style={tw.style('flex flex-row items-center justify-center p-2', {
          'bg-light': !isDarkMode,
          'bg-categoryDark': isDarkMode,
        })}>
        <View style={tw.style('mx-20')}>
          <Text
            style={tw.style('font-bold text-sm ', {
              'text-black ': !isDarkMode,
              'text-white': isDarkMode,
            })}>
            {textUser}
          </Text>
        </View>
        <View style={tw.style('mx-20')}>
          <Text
            style={tw.style('font-bold text-sm ', {
              'text-black ': !isDarkMode,
              'text-white': isDarkMode,
            })}>
            {textScore}
          </Text>
        </View>
      </View>
      <ScrollView
        style={tw.style(
          {
            'bg-light': !isDarkMode,
            'bg-categoryDark': isDarkMode,
          },
          styles.leaderboardUserCardContainer,
        )}>
        {mappingLeaderboard(leaderboard)}
      </ScrollView>
    </View>
  );
}
