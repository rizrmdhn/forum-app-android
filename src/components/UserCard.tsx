import {Text, View, Image} from 'react-native';
import {} from 'react-native-paper';
import React from 'react';
import tw from '../lib/tailwind';
import {SvgUri} from 'react-native-svg';

export default function UserCard({
  name,
  avatar,
  isSvg,
  score,
}: {
  name: string;
  avatar: string;
  isSvg: any;
  score: number;
}) {
  return (
    <View style={tw.style('flex flex-row justify-between mx-14')}>
      <View style={tw.style('flex flex-row items-center my-2')}>
        <>
          {isSvg ? (
            <View style={tw.style('overflow-hidden rounded-2xl')}>
              <SvgUri width={30} height={30} uri={avatar} />
            </View>
          ) : (
            <Image
              style={tw.style('w-8 h-8 rounded-2xl')}
              source={{
                uri: avatar,
              }}
            />
          )}
        </>
        <Text style={tw.style('ml-2')}>{name}</Text>
      </View>
      <View style={tw.style('mr-5 flex flex-row items-center')}>
        <Text>{score}</Text>
      </View>
    </View>
  );
}
