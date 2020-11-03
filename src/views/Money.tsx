import {Layout} from '../component/Layout';
import React, {useEffect} from 'react';
import {ChooseType} from '../component/Money/chooseType';
import {OutputMoney} from '../component/Money/outputMoney';
import {Tags} from '../component/Money/tags';
import {Notes} from '../component/Money/notes';
import {NumberPad} from '../component/Money/numberPad';
import {useRecordItem} from '../hooks/useRecordItem';
import {useRecordList} from '../hooks/useRecordList';

const Money: React.FC = () => {
  const {recordItem, setRecordItem} = useRecordItem();
  const {recordList,addRecordList} = useRecordList();
  useEffect(() => {
    setRecordItem({...recordItem, tag: {id: 'others', tagName: '其它'}});
  }, [recordItem.type]);
  return (
    <Layout>
      {recordItem.type}{recordItem.tag.id}{recordItem.note}{recordItem.amount}
      <hr/>
      <ChooseType type={recordItem.type}
                  onChange={(type) => setRecordItem({...recordItem, type: type})}
      />
      <OutputMoney amount={recordItem.amount}
                   name={recordItem.tag.id}
                   type={recordItem.type}
      />
      <Tags type={recordItem.type}
            onChange={(tag) => setRecordItem({...recordItem, tag: tag})}
      />
      <Notes note={recordItem.note}
             onChange={(note) => setRecordItem({...recordItem, note: note})}
      />
      <NumberPad amount={recordItem.amount.toString()}
                 onChange={(amount) => setRecordItem({...recordItem, amount: parseFloat(amount)})}
                 onOk={() => {
                   if (addRecordList(recordItem)) {
                     console.log(recordItem);
                     console.log(recordList);
                     alert('添加成功')
                     window.localStorage.setItem('recordList',JSON.stringify(recordList))
                   }
                 }}
      />
    </Layout>
  );
};


export {Money};