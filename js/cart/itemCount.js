class CartManager {
  constructor() {
    this.plusBtns = document.querySelectorAll(".cart_item_count-plus");
    this.minusBtns = document.querySelectorAll(".cart_item_count-minus");

    this.initialize();
  }

  initialize() {
    this.plusBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.handlePlusButtonClick(btn);
      });
    });

    this.minusBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.handleMinusButtonClick(btn);
      });
    });
  }

  handlePlusButtonClick(btn) {
    const input = btn.parentElement.querySelector("input[type='number']");
    const maxValue = input.getAttribute("max");
    // 현재 값과 최소값을 숫자로 변환
    const currentValue = parseInt(input.value);

    // 증가한 값을 계산
    // 최대값이 있는 경우 최대값을 초과하지 않도록 구현
    const newValue = maxValue
      ? Math.min(currentValue + 1, parseInt(maxValue))
      : currentValue + 1;
    input.value = newValue;
  }

  handleMinusButtonClick(btn) {
    const input = btn.parentElement.querySelector("input[type='number']");
    const minValue = input.getAttribute("min");

    const currentValue = parseInt(input.value);

    const newValue = minValue
      ? Math.max(currentValue - 1, parseInt(minValue))
      : currentValue - 1;
    input.value = newValue;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const cartManager = new CartManager();
});
