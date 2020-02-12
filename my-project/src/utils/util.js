var aaa = () => {
  let b =3; 
  return b
};
var bbb =()=>{
  var b = new Object;
  b.name = "terry";
  b.age = "5"
  return b
};
var ccc = {
  name:"terry",
  age:"5",
  test_c:() => {
    return this.name + ' ' +this.age
  }
}
export default{
  aaa,
  bbb,
  ccc
}
