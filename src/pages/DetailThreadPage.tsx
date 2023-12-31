import {
  StyleSheet,
  Text,
  View,
  Appearance,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import DetailThreadHeader from '../components/DetailThreadHeader';
import useSelectState from '../hooks/useSelectState';
import {IDetailThread, ILeaderboard, IUser} from '../types/interface';
import RenderHTML from 'react-native-render-html';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button, Input} from 'native-base';
import UserComment from '../components/UserComment';
import useVoteDetailThread from '../hooks/useVoteDetailThread';
import useVoteComment from '../hooks/useVoteComment';
import useCreateComment from '../hooks/useCreateComment';
import moment from 'moment';
import 'moment/locale/id';
import useLocale from '../hooks/useLocale';

const {width, height} = Dimensions.get('window');

export default function DetailThreadPage({navigation}: {navigation: any}) {
  const detailThread = useSelectState('detailThread') as IDetailThread;
  const authUser = useSelectState('authUser') as IUser | null;
  const locale = useSelectState('locale') as string;
  const leaderboard = useSelectState('leaderboard') as ILeaderboard[];
  const isLoading = useSelectState('isLoading') as boolean;

  const {textCreatedBy} = useLocale();

  const [upVoteDetailThread, downVoteDetailThread, neutralVoteDetailThread] =
    useVoteDetailThread();

  const [upVoteComment, downVoteComment, neutralVoteComment] = useVoteComment();

  const [content, onChangeContent, createComment] = useCreateComment();

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  let isUpVoted: boolean;
  let isDownVoted: boolean;

  if (!authUser) {
    isUpVoted = false;
    isDownVoted = false;
  } else {
    isUpVoted = detailThread.upVotesBy.includes(authUser.id);
    isDownVoted = detailThread.downVotesBy.includes(authUser.id);
  }

  const handleUpVoteThread = (id: string) => {
    if (isUpVoted) {
      neutralVoteDetailThread(id);
    } else {
      upVoteDetailThread(id);
    }
  };

  const handleDownVoteThread = (id: string) => {
    if (isDownVoted) {
      neutralVoteDetailThread(id);
    } else {
      downVoteDetailThread(id);
    }
  };

  const handleUpVoteComment = (
    isCommentUpVoted: boolean,
    commentId: string,
    threadId: string,
  ) => {
    if (isCommentUpVoted) {
      neutralVoteComment(commentId, threadId);
    } else {
      upVoteComment(commentId, threadId);
    }
  };

  const handleDownVoteComment = (
    isCommentDownVoted: boolean,
    commentId: string,
    threadId: string,
  ) => {
    if (isCommentDownVoted) {
      neutralVoteComment(commentId, threadId);
    } else {
      downVoteComment(commentId, threadId);
    }
  };

  // get the isSvg from leaderboard and combine it with detailThread.comments to get the isSvg of each comment
  const commentsWithIsSvg = detailThread.comments.map(comment => {
    const isSvg = leaderboard.find(
      leaderboard => leaderboard.user.id === comment.owner.id,
    )?.isSvg;
    return {...comment, isSvg};
  });

  return (
    <View>
      <DetailThreadHeader navigation={navigation} title={detailThread.title} />
      <View
        style={tw.style('flex flex-col px-5 py-7 overflow-scroll', {
          'bg-light': !isDarkMode,
          'bg-categoryDark': isDarkMode,
          height: height - 80,
        })}>
        <View
          style={tw.style('self-start p-1 ml-3 rounded my-2 items-baseline', {
            'bg-detailCategoryDark': isDarkMode,
            'bg-threadCard': !isDarkMode,
          })}>
          <Text
            style={tw.style({
              'text-black': !isDarkMode,
              'text-white': isDarkMode,
            })}>
            #{detailThread.category}
          </Text>
        </View>
        <View style={tw.style('h-24 px-5 mt-2')}>
          <ScrollView style={tw.style('overflow-scroll')}>
            <RenderHTML
              baseStyle={{
                color: isDarkMode ? 'white' : 'black',
              }}
              contentWidth={width}
              source={{html: detailThread.body}}
            />
          </ScrollView>
        </View>
        <View style={tw.style('flex flex-row justify-between px-5 mt-2')}>
          <Text
            style={tw.style('text-black text-sm', {
              'text-white': isDarkMode,
            })}>
            {moment(detailThread.createdAt).locale(locale).fromNow()}
          </Text>
          <Text
            style={tw.style('text-black text-sm ml-2', {
              'text-white': isDarkMode,
            })}>
            {textCreatedBy} {detailThread.owner.name}
          </Text>
        </View>
        <View style={tw.style('flex flex-row px-5 mt-2')}>
          {isUpVoted ? (
            <Pressable
              style={tw.style('w-20 mt-2 flex flex-row')}
              onPress={() => handleUpVoteThread(detailThread.id)}>
              <MaterialIcons
                name="thumb-up-alt"
                size={25}
                color={isDarkMode ? 'white' : 'black'}
              />
              <Text
                style={tw.style('ml-2 ', {
                  'text-white': isDarkMode,
                  'text-black': !isDarkMode,
                })}>
                {detailThread.upVotesBy.length}
              </Text>
            </Pressable>
          ) : (
            <Pressable
              style={tw.style('w-20 mt-2 flex flex-row')}
              onPress={() => handleUpVoteThread(detailThread.id)}>
              <MaterialIcons
                name="thumb-up-off-alt"
                size={25}
                color={isDarkMode ? 'white' : 'black'}
              />
              <Text
                style={tw.style('ml-2 ', {
                  'text-white': isDarkMode,
                  'text-black': !isDarkMode,
                })}>
                {detailThread.upVotesBy.length}
              </Text>
            </Pressable>
          )}
          {isDownVoted ? (
            <Pressable
              style={tw.style('w-20 mt-2 flex flex-row')}
              onPress={() => handleDownVoteThread(detailThread.id)}>
              <MaterialIcons
                name="thumb-down-alt"
                size={25}
                color={isDarkMode ? 'white' : 'black'}
              />
              <Text
                style={tw.style('ml-2 ', {
                  'text-white': isDarkMode,
                  'text-black': !isDarkMode,
                })}>
                {detailThread.downVotesBy.length}
              </Text>
            </Pressable>
          ) : (
            <Pressable
              style={tw.style('w-20 mt-2 flex flex-row')}
              onPress={() => handleDownVoteThread(detailThread.id)}>
              <MaterialIcons
                name="thumb-down-off-alt"
                size={25}
                color={isDarkMode ? 'white' : 'black'}
              />
              <Text
                style={tw.style('ml-2 ', {
                  'text-white': isDarkMode,
                  'text-black': !isDarkMode,
                })}>
                {detailThread.downVotesBy.length}
              </Text>
            </Pressable>
          )}
          <View style={tw.style('w-20 mt-2 flex flex-row')}>
            <MaterialIcons
              name="chat-bubble-outline"
              size={25}
              color={isDarkMode ? 'white' : 'black'}
            />
            <Text
              style={tw.style('ml-2 ', {
                'text-white': isDarkMode,
                'text-black': !isDarkMode,
              })}>
              {detailThread.comments.length}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={tw.style(
              'text-lg font-bold mt-5 px-5',
              isDarkMode ? 'text-white' : 'text-black',
            )}>
            Beri Komentar
          </Text>
          {authUser ? (
            <View>
              <View style={tw.style('px-5 mt-2')}>
                <Input
                  placeholder="Komentar"
                  placeholderTextColor={isDarkMode ? '#fff' : '#000'}
                  color={isDarkMode ? '#fff' : '#000'}
                  textAlign={'left'}
                  textAlignVertical="top"
                  style={tw.style('px-5 h-20 text-base')}
                  value={content}
                  multiline={true}
                  onChangeText={onChangeContent}
                />
              </View>
              <Button
                style={tw.style('mt-2 mx-5', {
                  'bg-dark text-white': !isDarkMode,
                  'bg-white text-black border-2 border-dark': isDarkMode,
                })}
                onPress={() => createComment(detailThread.id)}>
                <Text
                  style={tw.style('font-bold text-sm', {
                    'text-white': !isDarkMode,
                    'text-black': isDarkMode,
                  })}>
                  Kirim
                </Text>
              </Button>
            </View>
          ) : (
            <Text
              style={tw.style('px-5 mt-4', {
                'text-white': isDarkMode,
                'text-black': !isDarkMode,
              })}>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={tw.style('underline')}>
                Login
              </Text>{' '}
              untuk memberikan komentar
            </Text>
          )}
        </View>
        <View>
          <View style={tw.style('px-5 mt-2 h-32')}>
            <ScrollView style={tw.style('overflow-scroll')}>
              {isLoading ? (
                <View style={tw.style('flex flex-row justify-center')}>
                  <MaterialIcons
                    name="hourglass-bottom"
                    size={25}
                    color={isDarkMode ? 'white' : 'black'}
                  />
                </View>
              ) : commentsWithIsSvg.length > 0 ? (
                <>
                  <View>
                    <Text
                      style={tw.style(
                        'text-lg font-bold mt-5 px-0',
                        isDarkMode ? 'text-white' : 'text-black',
                      )}>
                      Komentar ({detailThread.comments.length})
                    </Text>
                  </View>
                  {commentsWithIsSvg.map((comment, index) => (
                    <UserComment
                      key={index}
                      {...comment}
                      handleUpVoteComment={isCommentUpVoted =>
                        handleUpVoteComment(
                          isCommentUpVoted,
                          comment.id,
                          detailThread.id,
                        )
                      }
                      handleDownVoteComment={isCommentDownVoted =>
                        handleDownVoteComment(
                          isCommentDownVoted,
                          comment.id,
                          detailThread.id,
                        )
                      }
                    />
                  ))}
                </>
              ) : (
                <Text
                  style={tw.style('mt-4 text-lg font-bold ', {
                    'text-white': isDarkMode,
                    'text-black': !isDarkMode,
                  })}>
                  Belum ada komentar
                </Text>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
