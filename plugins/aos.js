
import AOS from 'aos'
import 'aos/dist/aos.css'
export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({ Offset: 400, Duration: 5000 }) // or any other options you need
}
