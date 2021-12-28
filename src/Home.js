import { DonutChart } from "@carbon/charts-react";
import { useEffect } from "react";


const colors = ["#00a68f", "#3b1a40", "#473793", "#3c6df0", "#56D2BB"];

const simpleBarData = {
  labels: [
    "Developers",
    "Testers",
    "Information Development",
    "Scientists",
    "Misc"
  ],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColors: colors,
      data: [64, 71, 9, 11, 23]
    }
  ]
};



const demoDonutOptions = {
  accessibility: false,
  legendClickable: true,
  containerResizable: true,
  colors,
  center: {
    number: 123,
    label: "My test label"
  }
};

function Home(props) {
useEffect(()=>{

    })
    return <>
<div className="App">
      <h3>React Donut chart with label</h3>
      <div>
      <svg width="400" height="110">
  <rect width="300" height="100"  />
</svg>
        <DonutChart
          data={simpleBarData}
          options={demoDonutOptions}
          width={200}
          height={150}
        />
      </div>
    </div>
    <h1 className="f" style={{color: 'white'}}>Hello {props.name}!</h1></>;
  };
  
  export default Home;