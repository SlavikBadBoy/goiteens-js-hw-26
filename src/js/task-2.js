const box = document.querySelector("#box");

function moveBox(event) {
  box.style.left = `${event.clientX - box.offsetWidth / 2}px`;
  box.style.top = `${event.clientY - box.offsetHeight / 2}px`;
}

const debouncedMove = _.debounce(moveBox, 100);

document.addEventListener("mousemove", debouncedMove);
