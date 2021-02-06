const fs = require('fs')

fs.readFile('./texts/names.txt', 'utf8', (err, data) => {
    if (err) console.log(err);
    // console.log(data);

    fs.readFile('./texts/numbers.txt', 'utf8', (err, numberData) => {
        if (err) console.log(err);
        // console.log(numberData);
        let all_number_data = numberData.split("\n") // to separate each row
        // console.log(all_number_data );
        //to create a list and make number data easy to use
        for (let i = 0; i < all_number_data.length; i++) {
            all_number_data[i] = (all_number_data[i].split('-'));
            for (let j = 0; j < 2; j++) {
                all_number_data[i][j] = all_number_data[i][j].trim()
            }
        }
        // console.log(all_number_data);

        /////////////////////////////////////////////////////////////

        //for names
        let names = [];
        let string = '';
        // for numbers
        let id = [];
        let stringId = '';

        //seperating numbers and strings
        for (let i = 0; i < data.length; i++) {
            if (isNaN(data[i]) === true) {
                names.push(data[i])
                string = string + data[i]
            }
            else {
                // console.log(data[i]);
                id.push(data[i]);
                stringId = stringId + data[i]
            }
        }

        str = string.slice(1);

        let names_of = str.split('-')
        // console.log(names_of);

        let numbers_of = stringId.split('\n')
        // console.log(numbers_of);

        let listOfNumbersStrings = [];
        for (let i = 0; i < numbers_of.length; i++) {
            listOfNumbersStrings[i] = ([numbers_of[i].trim(), names_of[i].trim()])
        }
        // console.log(listOfNumbersStrings);

        ///////////////////////////////////////////////////////
        //checking if ids are equal or not!
        let obj = {};
        let numberForObj = '';

        for (let i = 0; i < listOfNumbersStrings.length; i++) {
            for (let j = 0; j < all_number_data.length; j++) {
                if (listOfNumbersStrings[i][0] === all_number_data[j][0]) {
                    numberForObj += ` ${all_number_data[j][1]}, `
                }
                obj[listOfNumbersStrings[i][1]] = numberForObj
            }
            numberForObj = '';
        }

        let obj_keys = Object.keys(obj)
        let numberCount = 0;

        for (let i = 0; i < obj_keys.length; i++) {
            obj[obj_keys[i]] = obj[obj_keys[i]].trim()
            obj[obj_keys[i]] = obj[obj_keys[i]].split("").splice(0, obj[obj_keys[i]].length - 1).join('')
            // console.log(obj[obj_keys[i]]);
            numberCount = obj[obj_keys[i]].split(",").length
            // console.log(numberCount);

            if (obj[obj_keys[i]] === '') {
                console.log(`${obj_keys[i]} hasn't any phone number.`);
            }
            else if (numberCount > 1) {
                console.log(`${obj_keys[i]}'s phone numbers are ${obj[obj_keys[i]]}.`);
            }
            else {
                console.log(`${obj_keys[i]}'s phone number is ${obj[obj_keys[i]]}.`);
            }
        }

    })

})
//line 19 and 55