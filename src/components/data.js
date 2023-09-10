import  db  from '../firebase'
import { getDatabase, ref, onValue } from "firebase/database";

function getData() {
const cars = ref(db, "cars/");
onValue(cars, (snapshot) => {
  const data = snapshot.val();
return data
});
}

export default getData;