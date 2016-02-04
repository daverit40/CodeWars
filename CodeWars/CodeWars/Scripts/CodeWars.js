
function execute()
{
    console.log(decodeBits('01110'));
    //decodeMorse('.... . -.--   .--- ..- -.. .');
}

var decodeBits = function (bits) {
    var _dashPattern, _dotPattern, _dotPausePattern, _charPausePattern, _wordPausePattern = '';
    
    function getTimeUnitLength()
    {
        // here I want the smallest occurrance of 1s
        bits = bits.replace(/^0+|0+$/g, ""); // first remove trailing zeros
        return Math.min.apply(null, bits.replace(/10/g, '1$0').replace(/01/g, '0$1').replace(/0/g, '2').split('$')).toString().length;
    }

    var ul = getTimeUnitLength();

    console.log('time unit: ' + ul);

    function applyPattern(unitFactor, digit)
    {
        var returnPatern = '';

        for (i = 0; i < unitFactor; i ++)
        {
            for (j = 0; j < ul; j++)
            {
                returnPatern += digit;
            }
        }

        return returnPatern;
    }

    _dotPattern = applyPattern(1, "1");
    _dashPattern = applyPattern(3, "1");
    _dotPausePattern = applyPattern(1, "0");
    _charPausePattern = applyPattern(3, "0");
    _wordPausePattern = applyPattern(7, "0");

    var dashPattern = new RegExp(_dashPattern, 'g');
    var dotPattern = new RegExp(_dotPattern, 'g');
    var dotPausePattern = new RegExp(_dotPausePattern, 'g');
    var charPausePattern = new RegExp(_charPausePattern, 'g');
    var wordPausePattern = new RegExp(_wordPausePattern, 'g');

    return bits.replace(dashPattern, '-').replace(dotPattern, '.').replace(wordPausePattern, '   ').replace(charPausePattern, ' ').replace(dotPausePattern, '');
}

function decodeMorse(morseCode) {
    var codedWords = morseCode.trim().split('   ');
    var decodedWords = [];
    var letters = [];

    this.decodeWords = function (element, index, array) {
        element.split(' ').forEach(this.decodeLetters);
        decodedWords.push(letters.join(''));
        letters = [];
    }

    this.decodeLetters = function (element, index, array) {
        if (element.length > 0) {
            letters.push(MORSE_CODE[element]);
        }
    }

    if (codedWords.length > 0) {
        codedWords.forEach(this.decodeWords);
    }


    if (decodedWords.length > 0) {
        return decodedWords.join(' ');
    }

}

function narcissistic(value) {
    // Code me
    var narcVal = 0;
    for(i = 0; i < value.toString().length; i ++)
    {
        narcVal += Math.pow(value.toString().charAt(i), value.toString().length);
    }

    return narcVal == value;
}

function likes(names) {
    // TODO
    var output;

    switch (names.length) {
        case 0:
            output = 'no one likes this';
        case 1:
            output = names[0] + ' likes this';
        case 2:
            output = names[0] + ' and ' + names[1] + ' like this';
        case 3:
            output = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
        default:
            output = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }

    return output;

}

function spyOn(func) {

    func.name = "stupid";
    var val = null;
    val = func();
    var oldFunc = func;
    var _count = 0;
    var greeting = "howdy partner";
    
    oldFunc.showVal = function()
    {
        return val;
    }

    oldFunc.callCount = 0;

    oldFunc.myGreet = function()
    {
        return greeting;
    }

    oldFunc.addCalled = function()
    {
        _count += 1;
        oldFunc.callCount += 1;
    }

    oldFunc.changeGreet = function(msg)
    {
        if (msg)
        {
            greeting = msg;
        }
        else
        {
            greeting = "whattup";
        }

    }

    oldFunc.getCallCount = function()
    {
        return _count;
    }

    return function()
    {
        oldFunc.changeGreet('it worked!');
        return oldFunc;
    }
}

function spy(func)
{
    var _count = 0;
    return function()
    {
        _count++;

        var getCount = function()
        {
            return _count;
        }

        return func();
    }
}

var myObj = function ()
{
    greeting: 'hello there';
    this.greet = function()
    {
        console.log(greeting);
    }
}

function trickyDoubles(n) {
    //determine if its a doubl:
    var sn = n + '';
    
        if (sn.slice(0, (sn.length / 2 )) == sn.slice(sn.length / 2)) {
            return n;
        }
    return n * 2;
}

function myOtherObject()
{
    greeting: 'hi there';
}

function mySpy(func)
{
    var _count = 0;
    var result = func;
    var argList = [];
    var returnList = [];

    function spy()
    {
        _count++;
        argList.push(arguments);
        returnList.push(result.apply(this, arguments));

        return result.apply(this, arguments);
    }

    function getCallCount()
    {
        return _count;
    }

    function calledWith(val)
    {
        var found = false;

        argList.forEach(function (arg)
        {
            for(var i = 0; i < arg.length; i ++)
            {
                if (arg[i] == val)
                {
                    found = true;
                    break;
                }
            }
        });

        return found;
    }

    function didReturn(val)
    {
        var found = false;

        returnList.forEach(function (arg)
        {
            if (arg == val)
            {
                found = true;
            }
        });

        return found;
    }

    spy.returned = didReturn;
    spy.wasCalledWith = calledWith;
    spy.callCount = getCallCount;

    return spy;
    
}

function adder(n1, n2) { return n1 + n2; }

execute();