import React from 'react';

export const BillionaireList = (props) =>{
    return (
      <div>
        <ol>
          {props.billionaires.map((person) => {
            return (
              <React.Fragment key={person.id}>
                <li>💁🏻‍♂️ {person.name}</li>{' '}
                <ul>
                  <li>
                    💵 มูลค่าทรัพย์สินทั้งหมด{' '}
                    {`${person.totalAsset} ${person.assetUnit}`}
                  </li>
                  <li>🏛 ธุรกิจ {person.businessType}</li>
                </ul>
              </React.Fragment>
            )
          })}
        </ol>
      </div>
    )
  }