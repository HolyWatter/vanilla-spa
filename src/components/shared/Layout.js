import Component from "../Component";
import Sidebar from "./Sidebar";

class Layout extends Component {
  component;

  constructor($target, component) {
    super($target);
    this.component = component;
  }

  template() {
    return `
      <div class='layout-container'>
        <div class='sidebar-container'></div>
        <div class='contents-container'></div>
      </div>
    `;
  }

  mounted() {
    const $sidebar = document.querySelector(".sidebar-container");
    const $contents = document.querySelector(".contents-container");
    new Sidebar($sidebar).render();

    if (this.component) {
      new this.component($contents);
    }
  }
}

export default Layout;
