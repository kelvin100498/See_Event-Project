import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: moderateScale(3),
  },
  content: {marginRight: moderateScale(16)},
});
