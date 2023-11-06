const eventList = document.querySelector('#event-list')
const button = document.querySelector('button')
button.addEventListener("click",() =>{
  let eventText = eventList.value;
  if (eventText == ""){
    alert(`문자를 입력해주세요!`)
  }
});
