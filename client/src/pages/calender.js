import React from "react"

class Mid extends React.Component{
    render(){
        return(<div id="cal-mid"><h2>Events Schedule</h2>
        <ul>
            <li>
            The events of EventZen will be spanning over two days(9am to 5pm), make sure the events that you register for do not overlap.
        
            </li>
        </ul>
        <h3>Schedule of events for 18th November:</h3>
        <table width="60%">
        <tr>
            <th>Time</th>
            <th>Events</th>
        </tr>
        <tr>
            <td>9:00-10:00</td>
            <td>Inauguration</td>
        </tr>
        <tr>
            <td>10:00-11:00</td>
            <td>Chief guest speech and performances</td>
        </tr>
        <tr>
            <td>11:00-12:00</td>
            <td>Codewars(Round 1)</td>
        </tr>
        <tr>
            <td rowspan="2">12:00-1:00</td>
            <td>Codewars(Round 2)</td>
        </tr>
        <tr>
            <td>Console Jam(Ice Breaker)</td>
        </tr>
        <tr>
            <td>1:00-2:00</td>
            <td>Lunch Break</td>
        </tr>
        <tr>
            <td>2:00-3:00</td>
            <td>Console Jam Knock-out Round(COD)</td>
        </tr>
        <tr>
            <td rowspan="2">3:00-4:00</td>
            <td>Hardwired(Round 1)</td>
        </tr>
        <tr>
            <td>Console Jam Round 2(COD)</td>
        </tr>
        <tr>
            <td>4:00-5:00</td>
            <td>Mini-games and Announcement of qualified teams</td>
        </tr>
    </table>
    <h3>Schedule of events for 19th November:</h3>
    <table width="60%">
        <tr>
            <th>Time</th>
            <th>Events</th>
        </tr>
        <tr>
            <td>9:00-10:00</td>
            <td>Hardwired Round 2</td>
        </tr>
        <tr>
            <td rowspan="2">10:00-11:00</td>
            <td>Codewars Final Round</td>
        </tr>
        <tr>
            <td>Console Jam Knock-out Round(Valorant)</td>
        </tr>
        <tr>
            <td>11:00-12:00</td>
            <td>Hardwired Final Round</td>
        </tr>
        <tr>
            <td>12:00-1:00</td>
            <td>Console Jam Round 2(Valorant)</td>
        </tr>
        <tr>
            <td>1:00-2:00</td>
            <td>Lunch Break</td>
        </tr>
        <tr>
            <td>2:00-3:00</td>
            <td>Console Jam Finals(COD)</td>
        </tr>
        <tr>
            <td>3:00-4:00</td>
            <td>Console Jam Finals(Valorant)</td>
        </tr>
        <tr>
            <td>4:00-5:00</td>
            <td>Announcement of winners and closing ceremony</td>
        </tr>
    </table>
        </div>)
    }
}
class Calender extends React.Component{
    render(){
        return(<div><Mid/></div>)
    }
}
export default Calender