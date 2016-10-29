# Benchmark

`npm start`

## TL;DR

No significant benefits. 7.2ms vs 7.4ms.

## Cached

`npm run cached`

```
Server Software:
Server Hostname:        localhost
Server Port:            8000

Document Path:          /cached
Document Length:        8795 bytes

Concurrency Level:      100
Time taken for tests:   36.022 seconds
Complete requests:      5000
Failed requests:        0
Total transferred:      44970000 bytes
HTML transferred:       43975000 bytes
Requests per second:    138.81 [#/sec] (mean)
Time per request:       720.431 [ms] (mean)
Time per request:       7.204 [ms] (mean, across all concurrent requests)
Transfer rate:          1219.16 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.5      0      16
Processing:    52  714  94.0    699    1212
Waiting:       50  714  94.0    699    1212
Total:         57  714  93.8    700    1212

Percentage of the requests served within a certain time (ms)
  50%    700
  66%    729
  75%    752
  80%    762
  90%    797
  95%    829
  98%    980
  99%   1139
 100%   1212 (longest request)
```

## Uncached

`npm run uncached`

```
Server Software:
Server Hostname:        localhost
Server Port:            8000

Document Path:          /uncached
Document Length:        8795 bytes

Concurrency Level:      100
Time taken for tests:   37.294 seconds
Complete requests:      5000
Failed requests:        0
Total transferred:      44970000 bytes
HTML transferred:       43975000 bytes
Requests per second:    134.07 [#/sec] (mean)
Time per request:       745.877 [ms] (mean)
Time per request:       7.459 [ms] (mean, across all concurrent requests)
Transfer rate:          1177.57 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.5      0      17
Processing:    48  738  74.2    734     963
Waiting:       45  738  74.2    734     963
Total:         65  738  73.5    734     965

Percentage of the requests served within a certain time (ms)
  50%    734
  66%    758
  75%    773
  80%    788
  90%    826
  95%    859
  98%    891
  99%    921
 100%    965 (longest request)
```
