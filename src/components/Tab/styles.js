import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    borderRadius: 100,
    shadowColor: '#000000',
    shadowOpacity: 16,
    shadowRadius: 100,
    elevation: 3,
    padding: 7,
  },
  tab: {
    flex: 1,
    height: 44,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTxt: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 20,
  },
});
