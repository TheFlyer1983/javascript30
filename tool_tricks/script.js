const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string!', 'word');
  
    // Styled
    //console.log('%c I am some great text', 'font-size:50px; background: red; text-shadow: 10px 10px 0 blue');
    // warning!
    console.warn('OH NOOO')
    // Error :|
    console.error('Shit!')
    // Info
    console.info('Crocs eat 3-4 people per yer.')
    // Testing
    console.assert(1 === 2, 'That is wrong');
    // clearing
    console.clear();
    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.log(p);
    console.dir(p);
    // Grouping together
    console.clear();
    dogs.forEach(dog => {
      console.group(`${dog.name}`)
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} years old`);
      console.groupEnd(`${dog.name}`)
    })
    // counting
    console.count('wes');
    console.count('wes');
    console.count('wes');
    console.count('wes');
    console.count('wes');
    console.count('wes');
    console.count('steve');
    console.count('wes');

    console.count('wes');
    console.count('wes');


    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });