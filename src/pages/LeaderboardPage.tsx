import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {useEffect} from 'react';
import Leaderboardheader from '../components/Leaderboardheader';
import tw from '../lib/tailwind';
import useSelectState from '../hooks/useSelectState';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../states';
import {asyncGetLeaderboard} from '../states/leaderboards/action';
import UserCard from '../components/UserCard';
import {ILeaderboard} from '../types/interface';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  leaderboardUserCardContainer: {
    height: windowHeight - 180,
  },
});

export default function LeaderboardPage() {
  const leaderboard = useSelectState('leaderboard') as ILeaderboard[];

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
      <View style={tw.style('flex flex-row items-center justify-center p-2')}>
        <View style={tw.style('mx-20')}>
          <Text style={tw.style('font-bold text-sm text-black dark:text-white')}>Pengguna</Text>
        </View>
        <View style={tw.style('mx-20')}>
          <Text style={tw.style('font-bold text-sm text-black dark:text-white')}>Skor</Text>
        </View>
      </View>
      <ScrollView style={styles.leaderboardUserCardContainer}>
        {mappingLeaderboard(leaderboard)}
      </ScrollView>
    </View>
  );
}
