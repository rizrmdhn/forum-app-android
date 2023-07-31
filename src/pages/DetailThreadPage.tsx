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
import {AppDispatch} from '../states';
import {useDispatch} from 'react-redux';
import {IDetailThread, IUser} from '../types/interface';
import RenderHTML from 'react-native-render-html';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button, Input} from 'native-base';

const {width, height} = Dimensions.get('window');

export default function DetailThreadPage({navigation}: {navigation: any}) {
  const detailThread = useSelectState('detailThread') as IDetailThread;
  const authUser = useSelectState('authUser') as IUser;
  const dispatch = useDispatch<AppDispatch>();

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  return (
    <View>
      <DetailThreadHeader navigation={navigation} />
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
        <View style={tw.style('flex flex-row px-5')}>
          <Pressable
            style={tw.style('w-20 mt-2 flex flex-row')}
            onPress={() => console.log('upvoted')}>
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
          <Pressable
            style={tw.style('w-20 mt-2 flex flex-row')}
            onPress={() => console.log('downvoted')}>
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
              'text-start text-lg font-bold mt-5 px-5',
              isDarkMode ? 'text-white' : 'text-black',
            )}>
            Beri Komentar
          </Text>
          {authUser ? (
            <View>
              <View style={tw.style('px-5 mt-2')}>
                <Input placeholder="Komentar" style={tw.style('px-5 h-20')} />
              </View>
              <Button
                style={tw.style('mt-2 mx-5', {
                  'bg-dark text-white': !isDarkMode,
                  'bg-white text-black border-2 border-dark': isDarkMode,
                })}
                onPress={() => console.log('comment')}>
                <Text style={tw.style('text-white')}>Kirim</Text>
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
          <View>
            <Text
              style={tw.style(
                'text-start text-lg font-bold mt-5 px-5',
                isDarkMode ? 'text-white' : 'text-black',
              )}>
              Komentar ({detailThread.comments.length})
            </Text>
          </View>
          <View style={tw.style('px-5 mt-2')}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
