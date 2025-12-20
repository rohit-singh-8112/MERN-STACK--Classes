import { Camera, Icon, } from 'lucide-react'
import { astronautHelmet, bellConcierge } from '@lucide/lab';

function App() {

  return (
    <>
    <Camera color='pink' size={78}/>
    <Icon iconNode={astronautHelmet}color='pink' size={78} />
    <Icon iconNode={bellConcierge}color='pink' size={78} />

      
    </>
  )
}

export default App
