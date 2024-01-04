import { navigateTo } from "@/router";
import Component from "../Component";

class Sidebar extends Component {
  template() {
    return `
      <ul>
        <li class="friendLi" onclick="${() =>
          navigateTo("/friend")}">홈으로</li>
        <li class="friendLi">친구목록</li>
        <li class="chatLi">채팅목록</li>
        <li class="moreLi">더보기</li>
      </ul>
    `;
  }
}

export default Sidebar;
