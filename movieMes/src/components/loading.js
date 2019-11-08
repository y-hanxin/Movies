import Modul from "./modul.js"


const template = `
  <Modul v-show="show">
    <div style=font-size:1.5em;>加载中....</div>
  </Modul> 
`;
export default {
    template,
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Modul
    }
}