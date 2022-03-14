import React, {useState} from 'react';
import {StyleSheet, View, StatusBar, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLOR from '../../Config/color';
import {BottomSheet, ListItem} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Flatlist1 from '../../Component/flatlist';
import {useDispatch, useSelector} from 'react-redux';
import CardEventExplore from '../../Component/cardEvent/explore';
import Poppins from '../../Component/Popins';
import FastImage from 'react-native-fast-image';
import NotFound from '../../Assets/Images/NotFound.png';

//HeaderSearch
const HeaderSearch = ({
  backgroundColor = `${COLOR.Primary}`,
  alignItems = 'center',
}) => {
  const [search, setSearch] = useState('');

  const styles = StyleSheet.create({
    container: {
      height: moderateScale(40),
      alignItems,
      backgroundColor,
      paddingBottom: moderateScale(1),
    },
    container2: {
      backgroundColor,
      flexDirection: 'column',
      alignItems,
      paddingTop: moderateScale(12),
    },
    search: {
      flex: 1,
      fontSize: 17,
      color: COLOR.Ash,
      borderRadius: 10,
      height: moderateScale(40),
      paddingBottom: moderateScale(9),
      marginHorizontal: moderateScale(8),
    },
    searchView: {
      flexDirection: 'row',
      backgroundColor: 'white',
      paddingLeft: moderateScale(16),
      paddingRight: moderateScale(20),
      borderColor: COLOR.Ash,
      color: COLOR.Ash,
      borderWidth: 1,
      borderRadius: 10,
      marginHorizontal: moderateScale(24),
      height: moderateScale(40),
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.searchView}>
          <Feather name="search" color={COLOR.Ash} size={20} />
          <TextInput
            onChangeText={text => setSearch(text)}
            placeholder="Search"
            style={styles.search}
            value={search}
            placeholderTextColor={COLOR.Ash}
          />
        </View>
      </View>
    </View>
  );
};

//explore
const Explore = () => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    {
      title: 'X  DATE',
      containerStyle: {
        backgroundColor: 'white',
      },
      titleStyle: {
        color: 'black',
      },
      onPress: () => setIsVisible(false),
    },
    {
      title: 'Today',
    },
    {
      title: 'Tomorrow',
    },
    {
      title: 'This Week',
    },
    {
      title: 'This Month',
    },
    {
      title: 'All Upcoming',
    },
  ];

  const handleBottomSheet = () => {
    setIsVisible(true);
  };

  const {exploreEvent} = useSelector(state => state.Home);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLOR.Primary} barStyle="light-content" />
      {/* header */}
      <View backgroundColor={COLOR.Primary} height={moderateScale(120)}>
        <HeaderSearch />
        <Flatlist1 onPress={handleBottomSheet} />
      </View>
      {/* cardevent */}
      <View
        style={{
          marginHorizontal: moderateScale(15),
          marginTop: moderateScale(24),
        }}>
        {exploreEvent.length > 0 ? (
          <CardEventExplore data={exploreEvent} />
        ) : (
          <View style={{alignItems: 'center', paddingTop: moderateScale(24)}}>
            <FastImage
              style={{
                width: moderateScale(240),
                height: moderateScale(194),
              }}
              source={NotFound}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Poppins>Sorry we couldn't find any event from this search</Poppins>
          </View>
        )}
      </View>
      {/* bottomsheet */}
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}> {l.title} </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});

// const data = dataredux;

// const [filter,setFilter] = useState('today')
// const [data, setData] = useState([])

// const filterData = (date) => {
//  const res = data.filter((e) => e.date === date)
//  setData(res)
// }

// useEffect(() => {
//   if(filter === 'today'){
//     filterData( new Date)
//   } else if (filter === 'tomorrow'){
//     filterData( new Date + 1)
//   }
// }, [filter])

// return (
//   <>
//   {data?.map((e,i) => (
//     <Text>{e.title}</Text>
//   ))}
//   </>

// )
