import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export let options = {
  vus: 10, // Virtual Users (VUs)
  iterations: 100, // Iterações por VU
  duration: '10s', // Duração total do teste
};

export default function () {
  const url = 'http://localhost:3001/health-check';
  const response = http.get(url);

  check(response, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}





