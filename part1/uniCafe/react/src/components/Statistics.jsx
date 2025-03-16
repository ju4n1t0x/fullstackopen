import StatisticsLine from "./StatisticLine"

const Statistics = (props) => {

 return(
 <div>
    <table>
    <tbody>
        <tr>
            <td><StatisticsLine text="Good"/></td>
            <td><StatisticsLine value={props.good}/></td>
        </tr>
        <tr>
            <td><StatisticsLine text="Neutral"/></td>
            <td><StatisticsLine value={props.neutral}/></td>
        </tr>
        <tr>
            <td><StatisticsLine text="Bad"/></td>
            <td><StatisticsLine value={props.bad}/></td>
        </tr>
        <tr>
            <td><StatisticsLine text="Average"/></td>
            <td><StatisticsLine value={props.average}/></td>
        </tr>
        <tr>
            <td><StatisticsLine text="Positive Percent"/></td>
            <td><StatisticsLine value={props.positivePercent}/></td>    
        </tr>
        </tbody>
    </table>
</div>

 )
}

export default Statistics

