const firstName = 'Nathan';
const code = '418: I\'m a teapot';

console.time('some_process');
console.log('My firstName is %s. I am %d years old', firstName, 3);
console.count(firstName);
console.count(`My first name is ${firstName}`);
console.count(firstName);
console.count(firstName);
console.count(firstName);
console.clear();
console.count(firstName);
console.log('Reset count')
console.countReset(firstName);
console.count(firstName);
console.trace();
console.error('error #%s', code);
console.table([{ rate: '100/minute', errors: '0', duration: '30ms' }, { rate: '104/minute', errors: '1', duration: '130ms' },{ rate: '99/minute', errors: '0', duration: '31ms' }]);
console.timeEnd('some_process');
