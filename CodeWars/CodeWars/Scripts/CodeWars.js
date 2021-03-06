﻿
function execute()
{
    var ttt = new TicTacToe();

    console.log(ttt.move()); // -> [5, "Your move?"]
    console.log(ttt.move(1)); // -> [3, "Your move?"]
    console.log(ttt.move(4)); // -> [7, "I win!"]
    console.log(ttt.move(9)); // -> [0, "Game ended"]

    //console.log(decodeBits('01110'));
    //decodeMorse('.... . -.--   .--- ..- -.. .');
}

function TicTacToe() {
    // fill out the construction function
    var moveHistory = [];
    var gameState = 1;//
    var pcMoves = [];
    var playerMoves = [];
    var endedState = 0;
    var errorState = 99;
    var goodState = 1;
    var lastMove = '';

    var victoryPossibilities =
        [
            "123",
            "147",
            "258",
            "357",
            "369",
            "456",
            "753",
            "789"
        ]

    var movePrefernces = [5, 1, 3, 7, 9, 2, 4, 6, 8];

    var returnCodes = {
        gameEnded: "Game ended",
        youWin: "You Win",
        draw: "Draw!",
        iWin: "I win!",
        yourMove: "Your Move?",
        badMove: "Illegal move"
    }

    function removePreference(val)
    {
        movePrefernces = movePrefernces.filter(function (elem, idx, array)
        {
            return elem != val;
        })
    }

    function addMove(move, mover)
    {
        moveHistory.push(move);
        mover.push(move);
        removePreference(move);
    }

    this.playerMove = function(move)
    {
        if (gameState != endedState)
        {
            if (moveHistory.join('').toString().indexOf(move.toString()) >= 0)
            {
                gameState = errorState;
            }
            else
            {
                gameState = goodState;
                addMove(move, playerMoves);
                lastMove = 'player';
            }
        }        
    }

    this.pcMove = function()
    {        
        addMove(movePrefernces[0], pcMoves);
        lastMove = 'pc';
    }

    this.evaluateGame = function()
    {        
        // check if game has ended
        if(gameState == endedState)
        {
            return [0, returnCodes.gameEnded];
        }

        // check if user errored
        if (gameState == errorState)
        {
            return [0, returnCodes.badMove];
        }

        // check if player ended game with move
        if(checkWin(playerMoves))
        {
            gameState = endedState;
            return [0, returnCodes.youWin];
        }

        //check for draw
        if (moveHistory.length == 9)
        {
            gameState = endedState;
            return [0, returnCodes.draw];
        }

        // check for pc win
        if(checkWin(pcMoves))
        {
            gameState = endedState;
            return [moveHistory[moveHistory.length - 1], returnCodes.iWin];
        }

        // check if player's turn again
        if(lastMove == 'pc')
        {
            return [moveHistory[moveHistory.length - 1], returnCodes.yourMove];
        }

        return null;
        
    }

    function checkWin(moves)
    {
        var win = false;
        //loop thru each win scenario and check if player won
        victoryPossibilities.forEach(function (elem, idx, array)
        {
            var hitCount = 0; //need 3 to win
            moves.forEach(function (field, idx, array)
            {
                if (elem.indexOf(field.toString()) >=0)
                {
                    hitCount += 1;
                }
            });

            if (hitCount == 3) { win = true }
        });

        return win;
    }
}

TicTacToe.prototype.move = function (field) {
    // fill out the move method
    var ret = [];

    if (field)
    {
        //player move
        this.playerMove(field);
        ret = this.evaluateGame();

        if (ret)
        {
            return ret;
        }
    }

    this.pcMove(field);

    return this.evaluateGame();

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