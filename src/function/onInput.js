function onInput(e, selector) {
  selector.select();
  selector.value = "";
  selector.value = e.target.value;
}

export default onInput;
