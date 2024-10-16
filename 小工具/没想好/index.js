const str = `PalmPay TXN REF
Channel Response ID
Created Date
Channel
Country
Service
Refund Order No
Remark
Channel Request Amount
Early Refund Processed`

const rightStr = `TXN Type
Order No.
Completed Date
Status
Currency
Amount
Refund TXN REF
Channel Request ID
Response Code`

function handleStr(LStr, RStr, valuePrefix = '') {
  const LFieldArr = String(LStr).split('\n')
  const RFieldArr = String(RStr).split('\n')
  const finalFieldArr = []
  let i = 0, l = 0, r = 0;
  while (l < LFieldArr.length || r < RFieldArr) {
    if (i % 2 == 0) {
      finalFieldArr.push(LFieldArr[l++])
    }
    if (i % 2 == 1) {
      finalFieldArr.push(RFieldArr[r++])
    }
    i++
  }
  return finalFieldArr.map((value) => {
    const field = value.trim().replaceAll(' ', '')
    return {
      label: value,
      value: valuePrefix + field.charAt(0).toLocaleLowerCase() + field.slice(1)
    }
  })

}

console.log(handleStr(str, rightStr, 'channelTXNDetail?.'));
