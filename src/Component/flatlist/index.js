import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {CategoryCard2} from '../categoryCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';

export default function flatlist({onPress}) {
  const initialData = [
    {
      title: 'Short ',
      id: 1,
    },
    {
      title: 'All UpComing ',
      id: 2,
    },
    {
      title: 'Any Category ',
      id: 3,
    },
  ];
  const [filter, setFilter] = useState(initialData);
  const renderItem = ({item}) => {
    return (
      <>
        <CategoryCard2
          title={item.title}
          isActive={item.isActive}
          onPress={onPress}
        />
      </>
    );
  };
  return (
    <SafeAreaView>
      <View
        style={{
          marginLeft: moderateScale(24),
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={filter}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}
