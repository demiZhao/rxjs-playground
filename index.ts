import { of, from } from 'rxjs';
import { map, delay, mergeMap, concatMap, exhaustMap } from 'rxjs/operators';

const getData = param => {
  const delayTime = Math.floor(Math.random() * 10000) + 1;
  return of(
    `retrieved new data with params: ${param} and delay: ${delayTime}`
  ).pipe(delay(delayTime));
};

//regular map
from([1,2,3,4]).pipe(
  map(param => getData(param))
).subscribe(val => val.subscribe(data => console.log('map:', data)));

//mergeMap
from([1, 2, 3 ,4]).pipe(
  mergeMap(param => getData(param))
).subscribe(val => console.log('mergeMap:', val));

//concatMap
from([1, 2, 3 ,4]).pipe(
  concatMap(param => getData(param))
).subscribe(val => console.log('concatMap:', val));

//exhaustMap
from([1, 2, 3 ,4]).pipe(
  exhaustMap(param => getData(param))
).subscribe(val => console.log('exhaustMap:', val));
