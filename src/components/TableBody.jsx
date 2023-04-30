import PropTypes from 'prop-types';

const TableBody = ({ users }) => {
   return (
      <tbody>
         {users.map(
            (
               {
                  estDepartureAirport,
                  estArrivalAirport,
                  firstSeen,
                  lastSeen,
                  callsign,
               },
               index,
            ) => (
               <tr key={index}>
                  <td scope='row'>{callsign}</td>
                  <td scope='row'>{estDepartureAirport}</td>
                  <td>
                     {new Date(firstSeen * 1000).toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: true,
                        timeZone: 'GMT',
                     }) + '  GMT'}
                  </td>
                  <td scope='row'>{estArrivalAirport}</td>
                  <td>
                     {new Date(lastSeen * 1000).toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: true,
                        timeZone: 'GMT',
                     }) + '  GMT'}
                  </td>
               </tr>
            ),
         )}
      </tbody>
   );
};

TableBody.propTypes = {
   users: PropTypes.array.isRequired,
};

export default TableBody;
