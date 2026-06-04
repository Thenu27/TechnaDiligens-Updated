
import { useProgress } from "@react-three/drei"
import "./LoadingScreen.css"

const LoadingScreen = ({progress}) => {

  const {progress:threeProgress} = useProgress();
  // const [publicProgress, setPublicProgress] = useState(0)

  const totalProgress = (progress + threeProgress) / 2

  return (
    <div className="loading-screen" >
      <h1>Loading {Math.round(totalProgress)}%</h1>   
     </div>
  )
}

export default LoadingScreen