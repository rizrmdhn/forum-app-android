import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Appearance,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import tw from '../lib/tailwind';
import RenderHTML from 'react-native-render-html';
import {IUser} from '../types/interface';
import moment from 'moment';
import 'moment/locale/id';
import useSelectState from '../hooks/useSelectState';
import {SvgUri} from 'react-native-svg';

export default function UserComment({
  content,
  owner,
  createdAt,
  upVotesBy,
  downVotesBy,
  isSvg,
  handleUpVoteComment,
  handleDownVoteComment,
}: {
  content: string;
  owner: IUser;
  createdAt: string;
  upVotesBy: any;
  downVotesBy: any;
  isSvg: any;
  handleUpVoteComment: (isCommentUpVoted: boolean) => void;
  handleDownVoteComment: (isDownVoted: boolean) => void;
}) {
  const locale = useSelectState('locale') as string;
  const authUser = useSelectState('authUser') as IUser | null;

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  let isCommentUpVoted: boolean;
  let isCommentDownVoted: boolean;

  if (!authUser) {
    isCommentUpVoted = false;
    isCommentDownVoted = false;
  } else {
    isCommentUpVoted = upVotesBy.includes(authUser.id);
    isCommentDownVoted = downVotesBy.includes(authUser.id);
  }

  const UpVoteComment = () => {
    handleUpVoteComment(isCommentUpVoted);
  };

  const DownVoteComment = () => {
    handleDownVoteComment(isCommentDownVoted);
  };

  return (
    <View style={tw.style('flex flex-col my-4 h-24')}>
      <View style={tw.style('flex flex-row justify-between')}>
        <View style={tw.style('flex flex-row items-center')}>
          <View style={tw.style('overflow-hidden rounded-2xl')}>
            {isSvg ? (
              <SvgUri width={24} height={24} uri={owner.avatar} />
            ) : (
              <Image
                style={tw.style('w-6 h-6 rounded-2xl')}
                source={{
                  uri: owner.avatar,
                }}
              />
            )}
          </View>
          <Text
            style={tw.style('mx-2', {
              'text-white': isDarkMode,
              'text-black': !isDarkMode,
            })}>
            {owner.name}
          </Text>
        </View>
        <Text
          style={tw.style('mx-2', {
            'text-white': isDarkMode,
            'text-black': !isDarkMode,
          })}>
          {moment(createdAt).locale(locale).fromNow()}
        </Text>
      </View>
      <View style={tw.style('my-2')}>
        <RenderHTML
          baseStyle={{
            color: isDarkMode ? 'white' : 'black',
          }}
          contentWidth={200}
          source={{html: content}}
        />
      </View>
      <View style={tw.style('flex flex-row')}>
        {isCommentUpVoted ? (
          <Pressable
            style={tw.style('w-20 mt-2 flex flex-row')}
            onPress={UpVoteComment}>
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
              {upVotesBy.length}
            </Text>
          </Pressable>
        ) : (
          <Pressable
            style={tw.style('w-20 mt-2 flex flex-row')}
            onPress={UpVoteComment}>
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
              {upVotesBy.length}
            </Text>
          </Pressable>
        )}
        {isCommentDownVoted ? (
          <Pressable
            style={tw.style('w-20 mt-2 flex flex-row')}
            onPress={DownVoteComment}>
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
              {downVotesBy.length}
            </Text>
          </Pressable>
        ) : (
          <Pressable
            style={tw.style('w-20 mt-2 flex flex-row')}
            onPress={DownVoteComment}>
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
              {downVotesBy.length}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
