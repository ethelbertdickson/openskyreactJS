const TableHead = ({ onSort }) => {
   //
   const handleClick = (columnName) => {
      onSort(columnName);
   };
   return (
      <thead>
         <tr>
            <th
               style={{ cursor: 'pointer' }}
               scope='col'
               onClick={() => handleClick('callsign')}
            >
               Flight
            </th>
            <th
               style={{ cursor: 'pointer' }}
               scope='col'
               onClick={() => handleClick('estDepartureAirport')}
            >
               Departure Airport
            </th>
            <th
               style={{ cursor: 'pointer' }}
               scope='col'
               onClick={() => handleClick('firstSeen')}
            >
               Departing Time
            </th>
            <th
               style={{ cursor: 'pointer' }}
               scope='col'
               onClick={() => handleClick('estArrivalAirport')}
            >
               Arrival Airport
            </th>
            <th
               style={{ cursor: 'pointer' }}
               scope='col'
               onClick={() => handleClick('lastSeen')}
            >
               Arriving Time
            </th>
         </tr>
      </thead>
   );
};

export default TableHead;
