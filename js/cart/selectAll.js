class CheckboxManager {
  constructor() {
    this.checkAll = document.querySelector(".check-all");
    this.checkItems = document.querySelectorAll(".check-item");
    this.selectAllIcon = this.checkAll.nextElementSibling;
    this.checkedCount = document.querySelector("#checked-count");
    this.totalCount = document.querySelector("#total-count");

    this.initialize();
  }

  initialize() {
    this.totalCount.textContent = `${this.checkItems.length}`;

    this.checkAll.addEventListener("click", () => {
      const isChecked = this.checkAll.checked;
      this.setCheckItems(isChecked);
    });

    this.checkItems.forEach((checkItem) => {
      checkItem.addEventListener("click", () => {
        this.updateCheckAll();
        this.updateCheckedCount();
        this.updateIcons();
      });
    });
  }

  setCheckItems(isChecked) {
    this.checkItems.forEach((checkItem) => {
      checkItem.checked = isChecked;
    });
    this.updateCheckedCount();
    this.updateIcons();
  }

  /**
   * 모든 개별 아이템 체크박스의 상태를 확인하여 전체 선택 체크박스의 상태를 업데이트하는 함수
   */
  updateCheckAll() {
    const allChecked = [...this.checkItems].every(
      (checkItem) => checkItem.checked
    );
    this.checkAll.checked = allChecked;
  }

  /**
   * 체크된 아이템의 개수를 업데이트하는 함수
   */
  updateCheckedCount() {
    const count = Array.from(this.checkItems).filter(
      (item) => item.checked
    ).length;
    this.checkedCount.textContent = `${count}`;
  }

  /**
   * 전체 선택 체크박스와 개별 아이템 체크박스의 아이콘을 업데이트하는 함수
   */
  updateIcons() {
    const isChecked = this.checkAll.checked;
    const iconName = isChecked ? "checkbox" : "checkbox-outline";
    this.selectAllIcon.setAttribute("name", iconName);

    this.checkItems.forEach((checkItem) => {
      const iconName = checkItem.checked ? "checkbox" : "checkbox-outline";
      checkItem.nextElementSibling.setAttribute("name", iconName);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const checkboxManager = new CheckboxManager();
});
