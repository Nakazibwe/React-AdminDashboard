import React from 'react';
import './widgetlarge.css';
import member1 from '../../components/widgetSmall/member1.jpeg';
import member2 from '../../components/widgetSmall/member2.jpeg';
import member3 from '../../components/widgetSmall/member3.jpeg';
import member4 from '../../components/widgetSmall/member4.jpeg';
import member5 from '../../components/widgetSmall/member5.jpeg';
import member6 from '../../components/widgetSmall/member6.jpeg';
const WidgetLarge = () => {
  const Button = ({type}) =>{
    return (
      <button className =  {' widgetLgButton ' + type}>{type}</button>
    );

  }
  return (
    <div className = 'widgetLg'>
       <h3 className="widgetLgTitle">Latest transactions</h3>
       <table className="widgetLgTable">
        <tr className = 'widgetLgTr'>
           <th className = "widgetLgTh">Customer</th>
           <th className = "widgetLgTh">Date</th>
           <th className = "widgetLgTh">Amount</th>
           <th className = "widgetLgTh">Status</th>
        </tr>
         <tr className = 'widgetLgTr'>
           <td className = "widgetLgUser">
             <img src={member2} alt={member2} className="widgetLgImage" />
             <span className="widgetLgName">Ushindi Hyram</span>
           </td>
           <td className="widgetLgDate">2 Jun 2021</td>
           <td className="widgetLgAmount">$5000</td>
            <td className="widgetLgStatus"><Button type='Approved'/></td>
        </tr>
         <tr className = 'widgetLgTr'>
           <td className = "widgetLgUser">
             <img src={member3} alt={member3} className="widgetLgImage" />
             <span className="widgetLgName">Ushindi Krystl</span>
           </td>
           <td className="widgetLgDate">2 Jun 2021</td>
           <td className="widgetLgAmount">$5000</td>
            <td className="widgetLgStatus"><Button type='Declined'/></td>
        </tr>
         <tr className = 'widgetLgTr'>
           <td className = "widgetLgUser">
             <img src={member4} alt={member4} className="widgetLgImage" />
             <span className="widgetLgName">Ushindi Watson</span>
           </td>
           <td className="widgetLgDate">2 Jun 2021</td>
           <td className="widgetLgAmount">$5000</td>
            <td className="widgetLgStatus"><Button type='Pending'/></td>
        </tr>
        <tr className = 'widgetLgTr'>
           <td className = "widgetLgUser">
             <img src={member5} alt={member5} className="widgetLgImage" />
             <span className="widgetLgName">Ushindi Kydn</span>
           </td>
           <td className="widgetLgDate">2 Jun 2021</td>
           <td className="widgetLgAmount">$5000</td>
            <td className="widgetLgStatus"><Button type='Approved'/></td>
        </tr>
           
       </table>
    </div>
  )
}

export default WidgetLarge