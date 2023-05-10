class CartItem {
  constructor(cartItemElement) {
    this.cartItemElement = cartItemElement;
    this.checkbox = cartItemElement.querySelector(".check-item");
  }

  isSelected() {
    return this.checkbox.checked;
  }

  /**
   * 해당 카트 아이템 요소에서 필요한 정보를 가져오는 함수
   */
  getItemDetails() {
    const titleElement = this.cartItemElement.querySelector(
      ".cart_item-title-text"
    );
    const companyElement =
      this.cartItemElement.querySelector(".cart_item-company");
    const releaseElement =
      this.cartItemElement.querySelector(".cart_item-release");
    const priceElement = this.cartItemElement.querySelector(".cart_item-price");
    const countElement = this.cartItemElement.querySelector(
      ".cart_item_count-box"
    );

    // 가져온 정보를 변수에 할당
    const title = titleElement.innerText;
    const company = companyElement.innerText;
    const release = releaseElement.innerText;
    const price = priceElement.innerText;
    const count = countElement.value;

    // 객체로 정보를 반환
    return { title, company, release, price, count };
  }
}

class Cart {
  constructor() {
    this.cartItems = [];
  }

  initialize() {
    // 카트 아이템 요소들을 가져와서 CartItem 인스턴스를 생성하고 배열에 추가시킴
    const cartItemElements = document.querySelectorAll(".cart_item");
    cartItemElements.forEach((cartItemElement) => {
      const cartItem = new CartItem(cartItemElement);
      this.cartItems.push(cartItem);
    });
  }

  /**
   * 선택된 아이템들의 정보를 가져오는 함수
   */
  purchase() {
    const selectedItems = this.getSelectedItems();
    console.log(selectedItems);
  }

  /**
   * 선택된 아이템들을 필터링하여 정보를 가져온 뒤, 배열로 반환하는 함수
   * @returns 선택된 아이템 (배열 형태)
   */
  getSelectedItems() {
    //
    return this.cartItems
      .filter((cartItem) => cartItem.isSelected())
      .map((cartItem) => cartItem.getItemDetails());
  }
}

function initializeCart() {
  const cart = new Cart();
  cart.initialize();

  const purchaseButton = document.querySelector(".purchase_button");
  purchaseButton.addEventListener("click", () => {
    cart.purchase();
  });
}

initializeCart();
