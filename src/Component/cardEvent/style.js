import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(3),
  },
  content: {
    borderRadius: moderateScale(10),
    backgroundColor: 'white',
    elevation: 6,
    marginBottom: moderateScale(20),
    marginRight: moderateScale(16),
    width: moderateScale(230),
  },
  buttonSeeAll: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: moderateScale(72),
  },
});

//style card event explore
export const stylesCardEventExplore = StyleSheet.create({
  container: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  content: {
    marginLeft: moderateScale(15),
    flexDirection: 'row',
    marginBottom: moderateScale(20),
    borderColor: '#E3E3E3',
    borderBottomWidth: 1,
    paddingBottom: moderateScale(1),
  },
});
