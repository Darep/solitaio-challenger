curl -X GET -i http://localhost:1234/ --data $'+\n5\5'

curl -X GET -i http://localhost:1234/ --data $'palindrome?\nAlle satasella!'
curl -X GET -i http://localhost:1234/ --data $'palindrome?\nElla-Mia Kauppila, Atso ostaa lippua kaimalle.'

curl -X GET -i http://localhost:1234/ --data $'fibonacci\n0'
curl -X GET -i http://localhost:1234/ --data $'fibonacci\n28'
curl -X GET -i http://localhost:1234/ --data $'fibonacci\n9222'

curl -X GET -i http://localhost:1234/ --data $'nth-word\n2\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nFusce ut lacus enim, vitae bibendum magna. Maecenas et sem\neu sapien accumsan vehicula. Ut vel fringilla elit. Nam\ndolor sapien, scelerisque quis molestie at, faucibus a nisi.\nDonec orci augue, eleifend vel accumsan id, aliquet quis\nnibh. Integer suscipit sollicitudin orci nec pharetra.\nPhasellus vel neque felis. Donec bibendum nisi a nulla\ntempor placerat. Aliquam venenatis fringilla accumsan. Nunc\nsagittis vitae felis fermentum ornare. Nunc id risus nunc.\nCurabitur rhoncus, leo id fermentum posuere, felis ante\npellentesque elit, sit amet pretium libero mauris eu. Fusce\nimperdiet purus quis leo commodo nec feugiat diam pretium.\nMauris ac neque ut nunc vehicula varius.'

curl -X GET -i http://localhost:1234/ --data $'nth-word\n68\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nFusce ut lacus enim, vitae bibendum magna. Maecenas et sem\neu sapien accumsan vehicula. Ut vel fringilla elit. Nam\ndolor sapien, scelerisque quis molestie at, faucibus a nisi.\nDonec orci augue, eleifend vel accumsan id, aliquet quis\nnibh. Integer suscipit sollicitudin orci nec pharetra.\nPhasellus vel neque felis. Donec bibendum nisi a nulla\ntempor placerat. Aliquam venenatis fringilla accumsan. Nunc\nsagittis vitae felis fermentum ornare. Nunc id risus nunc.\nCurabitur rhoncus, leo id fermentum posuere, felis ante\npellentesque elit, sit amet pretium libero mauris eu. Fusce\nimperdiet purus quis leo commodo nec feugiat diam pretium.\nMauris ac neque ut nunc vehicula varius.'

curl -X GET -i http://localhost:1234/ --data $'sort\n76\n-94\n78\n23\n-9\n17\n82\n-32\n83\n71'

curl -X GET -i http://localhost:1234/ --data $'caesar-cipher\n3\nencrypt this text with caesar cipher (rot-n) with n of 3'

curl -X GET -i http://localhost:1234/ --data $'caesar-cipher\n11\nencrypt this text with caesar cipher (rot-n) with n of 11'


curl -X GET -i http://localhost:1234/ --data $'iban-checksum\nIL__ 0108 0000 0009 9999 999'
