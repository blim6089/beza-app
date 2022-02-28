import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  pageContainer: {
    paddingTop: 30,
  },
  header: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 24,
  },
  body: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  transactions: {
    paddingTop: 6,
  },
  transactionGroup: {
    marginBottom: 27,
  },
  transactionTitleTxt: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    marginBottom: 27,
    color: COLORS.SUCCESS,
  },
  transactionItem: {
    marginBottom: 20,
  },
  invoiceItem: {
    marginBottom: 38,
  },
});
