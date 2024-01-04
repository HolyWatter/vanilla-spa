import Component from "@components/Component";
import onInput from "../../function/onInput";

class StateComponent extends Component {
  template() {
    return `
      <h1>컴포넌트 입니다.</h1>
      <span>count</span>
      <span>${this.$state.count}</span>
      <button class="minusBtn">-</button>
      <button class="plusBtn">+</button>
      <br />
      <span>name</span>
      <span>${this.$state.name}</span>
      <input class="nameInput" />
    `;
  }

  setup() {
    this.$state = {
      count: 0,
      name: "",
    };
  }

  plusCount() {
    this.setState({
      count: this.$state.count + 1,
    });
  }

  minusCount() {
    this.setState({
      count: this.$state.count - 1,
    });
  }

  mounted() {}

  setEvent() {
    this.addEvent("click", ".minusBtn", () => {
      this.minusCount();
    });

    this.addEvent("click", ".plusBtn", () => {
      this.plusCount();
    });

    this.addEvent("input", ".nameInput", (e) => {
      this.setState({
        name: e.target.value,
      });
      onInput(e, document.querySelector(".nameInput"));
    });
  }
}

export default StateComponent;
