import React from 'react';
import {View, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderComponent} from '../../Component/Header';
import COLOR from '../../Config/color';
import {moderateScale} from 'react-native-size-matters';
import Poppins from '../../Component/Popins';
import Feather from 'react-native-vector-icons/Feather';
import {Avatar} from 'react-native-elements';
import {useDispatch} from 'react-redux';

const Profile = props => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLOR.Primary} barStyle="light-content" />
      <HeaderComponent heightImage={0} widthImage={0} text="Profile" />

      <View style={styles.card}>
        <View style={styles.profile}>
          <Avatar
            rounded
            source={{
              uri: 'http://4.bp.blogspot.com/-NhvBiEqKDlI/VUrcxyKSzFI/AAAAAAAAC0o/J16-l-BvkPY/s1600/gambar-orang-lucu-narsis.jpg',
            }}
            size="xlarge"
          />
        </View>
        <View style={styles.name}>
          <Poppins type="Bold" size={20} color="black">
            Cyank kamu Celalu
          </Poppins>
        </View>
        <View style={styles.email}>
          <Poppins color="black">ijalCodet@gmail.com</Poppins>
        </View>
      </View>

      <View style={styles.card2}>
        <TouchableOpacity
          onPress={() => {
            console.log('im presss');
            dispatch({type: 'LOGOUT'});
          }}>
          <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
            <Feather
              style={{paddingHorizontal: moderateScale(16)}}
              name="log-out"
              size={25}
            />
            <Poppins color="black" type="Bold">
              Log Out
            </Poppins>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginTop: moderateScale(22),
    marginHorizontal: moderateScale(22),
    paddingLeft: moderateScale(8),
    alignItems: 'center',
    alignContent: 'center',
  },
  card2: {
    backgroundColor: 'white',
    marginTop: moderateScale(22),
    marginHorizontal: moderateScale(22),
    paddingVertical: moderateScale(16),
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  profile: {
    paddingTop: moderateScale(11),
    alignItems: 'center',
  },
  name: {
    alignItems: 'center',
    marginTop: moderateScale(11),
  },
  email: {
    alignItems: 'center',
    marginTop: moderateScale(5),
    marginBottom: moderateScale(18),
  },
});
