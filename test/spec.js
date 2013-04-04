var assert = require('assert');

describe('challenge parser', function () {
    var parser = require('../lib/challenge-parser');

    it('should return challenge name', function () {
        assert.equal(parser('ping'), 'ping');
    })

    it('should return "add" for +', function () {
        assert.equal(parser('+'), 'add');
    })
});

describe('ping', function () {
    var ping = require('../lib/challenges/ping');

    it("should pong", function() {
        assert.equal(ping(), 'pong');
    });
});

describe("say-hello", function() {
    var sayHello = require('../lib/challenges/say-hello');

    it('should say hello to whoever it is', function () {
        assert.equal(sayHello(['Solita']), 'Hello Solita');
    })
});

describe('add', function () {
    var add = require('../lib/challenges/add');

    it('should multiply', function () {
        assert.equal(add(['233', '446']), 679);
    });

    it('should multiply single number', function () {
        assert.equal(add(['223']), 223);
    });

    it('should multiply multiple numbers', function () {
        assert.equal(add(['223', '6', '5']), 234);
    });
});

describe('minus', function () {
    var deduct = require('../lib/challenges/deduct');

    it('should deduct', function () {
        assert.equal(deduct(['61', '66']), -5);
    });

    it('should deduct single number', function () {
        assert.equal(deduct(['61']), -61);
    });

    it('should deduct multiple numbers from the first number', function () {
        assert.equal(deduct(['61', '23', '5']), 33);
    });
});

describe("fizzbuzz", function() {
    var fb = require('../lib/challenges/fizzbuzz');

    it('should return "Fizz" when number mod 3 == 0', function () {
        assert.equal(fb(['81']), 'Fizz');
    });

    it('should return "Buzz" when number mod 5 == 0', function () {
        assert.equal(fb(['10']), 'Buzz');
    });

    it('should return "FizzBuzz" when number mod 15 == 0', function () {
        assert.equal(fb(['60']), 'FizzBuzz');
    });

    it('should return the number when not divisible by 5 nor 3', function () {
        assert.equal(fb(['11']), '11');
    });
});

describe('fibonakki', function () {
    var fib = require('../lib/challenges/fibonacci');

    it('should count 0 fibonaccis correctly', function () {
        assert.equal(fib(['0']), 0);
    });

    it('should count 13 fibonaccis correctly', function () {
        assert.equal(fib(['13']), 233);
    });

    xit('should count 9621 fibonaccis correctly', function () {
        assert.equal(fib(['9621']), 2092193472907664876254724061872834264887743870418889052503632173695624260729123495348537184333075998893270765034786814489133257335373015499170608356490713566413811119344074479192356099389023307788678932755449953982731096304187189620867965509381236541991363326364157120777184063084443410240079587491164678010170277215566544029443398831586225121346225948480755680448018016774521780983004381572791726324279574531255994014771312863157100670360542425467527639647869829197563612726043989361013765060238121868324350865488444987935146052410599866039064436889788151127078336964801169235735808361259234728733411991162693749100619485072785902220380838934919242306927633218054235213281879556788507998460715459328445215241888068999185204839101772201507093559603596009762169143318173219377997548633694838193365940472276442591644655191146679227308250442484951647830627541141786021473523536924049319298900569230418137049407356630729360216661464915522096004911833841729542996754850363613709108518001516845143511242982602115432736715766475794397553873822314262935663775945666959361948808474072609425923921971583634102778569122672887180758290869979626692490765910784556120644385532594775361643464062639398853462981852914043281150805044026059402241259897022776008127111419247171374075710945366799481946841264643373301437542469228303890573960036901183587585676441189355994840555273710443791350219403593499556187208649210470780658627206402322449411191172638624396331853524053493677541517343516158673284016362723830294727054683691443283228191410513447550436007445999177805486546159097746067246337095342445092304362177178460193638153907631486235873298252592277138005250365423511571516039607557758257911068086863980756301697567399784602166832092552373231043006367811284334417952331678613553181355837797998398365915357696820612848335826296867415957368549174860582625298386205851144755201441504615891634211529846825731147313655417941182188773415936891186922192570091430430988202558393676823473278578735145081108305047680599904481137444546);
    });
});

describe('caesar-cipher', function () {
    var caesar = require('../lib/challenges/caesar');

    it('should rotate string by 3 when asked', function () {
        assert.equal(
            caesar('caesar-cipher\n3\nencrypt this text with caesar cipher (rot-n) with n of 3'),
            'hqfuvsw wklv whuw zlwk fdhvdu flskhu (urw-q) zlwk q ri 3'
        );
    });

    xit('should rotate string by 11 when asked', function () {
        assert.equal(
            caesar('caesar-cipher\n11\nencrypt this text with caesar cipher (rot-n) with n of 11'),
            'pyncjae estd epie htes nlpdlc ntaspc (cze-y) htes y zq 11'
        );
    });
});

describe('palindrome', function () {
    var palindrome = require('../lib/challenges/palindrome');

    it('should return "true" when string is palindrome', function () {
        assert.equal(palindrome('palindrome\nsaippuakauppias'), 'true');
    });

    it('should return "false" when string is not a palindrome', function () {
        assert.equal(palindrome('palindrome\nYli satasella!'), 'false');
    });

    it('should return "true" when string is a palindrome, but has special characters', function () {
        assert.equal(palindrome('palindrome\nAlle satasella!'), 'true');
    });

    it('should return "true" for a complex palindrome', function () {
        assert.equal(palindrome('palindrome\nTilaa tropit, ehosta kaaraa, katso heti portaalit!'), 'true');
    })
});

describe("nth-word", function() {
    var nthWord = require('../lib/challenges/nth-word');

    it('should find second word', function () {
        assert.equal(nthWord('nth-word\n2\nLorem ipsum dolor sit'), 'ipsum');
    });

    it('should find 68th word', function () {
        assert.equal(
            nthWord('nth-word\n68\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nFusce ut lacus enim, vitae bibendum magna. Maecenas et sem\neu sapien accumsan vehicula. Ut vel fringilla elit. Nam\ndolor sapien, scelerisque quis molestie at, faucibus a nisi.\nDonec orci augue, eleifend vel accumsan id, aliquet quis\nnibh. Integer suscipit sollicitudin orci nec pharetra.\nPhasellus vel neque felis. Donec bibendum nisi a nulla\ntempor placerat. Aliquam venenatis fringilla accumsan. Nunc\nsagittis vitae felis fermentum ornare. Nunc id risus nunc.\nCurabitur rhoncus, leo id fermentum posuere, felis ante\npellentesque elit, sit amet pretium libero mauris eu. Fusce\nimperdiet purus quis leo commodo nec feugiat diam pretium.\nMauris ac neque ut nunc vehicula varius.'),
            'Nunc'
        );
    });
});

describe('sort', function () {
    var sort = require('../lib/challenges/sort');

    it('should sort a list of positive number', function () {
        assert.equal(sort('sort\n6\n1\n7\n35\n5'), '1, 5, 6, 7, 35');
    });

    it('should sort a list of positive and negative numbers', function () {
        assert.equal(sort('sort\n76\n-94\n78\n23\n-9\n17\n82\n-32\n83\n71'), '-94, -32, -9, 17, 23, 71, 76, 78, 82, 83');
    });
});
