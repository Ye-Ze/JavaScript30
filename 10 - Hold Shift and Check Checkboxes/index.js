const checkboxs = document.querySelectorAll(".item input");
let lastChecked = -1;
let nextChecked = -1;
const chkboxList = Array.from(checkboxs);

function handleCheck(e) {
  if (e.shiftKey) {
    nextChecked = chkboxList.indexOf(this);

    let small, big, status;
    if (nextChecked > lastChecked) {
      big = nextChecked;
      small = lastChecked;
    } else {
      big = lastChecked;
      small = nextChecked;
    }
    status = chkboxList[nextChecked].checked;

    for (let i = small; i < big; i++) {
      chkboxList[i].checked = status;
    }
    chkboxList[lastChecked].checked = status;
  }
  if (lastChecked == -1) {
    lastChecked = chkboxList.indexOf(this);
  } else {
    lastChecked = nextChecked;
  }
}

checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});
