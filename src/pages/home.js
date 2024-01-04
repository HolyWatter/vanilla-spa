import Component from "@components/Component";
import { navigateTo } from "../router";
import StateComponent from "../components/home/StateComponent";

class HomePage extends Component {
  template() {
    return `
      <h1>홈페이지입니다.</h1>
      <button data-component="button-to-list">리스트페이지 이동</button>
      <div class="stateComponent"></div>
     `;
  }

  mounted() {
    const $stateComponent = document.querySelector(".stateComponent");
    new StateComponent($stateComponent).render();
  }

  setEvent() {
    this.addEvent("click", '[data-component="button-to-list"]', () => {
      this.moveToList();
    });
  }

  moveToList() {
    navigateTo("/list");
  }
}

export default HomePage;
