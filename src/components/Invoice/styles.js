import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 13,
    shadowColor: '#000000',
    shadowOpacity: 16,
    shadowRadius: 13,
    elevation: 2,
    backgroundColor: COLORS.WHITE,
    paddingTop: 14,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: COLORS.SUCCESS,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  detailInfo: {
    flex: 1,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.SUCCESS,
  },
  headerTxt: {
    fontFamily: 'Montserrat-Black',
    fontSize: 16,
    color: COLORS.SUCCESS,
    marginBottom: 3,
  },
  dateTxt: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11,
    color: COLORS.SUCCESS,
    marginBottom: 3,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  downloadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 26,
    borderRadius: 100,
    backgroundColor: COLORS.SUCCESS,
    paddingLeft: 15,
    paddingRight: 15,
  },
  downloadTxt: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,
    color: COLORS.WHITE,
    marginRight: 8,
  },
  amountLabelTxt: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11,
    color: COLORS.SUCCESS,
    marginBottom: 7,
  },
  amountTxt: {
    fontFamily: 'Montserrat-Black',
    fontSize: 19,
    color: COLORS.SUCCESS,
  },
});
