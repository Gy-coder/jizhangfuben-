import React from 'react';
import styled from 'styled-components';
import {RecordItem} from './RecordItem';
import {recordItemType} from '../../lib/recordItemType';


const RecordDetailWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

type Props = {
  recordList:recordItemType[]
}
const RecordDetail: React.FC<Props> = (props:Props) => {
  return (
    <RecordDetailWrapper>
      {props.recordList.map(item=>{
        return (
          <RecordItem key={item.id}
                      currentType={item.type}
                      tag={item.tag}
                      amount={item.amount}
                      time={item.createAt as string}
                      id={(item.id as number).toString()
                      }/>
        )
      })}
      {/*<RecordItem/>*/}
    </RecordDetailWrapper>
  );
};

export {RecordDetail};