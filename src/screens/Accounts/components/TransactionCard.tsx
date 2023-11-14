import React, {memo} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

import * as response from '../../../api/Accounts/db.json';

import Receipt from '../../../assets/icons/receipt.svg';
import {FONTS} from '../../../utils/fonts';

type Props = {
  data: (typeof response.data.transactions)[number];
};

const TransactionCardComponent = ({data}: Props) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            data.status === 'PENDING' ? theme.colors.culturedGrey : undefined,
          borderColor: theme.colors.brightGrey,
        },
      ]}>
      <View style={styles.logoTitleSubTitleContainer}>
        <Image source={{uri: data.logoUrl}} style={styles.logo} />

        <View style={styles.titleSubTitleContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {data.transactionTitle}
            </Text>
            <Receipt />
          </View>
          <Text style={styles.subTitle}>{`${
            data.suburb && data.shortCategory
              ? `${data.suburb} | ${data.shortCategory}`
              : data.suburb
              ? data.suburb
              : data.shortCategory
              ? data.shortCategory
              : ''
          }`}</Text>
        </View>
      </View>

      <Text
        style={[
          styles.title,
          {
            color:
              data.cashflow === 'inflow'
                ? theme.colors.statusGreen
                : theme.colors.text,
          },
        ]}>
        {`${
          data.cashflow === 'inflow'
            ? '+'
            : data.cashflow === 'outflow'
            ? '-'
            : ''
        }$${data.amount}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 20,
    paddingVertical: 12,
  },
  logo: {
    borderRadius: 6,
    height: 40,
    width: 40,
  },
  logoTitleSubTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.9,
    gap: 12,
  },
  subTitle: {fontSize: 11, fontFamily: FONTS.regular},
  title: {fontFamily: FONTS.semiBold, fontSize: 13},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  titleSubTitleContainer: {flex: 1},
});

const TransactionCard = memo(TransactionCardComponent);

export {TransactionCard};
