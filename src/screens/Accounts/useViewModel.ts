import _ from 'lodash';
import moment from 'moment';

import * as response from '../../api/Accounts/db.json';

const titleDateFormat = 'dddd, DD MMMM YYYY';

const useViewModel = () => {
  const data = _.groupBy(response.data.transactions, item => {
    return item.date;
  });

  const transactionListData = _.map(_.keys(data), item => {
    return {
      title: moment(item, 'DD/MM/YYYY').format(titleDateFormat),
      data: data[item],
    };
  });

  return {
    transactionListData,
  };
};

export default useViewModel;
