export default function(element, eventType,action){
  element.addEventListener(eventType,event=>{
    action(event);
  });
}
