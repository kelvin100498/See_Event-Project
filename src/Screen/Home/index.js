import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CardEvent from '../../Component/cardEvent';
import {CategoryCard} from '../../Component/categoryCard';
import {moderateScale} from 'react-native-size-matters';
import {HeaderComponent} from '../../Component/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getCategoryByType} from './redux/action';

const Home = ({navigation}) => {
  //dummy data category
  const initialData = [
    {
      title: 'Photography',
      id: 1,
    },
    {
      title: 'Design',
      id: 2,
    },
    {
      title: 'Development ',
      id: 3,
    },
    {
      title: 'Marketing ',
      id: 4,
    },
    {
      title: 'Business ',
      id: 5,
    },
    {
      title: 'Lifestyle ',
      id: 6,
    },
    {
      title: 'Music ',
      id: 7,
    },
  ];

  // all states declared redux
  const dispatch = useDispatch();
  const {startingSoon, designEvents} = useSelector(state => state.Home);

  const [category, setCategory] = useState(initialData);
  const renderItem = ({item}) => {
    return (
      <CategoryCard
        onPress={() => {
          dispatch(getCategoryByType(item.title.toLowerCase()));
        }}
        title={item.title}
        isActive={item.isActive}
      />
    );
  };

  useEffect(() => {
    dispatch({type: 'GET_STARTING_SOON'});
    dispatch({type: 'GET_DESIGN_EVENTS'});
  }, []);

  console.log(startingSoon);
  console.log(designEvents);

  return (
    <SafeAreaView>
      <HeaderComponent />
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{}}>
        <View
          style={{
            marginHorizontal: moderateScale(24),
          }}>
          <CardEvent title={'Starting Soon'} data={startingSoon} />
        </View>
        <View
          style={{
            top: moderateScale(0),
          }}>
          <View
            style={{
              marginHorizontal: moderateScale(24),
              marginBottom: moderateScale(0),
            }}>
            <CardEvent title={'Explore by category'} />
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={{
                marginTop: moderateScale(16),
              }}
              horizontal
              data={category}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
          </View>
          <View
            style={{
              marginHorizontal: moderateScale(24),
              marginTop: moderateScale(20),
              marginBottom: moderateScale(64),
            }}>
            <CardEvent title={'Design events'} data={designEvents} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
