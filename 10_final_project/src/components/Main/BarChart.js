import React,{useState,useEffect} from 'react'

function BarGroup(props) {
    let barPadding = 2
    let barColour = '#348AA7'
    let widthScale = d => d * 5
  
    let width = widthScale(props.d.revenue)
    let yMid = props.barHeight * 0.5
    
    return <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
      <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
      <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.revenue}</text>
    </g>
  }


export default function BarChart({companies}) {

    const [state, setstate] = useState([])

      useEffect(() => {
        if(companies){
            let list = companies.map(company =>
                {return{
                    name:company.name,
                    revenue:company.revenue
                }}    
            )
            setstate(list)
        }
      }, [companies])

      let barHeight = 30
          
      let barGroups = state.map((d, i) => 
        <g key={i} transform={`translate(0, ${i * barHeight})`}>
                                                      <BarGroup d={d} barHeight={barHeight} />
                                                    </g>)        
    return (
        <svg width="1000" height="300" >
            <g className="container">
            <text className="title" x="10" y="30">Revenues 2020 (In Millions)</text>
            <g className="chart" transform="translate(130,60)">
                {barGroups}
            </g>
            </g>
        </svg>
    )
}
