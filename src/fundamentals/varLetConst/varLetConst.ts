// var has function-level scope

function a() {
  let y = 0;
  for (
    var i = 0;
    i < 10;
    i++ // eslint-disable-line
  ) {
    y++;
  }

  //i gets hoisted to closest function scope - so even though this console log is not in the for-loop,
  //it is in the same function where i is hoisted so it will print 10
  console.log('i: ', i);
  console.log('y: ', y);
}

a();

//const and let have block level scope

function b() {
  let y = 0;
  for (let i = 0; i < 10; i++) {
    y++;
  }

  //ReferenceError: i is not defined
  // eslint-disable-next-line
  console.log('i: ', i); // eslint-disable-line

  console.log('y: ', y);
}

b();
