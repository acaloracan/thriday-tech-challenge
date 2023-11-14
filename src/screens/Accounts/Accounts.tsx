import React from 'react';
import {
  StyleSheet,
  SectionList,
  SectionListRenderItemInfo,
  SectionListData,
} from 'react-native';
import {Text} from 'react-native-paper';

import _ from 'lodash';

import * as response from '../../api/Accounts/db.json';

import {FONTS} from '../../utils/fonts';

import {TransactionCard} from './components/TransactionCard';

import useViewModel from './useViewModel';

type Section = {
  title: string;
  data: typeof response.data.transactions;
};

const Accounts = () => {
  const {transactionListData} = useViewModel();

  const renderItem = ({
    item,
  }: SectionListRenderItemInfo<
    (typeof response.data.transactions)[number],
    Section
  >) => {
    return <TransactionCard data={item} />;
  };

  const renderSectionHeader = ({
    section: {title},
  }: {
    section: SectionListData<
      (typeof response.data.transactions)[number],
      Section
    >;
  }) => {
    return <Text style={styles.title}>{title}</Text>;
  };

  return (
    <SectionList
      sections={transactionListData}
      renderSectionHeader={renderSectionHeader}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={renderItem}
      stickySectionHeadersEnabled={false}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {paddingHorizontal: 16, gap: 12},
  container: {
    flex: 1,
  },
  title: {fontSize: 16, fontFamily: FONTS.semiBold},
});

export default Accounts;
