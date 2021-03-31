//greys out form options when they are selected.
function disableSelectedOption(objectName) {
    let selectedOption;
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    console.log(nameInHtml);
    selectedOption = document.getElementById(`option-${nameInHtml}`);
    selectedOption.setAttribute('disabled', true);
    console.log(selectedOption);
}

//Add advantage name to selected advantages array/container and assign ID and class.
let selectedAdvantageArray = [];
let isDuplicate = false;

function addToSelectedArray(objectName) {
    if (selectedAdvantageArray.includes(objectName.title)) {
        isDuplicate = true;
        window.alert("You have already selected this advantage");
        console.log('duplicate selected');
    } else {
        selectedAdvantageArray.push(objectName.title);
    }
}

function displaySelected() {
    const createSelectedAdvantageDiv = document.createElement('div');
    const placeSelectedText = document.getElementById('selected-advantages-text');
    
    selectedAdvantageArray.forEach(function (entry) {
        let nameInHtml = entry.split(" ").join("-").toLowerCase();
        placeSelectedText.appendChild(createSelectedAdvantageDiv);
        createSelectedAdvantageDiv.setAttribute("class", 'selected-advantages');
        createSelectedAdvantageDiv.setAttribute("id", `selected-advantage-${nameInHtml}`);
        createSelectedAdvantageDiv.innerHTML = entry;
        console.log(entry);
    })
}

//Add button and functionality to delete unwanted selection.
function addDeleteButton(objectName) {
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    let appendTo = document.getElementById(`selected-advantage-${nameInHtml}`);
    const button = document.createElement('button');

    appendTo.append(button);
    button.setAttribute("id", `delete-${nameInHtml}`);
}

function removeAdvantageText(objectName) {
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    // let advantageDescriptionToRemove = document.getElementById(`container-${removeThis}`);
    let selectedAdvantageToRemove = document.getElementById(`selected-advantage-${nameInHtml}`);
    // advantageDescriptionToRemove.remove();
    selectedAdvantageToRemove.remove();
    console.log(selectedAdvantageToRemove);
}

function removeFromArray(objectName) {
    let toRemove = selectedAdvantageArray.indexOf(objectName.title);
    if (toRemove > -1) {
        selectedAdvantageArray.splice(toRemove, 1);
    }
    console.log(toRemove);
    console.log(selectedAdvantageArray);
}

function reenableSelection(objectName) {
    let selectedOption;
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();

    console.log(nameInHtml);
    selectedOption = document.getElementById(`option-${nameInHtml}`);
    selectedOption.removeAttribute('disabled');
    console.log(selectedOption);
}

function removeAdvantage(objectName) {
    let nameInHtml = objectName.title.split(" ").join("-").toLowerCase();
    document.getElementById(`delete-${nameInHtml}`).addEventListener("click", function () {
        removeAdvantageText(objectName);
        reenableSelection(objectName);

        selectedOption = document.getElementById(`option-absolute-direction`);
        console.log(selectedOption);
    })
};

//Displays selected advantage titles in selection window.
function addToSelectedWindow(objectName) {
    addToSelectedArray(objectName);
    if (isDuplicate === false) {
        displaySelected();
        disableSelectedOption(objectName);
        addDeleteButton(objectName);
        removeAdvantage(objectName);
        removeFromArray(objectName);
    }
    //Resets variable value to allow other advantages to be selected.
    isDuplicate = false;
}

//Event listeners for user advantages selection.

//AAAAAAAAAAAAAAAA
document.getElementById("submit-advantage-a").addEventListener("click", function (e) {
    e.preventDefault();
    const userAdvantageA = document.getElementById('user-advantages-a').value;

    if (userAdvantageA === 'absolute direction') {
        addToSelectedWindow(absoluteDirection);
        console.log(selectedAdvantageArray);
    } else if (userAdvantageA === 'absolute timing') {
        addToSelectedWindow(absoluteTiming);
        console.log(selectedAdvantageArray);
    } else if (userAdvantageA === 'acute senses') {
        addToSelectedWindow(acuteSenses);
        console.log(selectedAdvantageArray);
    }
});
















//............A
let absoluteDirection = {
    title: "Absolute Direction",
    points: "5 or 10 points",
    description: "You have an excellent sense of direction.This ability comes in two levels:",
    subCategory1: {
        name: "Absolute Direction",
        text: "You always know which way is north, and you can always retrace a path you have followed within the past month, no matter how faint or confusing. This ability does not work in environments such as interstellar space or the limbo of the astral plane, but it does work underground, underwater, and on other planets. This gives +3 to Body Sense and Navigation (Air, Land, or Sea).<br> (Note: The navigational sense that guides migratory creatures to their destination is too crude to qualify; treat it as a 0-point feature.)",
        sub1Points: "5 points"
    },
    subCategory2: {
        name: "3D Spatial Sense",
        text: "As above, but works in three dimensions. This ability is useful in deep space – although it does not help you if you travel across dimensions. You get the skill bonuses to Piloting and +2 to Aerobatics, Free Fall, and Navigation (Hyperspace or Space).",
        sub2Points: "10 points"
    }
}

let absoluteTiming = {
    title: "Absolute Timing",
    points: "2 or 5 points",
    description: "You have an accurate mental clock. This ability comes in two levels, both of which are somewhat cinematic:",
    subCategory1: {
        name: "Absolute Timing",
        text: "You always know what time it is, with a precision equal to the best personal timepieces widely available in your culture (but never better than a few seconds). You can measure elapsed time with equal accuracy. Neither changes of time zone nor sleep interferes with this ability, and you can wake up at a predetermined time if you choose. Being knocked unconscious, hypnotized, etc. may prevent this advantage from working, and time travel will confuse you until you find out what the “new” time is. ",
        sub1Points: "2 points"
    },
    subCategory2: {
        name: "Chronolocation",
        text: "As above, but time travel does not interfere – you alwaysknow what time it is in an absolute sense. Note that things like Daylight Savings Time and calendar reform can still confuse you! When you travel in time, the GM may tell you, “You have gone back exactly 92,876.3 days,” and let you – or your character – deal with questions like, “What about leap year?",
        sub2Points: "5 points"
    }
}

let acuteSenses = {
    title: "Acute Senses",
    points: "2 points/level",
    description: "You have superior senses. Each Acute Sense is a separate advantage that gives +1 per level to all Sense rolls (p. 358) you make – or the GM makes for you – using that one sense. Acute Hearing gives you a bonus to hear something, or to notice a sound (for instance, someone taking the safety off a gun in the dark).",
    subCategory1: {
        name: "Acute Taste and Smell",
        text: "Gives you a bonus to notice a taste or smell (for instance, poison in your drink). 2 points/level.",
        sub1Points: "2 points/level"
    },
    subCategory2: {
        name: "Acute Touch",
        text: "Gives you a bonus to detect something by touch (for instance, a concealed weapon when patting down a suspect).",
        sub2Points: "2 points/level"
    },
    subCategory3: {
        name: "Acute Vision",
        text: "Gives you a bonus to spot things visually, and whenever you do a visual search (for instance, looking for traps or footprints).",
        sub3Points: "2 points/level"
    },
    extraText: "With the GM’s permission, you may also buy Acute Sense advantages for specialized senses such as Scanning Sense and Vibration Sense. You cannot usually buy Acute Senses in play – raise your Perception instead. However, if you lose a sense, the GM may allow you to spend earned points on other Acute Senses to compensate. For instance, if you are blinded, you might acquire Acute Hearing."
}